const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
function load() {
 const ctx = {window: {}};
 for (const file of ['questions_manifest.js', ...Array.from({length:9}, (_,i) => 'questions_e'+(i+1)+'.js'), 'question_sources.js', 'question_aliases.js']) {
  vm.runInNewContext(fs.readFileSync(path.join(root,'data',file),'utf8'),ctx,{filename:file});
 }
 return ctx.window;
}
const normalize = value => value.normalize('NFKC').toLowerCase().replace(/[’‘]/g, "'").replace(/[^a-z0-9]+/g,' ').trim();
function validate(w) {
 const errors=[], warnings=[], ids=new Set(), stems=new Map(), choices=new Map();
 let total=0;
 for(const e of w.CIRE_MANIFEST.elements) {
  const bank=w['CIRE_QUESTIONS_E'+e.id];
  if(bank.length!==e.bankCount) errors.push('Count mismatch E'+e.id);
  if(bank.length<e.examWeight) errors.push('Insufficient exam pool E'+e.id);
  const codes=new Set(e.subOutcomes.map(s=>s.code));
  for(const s of e.subOutcomes) if(!bank.some(q=>q.subOutcome===s.code)) errors.push('Uncovered '+s.code);
  for(const q of bank) {
   total++;
   if(ids.has(q.id)) errors.push('Duplicate ID '+q.id); ids.add(q.id);
   if(q.element!==e.id || !codes.has(q.subOutcome)) errors.push('Invalid mapping '+q.id);
   if(!q.question || !q.explanation) errors.push('Missing content '+q.id);
   if(!['Remember','Understand','Apply','Analyze'].includes(q.cognitiveLevel)) errors.push('Invalid level '+q.id);
   if(!Array.isArray(q.options) || q.options.length!==4 || new Set(q.options.map(normalize)).size!==4 || q.options.some(o=>typeof o!=='string'||!o.trim())) errors.push('Invalid choices '+q.id);
   if(!Number.isInteger(q.correct)||q.correct<0||q.correct>3) errors.push('Invalid answer '+q.id);
   const stem=normalize(q.question);
   if(stems.has(stem)) errors.push('Repeated stem '+q.id+' / '+stems.get(stem)); stems.set(stem,q.id);
   const choiceKey=JSON.stringify(q.options.map(normalize).sort());
   if(choices.has(choiceKey)) {
    const other=choices.get(choiceKey), a=normalize(other.question);
    if(stem.endsWith(a)||a.endsWith(stem)) errors.push('Repeated wrapped question '+q.id+' / '+other.id);
    else warnings.push('Review shared choices '+q.id+' / '+other.id);
   }
   choices.set(choiceKey,q);
   if(q.provenance==='original-2026-09' && (!q.references||!q.references.includes('syllabus'))) errors.push('Missing references '+q.id);
   for(const key of q.references||[]) if(!w.CIRE_SOURCES[key] || !/^https:\/\//.test(w.CIRE_SOURCES[key].url)) errors.push('Invalid reference '+q.id+': '+key);
  }
 }
 if(total!==w.CIRE_MANIFEST.totalQuestions) errors.push('Total mismatch');
 if(w.CIRE_MANIFEST.elements.reduce((n,e)=>n+e.examWeight,0)!==w.CIRE_MANIFEST.examQuestionsCount) errors.push('Exam weights mismatch');
 const all=w.CIRE_MANIFEST.elements.flatMap(e=>w['CIRE_QUESTIONS_E'+e.id]);
 for(let i=0;i<all.length;i++) for(let j=i+1;j<all.length;j++) {
  if(all[i].element!==all[j].element) continue;
  const a=new Set(normalize(all[i].question).split(' ')),b=new Set(normalize(all[j].question).split(' '));
  const overlap=[...a].filter(x=>b.has(x)).length;
  if(overlap/(a.size+b.size-overlap)>0.78) warnings.push('Review similar stems '+all[i].id+' / '+all[j].id);
 }
 for(const [oldId,a] of Object.entries(w.CIRE_QUESTION_ALIASES)) if(ids.has(oldId)||!ids.has(a.id)||a.options.length!==4||[...a.options].sort().join(',')!=='0,1,2,3') errors.push('Invalid alias '+oldId);
 return {total,errors,warnings};
}
if(require.main===module) { const result=validate(load());console.log(JSON.stringify(result,null,2));process.exitCode=result.errors.length?1:0; }
module.exports={load,validate};
