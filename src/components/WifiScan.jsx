import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import { useState } from 'react';
import Lottie from "lottie-react";
import networkWifi from './../resources/network-wifi.json';
import ApplianceSelector from './ApplianceSelector';
import WifiFound from './../resources/wifi-found.json';

function WifiScan(props) {
  const [loading, setLoading] = useState(false);
  const [wifiRun, setWifiRun] = useState(false);
  return (
    <>
    <Card style={{marginBottom: '10px'}}>
     <Card.Body>
        <Card.Title>Scan Home Network</Card.Title>
        <Card.Text>Scan your wifi network to find connected devices
        </Card.Text>
        <Lottie animationData={networkWifi} loop={true} autoplay={true} style={{height: '20vh'}}/>

        <Row>
            <Col>

            {!loading && <Button variant="primary" onClick={()=> scanWifi()}>Scan</Button>}
            {loading && <Button style={{width: '70px'}} variant="primary" disabled>
                <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
                />
                <span className="visually-hidden">Loading...</span>
            </Button>}
            
            </Col>
            <Col>

            <Button onClick={props.nextStep} variant="outline-success">Skip</Button>
            </Col>
            <br /><br />
            <b>How the scan works</b> <br />
            Please note - the scan is for your use only. The site will scan your wifi network, and pull up a list of the devices connected. This information is not shared with anyone outside of OVO.

        </Row>
        <br />
        {wifiRun && <>
          <Card.Text>We found the following {WifiFound.length} devices connected:</Card.Text>
          <ApplianceSelector appliancesToShow={WifiFound} enabled={true} />

        </>}
      </Card.Body>
      </Card>
      <Button onClick={props.previousStep} variant="default">Previous</Button>
      <Button onClick={props.nextStep} variant="outline-success">Next</Button>

      </>
  );

  function scanWifi () {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setWifiRun(true);
    }, 2000);
  }
}

  
export default WifiScan
  