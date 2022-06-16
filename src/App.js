import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Homepage';
import ContactPage from './Pages/ContactPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<HomePage/>}/>
          <Route path='Contact' element= {<ContactPage/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Header></Header> */}
    </div>
  );
}

export default App;
