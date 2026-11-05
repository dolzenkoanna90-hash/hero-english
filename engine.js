import {grade4Topics,grade4Words,grade4RouteIds} from './grade4.js';
import {grade3Topics,grade3Words,grade3RouteIds} from './grade3.js';
import {extraTopics,extraWords,quizWords,routeIds} from './curriculum.js';
export const topics=[
 {id:'th',title:'Секрет звука th',label:'th',color:'purple',description:'thumb, three, the, this',explain:'Две буквы th работают вместе. Для thumb и three чуть высуни кончик языка между зубами и мягко выдохни. Для the и this добавь голос: приложи пальцы к горлу и почувствуй вибрацию.',tip:'В thumb последняя b не произносится, но при письме её нужно сохранить.',page:'Учебник, стр. 14'},
 {id:'ph',title:'Две буквы — один звук',label:'ph',color:'blue',description:'photo, dolphin, elephant',explain:'Буквосочетание ph звучит как /f/: верхние зубы слегка касаются нижней губы, воздух проходит между ними. Слышим один звук, а пишем две буквы — p и h.',tip:'Сравни fish и photo: начальный звук похож, но записан по-разному.',page:'Учебник, стр. 15'},
 {id:'shch',title:'Слушай: sh или ch?',label:'sh / ch',color:'green',description:'fish, ship, sheep, chick, cheese',explain:'sh — протяжный шипящий звук /ʃ/, как просьба соблюдать тишину. ch — короткий звук /tʃ/. Послушай ship и chick: начинается по-разному!',tip:'Не угадывай по картинке: сначала послушай слово.',page:'Повторение, стр. 12–13'},
 {id:'school',title:'В школьном рюкзаке',label:'ABC',color:'orange',description:'pen, book, bag, ruler',explain:'Учимся узнавать школьные предметы на слух и писать их названия. Затем можно назвать предмет: It is a pen. — Это ручка.',tip:'Посмотри на слово, закрой его, напиши по памяти и сравни.',page:'Дополнительная практика'},
 {id:'greetings',title:'Познакомимся с командой',label:'Hi!',color:'pink',description:'hello, name, friend, hero',explain:'Hello! — Привет! My name is… — Меня зовут… Говори короткими фразами. Сначала послушай, потом повтори и представься своим именем.',tip:'Назови себя без образца, а затем спроси: What is your name?',page:'Разговорная практика'}
];
export const words=[
 ['thumb','большой палец','👍','th','thumb'],['three','три','③','th','three'],['the','определённый артикль','🔎','th','the'],['this','этот / эта / это','👇','th','this'],
 ['photo','фотография','📷','ph','photo'],['dolphin','дельфин','🐬','ph','dolphin'],['elephant','слон','🐘','ph','elephant'],
 ['fish','рыба','🐟','shch','fish'],['ship','корабль','🚢','shch','ship'],['sheep','овца','🐑','shch','sheep'],['chick','цыплёнок','🐥','shch','chick'],['cheese','сыр','🧀','shch','cheese'],
 ['pen','ручка','🖊️','school','pen'],['book','книга','📘','school','book'],['bag','сумка','🎒','school','bag'],['ruler','линейка','📏','school','ruler'],
 ['hello','привет','👋','greetings','hello'],['name','имя','🏷️','greetings','name'],['friend','друг','🤝','greetings','friend'],['hero','герой','🦸','greetings','hero']
].map(([id,ru,emoji,topic,en])=>({id,ru,emoji,topic,en}));
export const missions=[{id:'spider',name:'Человек-паук',title:'Сигнал с крыши',topic:'th',description:'Восстанови связь с командой и расшифруй слова с th.',color:'purple',symbol:'🕸',tag:'СЕГОДНЯ · СТР. 14'}, {id:'iron',name:'Капитан Америка',title:'Настрой рацию команды',topic:'ph',description:'Научи рацию узнавать ph и собери секретные слова.',color:'blue',symbol:'⚡',tag:'СЛЕДУЮЩАЯ МИССИЯ · СТР. 15'}, {id:'bat',name:'Бэтмен',title:'Ночной радиоперехват',topic:'shch',description:'Услышь разницу между sh и ch. Проверь сигнал!',color:'orange',symbol:'🦇',tag:'ПОВТОРЕНИЕ · СТР. 12–13'}];
topics.push(...extraTopics);
for(const t of topics)t.grade=2;
topics.push(...grade3Topics,...grade4Topics);
routeIds.push(...grade3RouteIds,...grade4RouteIds);
words.push(...extraWords,...quizWords,...grade3Words,...grade4Words);
const schoolTopic=topics.find(t=>t.id==='school');Object.assign(schoolTopic,{page:'Учебник, часть 1, стр. 20–21 (bag, ruler — дополнительно)',module:'Starter Module',sentences:['This is my pen.','Open your books.','Close your books.'],reflection:'Как попросить открыть книги? Как сказать «Это моя ручка»?'});
Object.assign(topics.find(t=>t.id==='greetings'),{page:'Учебник, часть 1, стр. 18–20',module:'Starter Module',sentences:['Hello!','My name is Robin.','What is your name?'],reflection:'Придумай нового героя, представь его и спроси имя друга.'});
words.push({id:'numbers-three',en:'three',ru:'три',emoji:'③',topic:'numbers'},{id:'school-pencil',en:'pencil',ru:'карандаш',emoji:'✏️',topic:'school'},{id:'school-workbook',en:'workbook',ru:'рабочая тетрадь',emoji:'📒',topic:'school'});
for(const t of topics)if(!t.page.includes('часть'))t.page=t.page.replace('Учебник,','Учебник, часть 1,');
for(const [i,id] of routeIds.entries()){if(missions.some(m=>m.topic===id))continue;const t=topics.find(t=>t.id===id),heroes=[missions[0],missions[1],missions[2]],h=heroes[i%3];missions.push({id:'mission-'+id,topic:id,name:h.name,title:t.title,description:'Помоги команде: '+t.description+'.',symbol:h.symbol,color:h.color,tag:t.page});}
export const curriculum=routeIds.map(id=>topics.find(t=>t.id===id));
export const vocabulary=words.filter(w=>w.kind!=='meaning');
export function fresh(){return {version:1,topics:{},words:{},sessions:[],active:null,sound:true,chat:[],curriculum:{start:'th',unlocked:['th']}};}
export function newStats(){return {done:0,correct:0,wrong:0,hints:0,independent:0,level:1,lastPractice:null,streak:0,listening:0,writing:0};}
export function cleanState(s){
 if(!s||s.version!==1||!s.topics||!s.words||!Array.isArray(s.sessions))return fresh();
 const base=fresh();base.sound=s.sound!==false;
 for(const t of topics){const v=s.topics[t.id];if(v)base.topics[t.id]=safeStats(v);}
 for(const w of words){const v=s.words[w.id];if(v)base.words[w.id]={...safeStats(v),due:Number.isFinite(v.due)?v.due:0};}
 base.sessions=s.sessions.filter(x=>x&&Number.isFinite(x.seconds)&&x.seconds>=0&&Array.isArray(x.words)).slice(-200).map(x=>({...x,words:x.words.filter(id=>words.some(w=>w.id===id))}));
 if(s.active&&missions.some(m=>m.id===s.active.mission)&&['intro','practice','break','speaking','reflect','complete'].includes(s.active.phase)&&Number.isInteger(s.active.index)&&s.active.index>=0&&s.active.index<=12&&Array.isArray(s.active.items)&&s.active.items.every(id=>words.some(w=>w.id===id))&&s.active.items.length===12&&Number.isFinite(s.active.seconds))base.active={...s.active,seconds:Math.max(0,s.active.seconds),topic:topics.some(t=>t.id===s.active.topic)?s.active.topic:'th',date:typeof s.active.date==='string'&&!Number.isNaN(Date.parse(s.active.date))?s.active.date:new Date().toISOString(),results:Array.isArray(s.active.results)?s.active.results.filter(x=>x&&words.some(w=>w.id===x.id)).map(x=>({id:x.id,correct:!!x.correct,hints:Number.isFinite(x.hints)?Math.max(0,x.hints):0})):[],spoken:Array.isArray(s.active.spoken)?s.active.spoken:[],reflection:typeof s.active.reflection==='string'?s.active.reflection:'',exercise:null};
 if(base.active){const e=s.active.exercise;if(e&&e.session===base.active.date&&e.index===base.active.index&&e.id===base.active.items[e.index]&&['listen','build','gap','write','meaning'].includes(e.type)&&Array.isArray(e.choices)&&e.choices.every(c=>e.type==='meaning'?words.find(w=>w.id===e.id)?.options?.some(o=>o.id===c?.id):words.some(w=>w.id===c?.id))&&Array.isArray(e.letters)&&e.letters.every(l=>l&&typeof l.l==='string'&&/^[a-z -]$/.test(l.l)&&Number.isInteger(l.i))&&Array.isArray(e.used))base.active.exercise={...e,hints:Number.isInteger(e.hints)?Math.min(3,Math.max(0,e.hints)):0,answer:typeof e.answer==='string'?e.answer:'',used:e.used.filter(Number.isInteger),choices:e.choices.map(c=>e.type==='meaning'?words.find(w=>w.id===e.id).options.find(o=>o.id===c.id):words.find(w=>w.id===c.id))};}
 base.sessions=base.sessions.map(x=>({...x,reflection:typeof x.reflection==='string'?x.reflection:'',spoken:Array.isArray(x.spoken)?x.spoken:[]}));
 base.chat=Array.isArray(s.chat)?s.chat.filter(x=>x&&['user','bot'].includes(x.role)&&typeof x.text==='string').slice(-30):[];
 if(s.curriculum){base.curriculum.start=routeIds.includes(s.curriculum.start)?s.curriculum.start:'th';base.curriculum.unlocked=Array.isArray(s.curriculum.unlocked)?s.curriculum.unlocked.filter(id=>routeIds.includes(id)):['th'];}
 syncCurriculum(base);return base;
}
function safeStats(v){const n=newStats();for(const k of ['done','correct','wrong','hints','independent','streak','listening','writing'])n[k]=Number.isFinite(v[k])?Math.max(0,Math.floor(v[k])):0;n.level=Number.isInteger(v.level)?Math.min(3,Math.max(1,v.level)):1;n.lastPractice=typeof v.lastPractice==='string'&&!Number.isNaN(Date.parse(v.lastPractice))?v.lastPractice:null;return n;}
export function normalize(s){return String(s).trim().toLowerCase().replace(/[.!?]+$/,'').replace(/\s+/g,' ');}
export function applyAnswer(s,id,{correct,hints=0,type=null},now=Date.now()){
 const w=words.find(w=>w.id===id);if(!w)throw new Error('Unknown word');
 const ws=s.words[id]||{...newStats(),due:0},ts=s.topics[w.topic]||newStats();
 for(const v of [ws,ts]){v.done++;v[correct?'correct':'wrong']++;v.hints+=hints;v.lastPractice=new Date(now).toISOString();if(correct&&hints===0){v.independent++;v.streak++;if(type==='listen')v.listening++;if(type==='write')v.writing++;}else v.streak=0;
  if(!correct)v.level=Math.max(1,v.level-1);else if(v.streak>=3){v.level=Math.min(3,v.level+1);v.streak=0;}}
 ws.due=now+(!correct?0:hints?86400000:ws.level===3?604800000:172800000);
 s.words[id]=ws;s.topics[w.topic]=ts;return s;
}
export function mastery(v){return v&&v.done?Math.min(v.done<5?74:100,Math.round(v.independent/Math.max(v.done,5)*100)):0;}
export function weakWords(s,now=Date.now()){return words.filter(w=>{const v=s.words[w.id];return v&&((v.wrong>0&&mastery(v)<75)||v.due<=now||v.hints>0&&mastery(v)<60);}).sort((a,b)=>mastery(s.words[a.id])-mastery(s.words[b.id]));}
export function chooseWords(s,topic,count=12,now=Date.now()){
 const rank=v=>!v?1:v.due<=now?0:2;
 const sort=(a,b)=>rank(s.words[a.id])-rank(s.words[b.id])||(s.words[a.id]?.done||0)-(s.words[b.id]?.done||0)||mastery(s.words[a.id])-mastery(s.words[b.id]);
 const pool=vocabulary.filter(w=>w.topic===topic).sort(sort),quiz=words.filter(w=>w.topic===topic&&w.kind==='meaning').sort(sort);
 if(!pool.length)throw Error('Unknown topic');
 let vi=0,qi=0;return Array.from({length:count},(_,i)=>quiz.length&&i%4===3?quiz[qi++%quiz.length].id:pool[vi++%pool.length].id);
}
export function taskType(s,w,index){if(w.kind==='meaning')return 'meaning';const l=s.words[w.id]?.level||s.topics[w.topic]?.level||1;return (s.words[w.id]?.done||0)%3===0?'listen':l===1?'build':l===2?'gap':'write';}
export function mask(w){if(w.topic==='th')return w.en.replace('th','__');if(w.topic==='ph')return w.en.replace('ph','__');if(w.topic==='shch')return w.en.replace(/sh|ch/,'__');return w.en.slice(0,1)+'_'.repeat(w.en.length-1);}
export function hint(w,n,type=null){if(type==='listen'&&n===1)return 'Послушай слово ещё раз и повтори его вслух. Какие звуки ты услышал? Сравни смысл вариантов и попробуй снова.';if(w.kind==='meaning')return n<3?w.hints[n-1]:w.explanation+' Закрой образец и попробуй снова.';const t=topics.find(t=>t.id===w.topic);return n===1?`${w.emoji} Это «${w.ru}». ${w.topic==='th'?'Вспомни две буквы для звука, который произносим с языком между зубами.':w.topic==='ph'?'Слышим /f/. Какими двумя буквами его записываем в этой миссии?':w.topic==='shch'?'Произнеси начало: звук тянется или звучит коротко?':'Послушай слово ещё раз. Вспомни первую букву.'}`:n===2?`Слово начинается с «${w.en[0]}», в нём ${w.en.replace(/[^a-z]/gi,'').length} букв. ${w.topic==='ph'?'Буквы p и h стоят рядом.':w.topic==='th'?'Буквы t и h стоят рядом.':t.tip}`:`Посмотри на образец: ${w.en}. Прочитай, закрой подсказку и попробуй ответить самостоятельно.`;}
export function demoState(now=Date.now()){
 const s=fresh();for(const [i,w] of words.slice(0,12).entries()){for(let j=0;j<5;j++)applyAnswer(s,w.id,{correct:!(i%4===0&&j<2),hints:i%4===0?1:0},now-(5-j)*86400000);}
 s.sessions=[{date:new Date(now-172800000).toISOString(),seconds:1680,words:['thumb','three','the','this'],mission:'spider',complete:true},{date:new Date(now-86400000).toISOString(),seconds:2040,words:['photo','dolphin','elephant'],mission:'iron',complete:true}];return s;
}

export function topicReadiness(s,id){
 const bank=vocabulary.filter(w=>w.topic===id),quiz=words.filter(w=>w.topic===id&&w.kind==='meaning');
 const mastered=bank.filter(w=>mastery(s.words[w.id])>=75).length;
 const skills=bank.filter(w=>(s.words[w.id]?.listening||0)>0&&(s.words[w.id]?.writing||0)>0).length;
 const understood=quiz.filter(w=>(s.words[w.id]?.independent||0)>=2&&mastery(s.words[w.id])>=75).length;
 const sessions=s.sessions.filter(x=>x.complete&&!x.review&&(x.topic===id||(!x.topic&&missions.find(m=>m.id===x.mission)?.topic===id))).length;
 return {ready:mastered===bank.length&&skills===bank.length&&understood===quiz.length&&sessions>=2,mastered,total:bank.length,skills,understood,checks:quiz.length,sessions};
}
export function syncCurriculum(s){
 s.curriculum ||= {start:'th',unlocked:['th']};
 const start=routeIds.indexOf(s.curriculum.start);s.curriculum.unlocked=[...new Set([...s.curriculum.unlocked,...routeIds.slice(0,start+1)])];
 for(let i=start;i<routeIds.length-1;i++){const id=routeIds[i];if(!s.curriculum.unlocked.includes(id))break;if(topicReadiness(s,id).ready&&!s.curriculum.unlocked.includes(routeIds[i+1]))s.curriculum.unlocked.push(routeIds[i+1]);}
 return s;
}
export function isUnlocked(s,id){return !routeIds.includes(id)||s.curriculum.unlocked.includes(id);}
export function currentTopic(s){syncCurriculum(s);return curriculum.filter(t=>isUnlocked(s,t.id)).at(-1)||curriculum[0];}
export function setSchoolTopic(s,id){if(!routeIds.includes(id))throw Error('Unknown school topic');s.curriculum.start=id;s.curriculum.unlocked=routeIds.slice(0,routeIds.indexOf(id)+1);syncCurriculum(s);return s;}
