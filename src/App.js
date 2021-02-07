import React, {useState} from 'react'
import logo from './logozoe.png';
import trc20 from './trc20.jpeg'
import erc20 from './erc20.jpeg'


import './App.css';
import copy from "copy-to-clipboard"; 

import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}));

export default function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = useState(false)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div style={{display:'flex', justifyContent:'center', width:'100%', height:'100%'}} className="App-header">
<div className={classes.root}>
      <AppBar position="static" color="default" >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="ETHEREUM" {...a11yProps(0)} />
          <Tab label="TRON" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <div
       className="App-header"
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{display:'flex', justifyContent:'center'}}>

           <p>SELECCIONA LA RED DE ETHEREUM</p>
          </div>
          <div style={{display:'flex', justifyContent:'center'}}>
          <img alt="qr" style={{width:200, height:200}} src={erc20}></img>

</div>
        
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
        Nombre: ZOECASH
        </p>  
        <p style={{background:'#FFFFFF', color:'#000000', padding:10, borderRadius:10}}>
        Simbolo: ZOE
        </p>  
        <p style={{background:'#FFFFFF', color:'#000000', padding:10, borderRadius:10, marginTop:0}}>
        Decimales: 6
        </p>
      </header>
      
      
    </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{display:'flex', justifyContent:'center'}}>

           <p>SELECCIONA LA RED DE TRON y LA OPCIÓN TRC20</p>
          </div>
          <div style={{display:'flex', justifyContent:'center'}}>
          <img alt="qr" style={{width:200, height:200}} src={trc20}></img>

</div>
        <p style={{background:'#FFFFFF', color:'#000000', padding:20, borderRadius:10}}>
        TWUs7FajJdRK26U1A5KZJbo8wP7jHiRFwk
        </p>
        <p
          className="App-link"
         
        
          onClick={()=>{
            copy('TWUs7FajJdRK26U1A5KZJbo8wP7jHiRFwk')
            alert('FELICIDADES, ahora pega esta dirección en la billetera')
          }}

        >
          COPIAR
        </p>
        <p style={{background:'#FFFFFF', color:'#000000', padding:10, borderRadius:10}}>
        Nombre: ZOE
        </p>  
        <p style={{background:'#FFFFFF', color:'#000000', padding:10, borderRadius:10}}>
        Simbolo: ZOE
        </p>  
        <p style={{background:'#FFFFFF', color:'#000000', padding:10, borderRadius:10, marginTop:0}}>
        Decimales: 6
        </p>
      </header>
      
      
    </div>
        </TabPanel>
      </div>
    </div>
    </div>
    
  );
}
