import { Routes, Route, Navigate } from 'react-router-dom';
import { ForumPerfil } from './pages/ForumPerfil';
import { ForumHome } from './pages/ForumHome';
import { PlaceholderPage } from './pages/PlaceholderPage';

export default function App(){return <Routes><Route path="/" element={<Navigate to="/forum" replace/>}/><Route path="/forum" element={<ForumHome/>}/><Route path="/perfil" element={<ForumPerfil/>}/><Route path="/feed" element={<PlaceholderPage title="Feed"/>}/><Route path="/pesquisa" element={<PlaceholderPage title="Pesquisa"/>}/><Route path="/notificacoes" element={<PlaceholderPage title="Notificações"/>}/><Route path="*" element={<Navigate to="/forum" replace/>}/></Routes>}
