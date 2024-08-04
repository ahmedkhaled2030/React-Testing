import './App.css';
import Login from './components/login/Login';

function App() {
  return (
    <div className="App">
      {/* <Login/> */}

  
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer" 
      >
        Learn React
      </a>

       
      <ul>
        <li>dog</li>
        <li>cat</li>
        <li>bird</li>
      </ul>
      <h1 data-testid="mytestid">Hello</h1>
      <span title="mytestid">World</span>
    </div>
  );
}

export default App;
