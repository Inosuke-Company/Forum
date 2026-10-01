import { Bell, ChevronLeft, ChevronRight, Home, MessageCircle, Plus, Search, Users } from 'lucide-react';

const topics = [
  ['DanielMFR','Socorro preciso de ajuda explodi o PC!!!','68','15'],
  ['+A','Como faz pra imprimir colorido na impressora HP? Ela é nova.','12','4'],
  ['Gomes_EXE','Quero comprar um PC gamer da positivo, vale a pena?','45','12'],
];

const popular = [
  ['Gamer_Master','Essa é a melhor webcam atual!','3221','212'],
  ['The_HeroBlu_2000','Como formatar meu computador?','3121','432'],
];

function TopicCard({data}:{data:string[]}){
 return <article className="topic-card"><div className="avatar"/><div className="topic-body"><div className="meta">{data[0]} <span/> Online</div><strong>{data[1]}</strong><footer>☆ {data[2]}　◯ {data[3]}</footer></div><b>⋮</b></article>
}

export function ForumHome(){
 return <main className="forum-mobile"><header><div className="logo">ADRENALINE<br/>FÓRUM</div><Globe/><Bell/></header><nav><button>Gabinetes e Case Mod</button><button>Áudio PC</button><ChevronRight/></nav><small>Fórum　&gt; Inicial</small><h2>Tópicos Recentes</h2>{topics.map((t,i)=><TopicCard key={i} data={t}/>)}<div className="pager"><ChevronLeft/>1 de 30<ChevronRight/></div><div className="banner">Nvidia anuncia a 3090 Ti! Confira a matéria no portal Adrenaline.</div><h2>Mais Visualizados</h2>{popular.map((t,i)=><TopicCard key={i} data={t}/>) }<Bottom/></main>
}
function Globe(){return <span>◎</span>}
function Bell(){return <Bell className="icon"/>}
function Bottom(){return <footer className="bottom"><Home/><Search/><button><Plus/></button><Users/><MessageCircle/></footer>}
