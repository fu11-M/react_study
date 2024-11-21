import './App.css';
import Day from './component/Day';
import DayList from './component/DayList';
import Header from './component/Header';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import EmptyPage from './component/EmptyPage';
import CreateWrod from './component/CreateWord';
import CreateDay from './component/CreateDay';


function App() {
  return ( 
      <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<DayList/>} />
          <Route path="/day/:day" element={<Day/>} />
          <Route path="*" element={<EmptyPage/>} />
          <Route path="/create_word" element={<CreateWrod />}/>
          <Route path="/create_day" element={<CreateDay />}/>
        </Routes>
        </BrowserRouter>
      </div>
  );
}
export default App; // 기본 내보내기