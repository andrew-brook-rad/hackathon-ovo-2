import Form from "react-bootstrap/Form";
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Lottie from "lottie-react";
import ovoLoading from './../resources/ovo-wind-loading.json';
import ApplianceSelector from './ApplianceSelector';
import HomeDummy from './../resources/home-dummy.json';
//ovo-wind-loading.json
function HomeResults(props) {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if(props.isActive) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
  }}, [props.isActive]);

    
  if (loading) {
    return <>
              <h1>Loading...</h1>
              <div>Fetching list of appliances from similar households...</div>
              <Lottie animationData={ovoLoading} loop={true} autoplay={true} style={{height: '70vh'}}/>

    </>
  };

  return (
    <>
    <Card style={{marginBottom: '10px'}}>
     <Card.Body>
        <Card.Title>Here's what we found</Card.Title>
        <Card.Text>Similar properties typically contain:</Card.Text>
      
        <ApplianceSelector appliancesToShow={HomeDummy} enabled={false}/>
      </Card.Body>
      </Card>
      <Button onClick={props.previousStep} variant="outline-default">Previous</Button>
      <Button onClick={props.nextStep} variant="outline-success">Next</Button>

      </>
  );
}

export default HomeResults;
