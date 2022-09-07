import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChatsPage from './pages/ChatsPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <HomePage />} />
      <Route path={'/chats'} element={ <ChatsPage />} />
      <Route path={'/profile'} element={ <ProfilePage />} />
      <Route path={'*'} element={ <NotFoundPage />} /> 
    </Routes>
  );
}

export default App;
