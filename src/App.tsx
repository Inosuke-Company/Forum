import {Navigate,Route,Routes} from 'react-router-dom';
import {ForumPerfil} from './pages/ForumPerfil';
import {ForumHome} from './pages/ForumHome';
import {ForumFeed} from './pages/ForumFeed';
import {ForumMembers} from './pages/ForumMembers';
import {ForumSearch} from './pages/ForumSearch';
import {NewTopic} from './pages/NewTopic';
import {TopicView} from './pages/TopicView';
import {Notifications} from './pages/Notifications';
export default function App(){return <Routes>
<Route path="/" element={<Navigate to="/forum" replace/>}/>
<Route path="/forum" element={<ForumHome/>}/>
<Route path="/feed" element={<ForumFeed/>}/>
<Route path="/membros" element={<ForumMembers/>}/>
<Route path="/pesquisa" element={<ForumSearch/>}/>
<Route path="/novo-topico" element={<NewTopic/>}/>
<Route path="/topico/:id" element={<TopicView/>}/>
<Route path="/notificacoes" element={<Notifications/>}/>
<Route path="/perfil" element={<ForumPerfil/>}/>
<Route path="*" element={<Navigate to="/forum" replace/>}/>
</Routes>}