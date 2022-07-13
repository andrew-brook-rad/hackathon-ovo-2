import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import { useState, useRef, useEffect } from 'react'
import Lottie from "lottie-react";
import ovoHouses from './../resources/ovo-houses.json';
function HomeForm(props) {
  
  const [ householdSize, setHouseholdSize ] = useState(2); 
  const [bedrooms, setBedrooms] = useState(2);
  const lottieRef = useRef();
  useEffect(() => {
    if(props.isActive) {
      lottieRef.current.play();
  }}, [props.isActive]);

  return (
    <>
    <Card style={{marginBottom: '10px'}}>
     <Card.Body>
        <Card.Title>Tell us about your home</Card.Title>
        <Card.Text>With this information we can help you discover the types of devices similar households use</Card.Text>
        <Lottie lottieRef={lottieRef} animationData={ovoHouses} loop={true} autoplay={false} style={{height: '30vh'}}/>
        <Form>

        <Form.Group className="mb-3" controlId="homeType">
          <Form.Select aria-label="Home Type">
          <option value="terrace">Terrace</option>
            <option value="detached">Detached</option>
            <option value="semi-detached">Semi-detached</option>
            <option value="flat">Flat</option>
            <option value="bungalow">Bungalow</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-1" controlId="costPerKwh">
        <Form.Label>Whats your Postcode? (optional)</Form.Label>
        <Form.Control type="text" placeholder="Postcode"/>
      </Form.Group>
        <Form.Group className="mb-3" controlId="bedrooms">
          <Form.Label>Bedrooms ({bedrooms})</Form.Label>
          <RangeSlider
            min={1}
            max={10}
            value={bedrooms}
            onChange={(changeEvent) => setBedrooms(changeEvent.target.value)}
          />
        </Form.Group>
            <Form.Group className="mb-3" controlId="householdSize">
                <Form.Label>How many people are in your household? ({householdSize}) </Form.Label>
                <RangeSlider
                min={1}
                max={10}
                value={householdSize}
                onChange={changeEvent => setHouseholdSize(changeEvent.target.value)}
                />
            </Form.Group>    
        </Form>        
        </Card.Body>
    </Card>
     <Button onClick={props.nextStep} variant="outline-success">Find Devices</Button>
    </>
  )
}

export default HomeForm
