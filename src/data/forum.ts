export type Topic={id:string;author:string;category:string;title:string;excerpt:string;stars:number;replies:number;online?:boolean;createdAt:string;featured?:boolean};
export type Member={name:string;status:'online'|'offline';posts:number;topics:number};
export const seedTopics:Topic[]=[
{id:'pc-positivo',author:'Gomes_EXE',category:'PC',title:'Quero comprar um PC gamer da positivo, vale a pena?',excerpt:'Quero montar meu primeiro PC gamer e estou em dúvida sobre esse modelo.',stars:45,replies:12,createdAt:'2h'},
{id:'ajuda-pc',author:'DanielMFR',category:'PC',title:'Socorro preciso de ajuda explodi o PC!!!',excerpt:'Meu computador parou depois de uma montagem e preciso de uma orientação.',stars:68,replies:15,createdAt:'agora',online:true},
{id:'impressora',author:'+A',category:'Tecnologia',title:'Como faz pra imprimir colorido na impressora HP? Ela é nova.',excerpt:'Acabei de comprar a impressora e não estou conseguindo imprimir em cores.',stars:12,replies:4,createdAt:'1h',online:true},
{id:'webcam',author:'Gamer_Master',category:'Hardware',title:'Essa é a melhor webcam atual!',excerpt:'Testei algumas webcams e queria compartilhar minha experiência.',stars:3221,replies:212,createdAt:'3h',online:true,featured:true},
{id:'formatar',author:'The_HeroBlu_2000',category:'PC',title:'Como formatar meu computador?',excerpt:'Preciso formatar e instalar tudo novamente. Qual a melhor ordem?',stars:3121,replies:432,createdAt:'5h',online:true},
{id:'3090-ti',author:'Riba_X?X',category:'Hardware',title:'Nvidea anuncia a 3090 Ti! Confira a matéria no portal Adrenaline.',excerpt:'Discussão sobre a nova placa e expectativas da comunidade.',stars:0,replies:0,createdAt:'hoje'}];
export const seedMembers:Member[]=[{name:'DanielMFR',status:'online',posts:28,topics:6},{name:'Gamer_Master',status:'online',posts:212,topics:31},{name:'The_HeroBlu_2000',status:'online',posts:432,topics:44},{name:'Gomes_EXE',status:'offline',posts:45,topics:9},{name:'+A',status:'online',posts:4,topics:1}];
const KEY='forum-adrenaline-topics-v1';
export function loadTopics():Topic[]{try{const raw=localStorage.getItem(KEY);return raw?JSON.parse(raw):seedTopics}catch{return seedTopics}}
export function saveTopics(topics:Topic[]){localStorage.setItem(KEY,JSON.stringify(topics))}
export function createTopic(input:Pick<Topic,'title'|'category'|'excerpt'>):Topic{return{id:crypto.randomUUID(),author:'DanielMFR',category:input.category,title:input.title,excerpt:input.excerpt,stars:0,replies:0,createdAt:'agora',online:true}}
