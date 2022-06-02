import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import PageContainer from './pages/PageContainer';

function App() {
  return (
    <div>
      <Routes>
        <Route path ='/' element={<PageContainer />} >
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
