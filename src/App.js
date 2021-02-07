import React, {useState} from 'react'
import logo from './logozoe.png';
import qr from './qr.png'
import './App.css';
import copy from "copy-to-clipboard"; 

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'

function App() {

  const [open, setOpen] = useState(false)

  const handleClose = () =>{
    setOpen(false)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p
          className="App-link2"
          style={{marginBottom:0}}
        
          onClick={()=>{
            setOpen(true)
          }}

        >
          VER QR
        </p>
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
        <p style={{background:'#FFFFFF', color:'#000000', padding:10, borderRadius:10, marginTop:0}}>
        Decimales: 10
        </p>
      </header>
      <Dialog
        open={open}
        onClose={handleClose}
        
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"ESCANEA EL SIGUIENTE CÓDIGO QR"}</DialogTitle>
        <DialogContent>
          <img alt="qr" src={}></img>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            CERRAR
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
