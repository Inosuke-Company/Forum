import { Bell, ChevronDown, ChevronLeft, ChevronRight, Globe2, Menu, MessageCircle, Pencil, Search, Speakerphone, Star, Users, MoreVertical } from 'lucide-react';
import { FIGMA_ASSETS as A } from '../assets/figma';

type Topic = { user:string; title:string; stars:string; replies:string; avatar:string };
const recent:Topic[]=[
 {user:'DanielMFR',title:'Socorro explodi o PC!!!',stars:'68',replies:'15',avatar:A.avatar01},
 {user:'Riba_X?X',title:'Como faz pra imprimir colorido na impressora HP?',stars:'12',replies:'4',avatar:A.avatar02},
 {user:'Gomes_EXE',title:'Quero comprar um PC gamer da positivo, vale a pena?',stars:'55',replies:'15',avatar:A.avatar03},
 {user:'Josué P.',title:'Meu computador desliga sozinho!',stars:'650',replies:'557',avatar:A.avatar04},
];
const popular:Topic[]=[
 {user:'FBM_2000',title:'Me indiquem uma TV 4K!!',stars:'789',replies:'645',avatar:A.avatar05},
 {user:'SS_Kag',title:'Qual placa de vídeo escolher, 3060Ti ou 6600 XT?',stars:'459',replies:'423',avatar:A.avatar06},
 {user:'Gamer_Master',title:'Essa é a melhor webcam atual!',stars:'3221',replies:'212',avatar:A.avatar07},
 {user:'The_HeroBlu_2000',title:'Como formatar meu computador?',stars:'3121',replies:'432',avatar:A.avatar08},
];

function TopicCard({topic}:{topic:Topic}) {
 return <article className="desktop-topic">
   <img className="desktop-avatar" src={topic.avatar} alt=""/>
   <div className="desktop-topic-main">
     <div className="desktop-topic-head"><b>{topic.user}</b><i/> <strong>{topic.title}</strong></div>
     <p>This is cold jus Margeret River kombucha throwback comfort food with a twist food truck provenence locally sourced. Braised lamb shoulder regards to the chef the satisfying snap of tempered chocolate two hours sittings.</p>
   </div>
   <div className="desktop-topic-stats"><span><Star/> {topic.stars}</span><span><MessageCircle/> {topic.replies}</span></div>
   <MoreVertical className="topic-more"/>
 </article>
}

function Sidebar() {
 return <aside className="forum-sidebar">
   <section className="side-card">
     <h3>Últimas publicações</h3>
     <div className="side-post"><img src={A.avatar09}/><div><b>Hardware</b><span>Novidades e discussões</span></div></div>
     <div className="side-post"><img src={A.avatar02}/><div><b>Games</b><span>Discussões recentes</span></div></div>
     <div className="side-post"><img src={A.avatar04}/><div><b>Software</b><span>Ajuda e tutoriais</span></div></div>
   </section>
   <section className="side-card my-topics"><h3>Meus temas</h3><button>＋</button><p>Nenhum tema criado ainda.</p></section>
   <div className="side-ad">PUBLICIDADE</div>
 </aside>
}

function Header(){
 return <header className="forum-header">
   <div className="header-left">
     <nav><a className="active"><Speakerphone/> Fórum</a><a><Users/> Membros</a><a><Globe2/> Portal</a></nav>
   </div>
   <img className="desktop-logo" src={A.logo} alt="Adrenaline"/>
   <div className="header-right">
     <a><Pencil/> Novo Tópico</a><a><Search/> Buscar</a><Bell/>
     <button className="profile-mini"><img src={A.avatar01}/><ChevronDown/></button>
   </div>
 </header>
}

export function ForumHome(){
 return <div className="forum-shell">
   <Header/>
   <div className="forum-breadcrumb">Fórum　&gt;　Inicial</div>
   <main className="forum-content">
     <section className="forum-main-column">
       <h1>Tópicos Recentes</h1>
       {recent.map((topic,i)=><TopicCard key={i} topic={topic}/>)}
       <div className="forum-pagination"><ChevronLeft/><button className="selected">1</button><button>2</button><button>3</button><ChevronRight/></div>
       <div className="forum-ad">
         <img src={A.banner} alt=""/>
         <div><b>Nvidia anuncia a 3090 Ti!</b><span>Confira a matéria no portal Adrenaline.</span></div>
       </div>
       <h1>Mais Visualizados</h1>
       {popular.map((topic,i)=><TopicCard key={i} topic={topic}/>)}
     </section>
     <Sidebar/>
   </main>
   <div className="forum-bottom-accent"/>
   <div className="mobile-forum-nav"><Menu/><Search/><button>＋</button><Users/><MessageCircle/></div>
 </div>
}
