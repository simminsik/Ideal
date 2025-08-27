import { Routes, Route, Navigate } from "react-router-dom";
import HomeGuest from "../modules/home/HomeGuest.jsx";
import HomeAuthed from "../modules/home/HomeAuthed.jsx";
import LoginPage from "../modules/auth/LoginPage.jsx";
import ProblemsGuest from "../modules/problems/ProblemsGuest.jsx";
import ProblemsAuthed from "../modules/problems/ProblemsAuthed.jsx";
import ProblemSolve from "../modules/problems/ProblemSolve.jsx";
import ResultPage from "../modules/problems/ResultPage.jsx";
import CommunityGuest from "../modules/community/CommunityGuest.jsx";
import CommunityAuthed from "../modules/community/CommunityAuthed.jsx";
import BoardListGuest from "../modules/community/BoardListGuest.jsx";
import BoardListAuthed from "../modules/community/BoardListAuthed.jsx";
import LiveBattle from "../modules/battle/LiveBattle.jsx";
import BattleResult from "../modules/battle/BattleResult.jsx";
import Lobby from "../modules/lobby/Lobby.jsx";
import Playground from "../modules/play/Playground.jsx";
import MyPage from "../modules/account/MyPage.jsx";
import ChatPage from "../modules/chat/ChatPage.jsx";
import CollabPage from "../modules/collab/CollabPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeGuest />} />
      <Route path='/home' element={<HomeGuest />} />
      <Route path='/home/auth' element={<HomeAuthed />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/problems' element={<ProblemsGuest />} />
      <Route path='/problems/auth' element={<ProblemsAuthed />} />
      <Route path='/problems/:id' element={<ProblemSolve />} />
      <Route path='/result' element={<ResultPage />} />
      <Route path='/community' element={<CommunityGuest />} />
      <Route path='/community/auth' element={<CommunityAuthed />} />
      <Route path='/board' element={<BoardListGuest />} />
      <Route path='/board/auth' element={<BoardListAuthed />} />
      <Route path='/battle/live' element={<LiveBattle />} />
      <Route path='/battle/result' element={<BattleResult />} />
      <Route path='/lobby' element={<Lobby />} />
      <Route path='/play' element={<Playground />} />
      <Route path='/me' element={<MyPage />} />
      <Route path='/chat' element={<ChatPage />} />
      <Route path='/collab/:roomId' element={<CollabPage />} />
      <Route path='/collab' element={<CollabPage />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
}
