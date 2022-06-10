import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Homepage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<HomePage/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Header></Header> */}
    </div>
  );
}

export default App;
