import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Login from './Login/login';
import Dashboard from './Pages/dashboard';
import Header from './Header/header';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

<BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Header" element={<Header />} />



            </Routes>
        </BrowserRouter>



     


    </div>
  );
}

export default App;
