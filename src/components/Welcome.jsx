import { Canvas } from "@react-three/fiber";
import Scene from './wobbling-sphere';
import {Button} from 'react-bootstrap';
import OvoLogo from './../resources/ovo-logo.png';
import './../resources/glow-button.css';
import AnimatedText from 'react-animated-text-content';

function Welcome(props) {
  return (
    <>
        <img src={OvoLogo} style={{width: '15vh', textAlign: 'center'}}/>
        <div style={{background: '#0d8426', marginTop: '20px', height: '80vh', paddingTop: '30px'}}>
        <div style={{color: 'white', fontSize: '22px', fontFamily: 'Arial', fontWeight: 'bold', width: '70vw', marginLeft: '15vw'}}>   
        <AnimatedText
            type='words'
            interval={0.14}
            duration={1.5}
            animation={{
            y: '100px',
            ease: 'ease',
            }}
        >
            Don't let Vampire Devices burst your bubble! 
        </AnimatedText>

        </div> 
            {props.isActive && <Canvas style={{height: '50vh'}}>
            <Scene />
            </Canvas>}

        <div style={{color: 'white', fontSize: '18px', fontFamily: 'Arial', fontWeight: 'bold', width: '70vw', marginLeft: '15vw', paddingBottom: '20px' }}>   
        <AnimatedText
            type='words'
            interval={.14}
            duration={1.5}
            animation={{
            y: '100px',
            ease: 'ease',
            }}
        >
            Find out the smart way to save energy
        </AnimatedText>

        </div> 
            <div className="glow-container">
                <button onClick={props.nextStep}  className="glow-on-hover" type="button">START</button>
            </div>
        </div>
    </>

  )
}

export default Welcome
