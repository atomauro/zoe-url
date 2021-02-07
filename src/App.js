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
        <p
          className="App-link"
         
        
          onClick={()=>{
            copy('0xd4515966cc9df9fd1f2e43265e56ee4d8fa718f8')
            alert('FELICIDADES, ahora pega esta dirección en la billetera')
          }}

        >
          COPIAR
        </p>
        <p style={{background:'#FFFFFF', color:'#000000', padding:10, borderRadius:10}}>
        Siglas: 6
        </p>  
        <p style={{background:'#FFFFFF', color:'#000000', padding:10, borderRadius:10, marginTop:0}}>
        Decimales: 10
        </p>
      </header>
      
    </div>
  );
}

export default App;
