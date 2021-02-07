import logo from './logozoe.png';
import './App.css';
import copy from "copy-to-clipboard"; 

function App() {



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{background:'#FFFFFF', color:'#000000', padding:20, borderRadius:10}}>
        0xd4515966cc9df9fd1f2e43265e56ee4d8fa718f8
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          onClick={()=>{
            copy('0xd4515966cc9df9fd1f2e43265e56ee4d8fa718f8')
            alert('FELICIDADES, ahora pega esta dirección en la billetera')
          }}

        >
          COPIAR
        </a>
      </header>
    </div>
  );
}

export default App;
