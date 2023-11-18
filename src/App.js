import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function App() {
  return (
    <div className="App">
      <FormGroup>
      <FormControlLabel control={<Switch defaultChecked className='a1' />} label="High Contrast" />
      {/* <FormControlLabel required control={<Switch />} label="Required" />
      <FormControlLabel disabled control={<Switch />} label="Disabled" /> */}
    </FormGroup>
    

    <ButtonGroup variant="contained" aria-label="outlined primary button group" className='k1'>
      {/* <Button className='a2'>Login</Button> */}
      <Button className='a3'>Start a Free or get demo</Button>
      {/* <Button>Three</Button> */}
    </ButtonGroup>

    <h3 className='q1'>Login</h3>
    <h2 className='q2'>About Us template</h2>
    <h2 className='q3'>Blogs</h2>
    <h2 className='q4'>Logo Gallery</h2>
    <p className='w1'>27 Best About Us and About Me page <br></br> <span>Examples of 2023 [+Templates]</span></p>

    <button className='btn'>Download now: Free About Us Examples</button>

    <h3 className='t1'>Your about page summarizes your history, values and mission-all in one place</h3>
    <h3 className='t2'>That's a tall order for just a few paragraphs. If you're feeling stuck, turn to these</h3>
    {/* <h3 className='t3'>about-page examples for inspiration.</h3> */}
    <img src={require('./pics/dd.png')}></img>  
   

    </div>
  );
}

export default App;
