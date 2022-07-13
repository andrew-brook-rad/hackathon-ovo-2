import { useState } from 'react'
import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import StepWizard from "react-step-wizard";
import HomeForm from './components/HomeForm';
import HomeResults from './components/HomeResults';
import WifiScan from './components/WifiScan';
import DeviceList from './components/DeviceList';
import Container from 'react-bootstrap/Container';
import Welcome from './components/Welcome';
import CustomiseSelection from './components/CustomiseSelection';
function App() {

  return (
    <div className="App">
      <Container style={{marginTop: '20px'}}>
        <StepWizard>
          <Welcome isLazyMount={true}/>
          <HomeForm isLazyMount={true}/>
          <HomeResults/>
          <WifiScan isLazyMount={true}/>
          <DeviceList isLazyMount={true}/>
          <CustomiseSelection isLazyMount={true}/>
        </StepWizard>
      </Container>

    </div>
  )
}

export default App
