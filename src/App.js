import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import HomePage from './components/HomePage/HomePage';
import DriftPage from './components/DriftPage/DriftPage';
import ForzaPage from './components/ForzaPage/ForzaPage';
import TimeAttackPage from './components/TimeAttackPage/TimeAttackPage';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/router-menu/" element={<HomePage />} />
            <Route path="/router-menu/drift" element={<DriftPage />} />
            <Route path="/router-menu/timeattack" element={<TimeAttackPage />} />
            <Route path="/router-menu/forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}