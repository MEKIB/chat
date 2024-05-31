import './App.css'
import { Button } from '@chakra-ui/react';
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" Component={HomePage} exact/>
        <Route path="/chats" Component={ChatPage}/>
      </Routes>
    </div>
  );
}

export default App
