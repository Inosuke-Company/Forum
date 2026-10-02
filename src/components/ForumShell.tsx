import {Bell,Compass,Globe2,Home,Plus,Search,Rss,Users,MessageSquare,Bookmark,Settings} from 'lucide-react';
import {ReactNode} from 'react';
import {useLocation,useNavigate} from 'react-router-dom';

export function ForumShell({children}:{children:ReactNode}){
  const navigate=useNavigate(); const location=useLocation();
  const active=location.pathname.startsWith('/pesquisa')?'search':location.pathname.startsWith('/membros')?'users':location.pathname.startsWith('/feed')?'feed':location.pathname.startsWith('/forum')?'home':'';
  const nav=(path:string)=>navigate(path);
  return <div className="app-shell">
    <header className="topbar">
      <div className="topbar-inner">
        <button className="brand" onClick={()=>nav('/forum')} aria-label="Fórum Adrenaline"><span className="brand-mark">A</span><span className="brand-word">adrenaline</span></button>
        <button className="top-search" onClick={()=>nav('/pesquisa')} aria-label="Pesquisar no fórum"><Search size={17}/><span>Pesquisar no fórum</span><kbd>⌘ K</kbd></button>
        <div className="top-actions">
          <button aria-label="Explorar"><Compass size={19}/></button>
          <button aria-label="Comunidade pública"><Globe2 size={19}/></button>
          <button className="notification-button" aria-label="Notificações" onClick={()=>nav('/notificacoes')}><Bell size={19}/><i/></button>
          <button className="mini-avatar" onClick={()=>nav('/perfil')} aria-label="Meu perfil">D</button>
        </div>
      </div>
    </header>

    <div className="layout">
      <aside className="left-rail">
        <div className="rail-group">
          <div className="rail-label">COMUNIDADE</div>
          <button className={`rail-link ${active==='home'?'active':''}`} onClick={()=>nav('/forum')}><Home size={18}/><span>Início</span></button>
          <button className={`rail-link ${active==='feed'?'active':''}`} onClick={()=>nav('/feed')}><Rss size={18}/><span>Feed</span></button>
          <button className={`rail-link ${active==='search'?'active':''}`} onClick={()=>nav('/pesquisa')}><Search size={18}/><span>Pesquisar</span></button>
          <button className={`rail-link ${active==='users'?'active':''}`} onClick={()=>nav('/membros')}><Users size={18}/><span>Membros</span></button>
        </div>
        <div className="rail-group">
          <div className="rail-label">SEUS ESPAÇOS</div>
          <button className="rail-link" onClick={()=>nav('/perfil')}><MessageSquare size={18}/><span>Minhas conversas</span></button>
          <button className="rail-link"><Bookmark size={18}/><span>Salvos</span></button>
        </div>
        <div className="rail-spacer"/>
        <button className="rail-link"><Settings size={18}/><span>Configurações</span></button>
        <button className="new-topic-button" onClick={()=>nav('/novo-topico')}><Plus size={18}/><span>Novo tópico</span></button>
      </aside>

      <main className="content-column">{children}</main>

      <aside className="right-rail">
        <section className="rail-card">
          <div className="rail-card-title">Tópicos em destaque <span>›</span></div>
          <div className="trend"><b>01</b><div><strong>Discussões mais quentes</strong><span>acompanhe a comunidade</span></div></div>
          <div className="trend"><b>02</b><div><strong>Hardware & PC</strong><span>novas conversas</span></div></div>
          <div className="trend"><b>03</b><div><strong>Games</strong><span>o que a comunidade está jogando</span></div></div>
        </section>
        <section className="rail-card community-card">
          <span className="eyebrow">ADRENALINE COMMUNITY</span>
          <strong>Conecte-se com quem entende.</strong>
          <p>Compartilhe conhecimento, dúvidas e experiências.</p>
          <button onClick={()=>nav('/novo-topico')}>Começar uma conversa <Plus size={14}/></button>
        </section>
      </aside>
    </div>

    <nav className="bottom-nav" aria-label="Navegação principal">
      <button className={active==='home'?'active':''} onClick={()=>nav('/forum')}><Home size={22}/><span>Início</span></button>
      <button className={active==='search'?'active':''} onClick={()=>nav('/pesquisa')}><Search size={22}/><span>Buscar</span></button>
      <button className="create" aria-label="Criar tópico" onClick={()=>nav('/novo-topico')}><Plus size={28}/></button>
      <button className={active==='users'?'active':''} onClick={()=>nav('/membros')}><Users size={22}/><span>Membros</span></button>
      <button className={active==='feed'?'active':''} onClick={()=>nav('/feed')}><Rss size={22}/><span>Feed</span></button>
    </nav>
  </div>
}