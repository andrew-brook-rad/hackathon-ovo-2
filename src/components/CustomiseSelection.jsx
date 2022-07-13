import Form from "react-bootstrap/Form";
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ApplianceSelector from './ApplianceSelector';
import ApplicationMaster from './../resources/application_master.json';
import deviceList from './../resources/device-list.json';
import {useState} from 'react';
import {Row, Col} from 'react-bootstrap';

//ovo-wind-loading.json
function CustomiseSelection(props) {

    const [room, setRoom] = useState('kitchen');

    const kitchenAppliances = ApplicationMaster.filter(appliance => appliance.Kitchen === 'Y').map(appliance => appliance.Product_Mode);
    const bedroomAppliances = ApplicationMaster.filter(appliance => appliance.Bedroom === 'Y').map(appliance => appliance.Product_Mode);
    const livingRoomAppliances = ApplicationMaster.filter(appliance => appliance.Living_Room === 'Y').map(appliance => appliance.Product_Mode);
    const bathroomApplications = ApplicationMaster.filter(appliance => appliance.Bathroom === 'Y').map(appliance => appliance.Product_Mode);
    const officeApplications = ApplicationMaster.filter(appliance => appliance.Office === 'Y').map(appliance => appliance.Product_Mode);
    
  return (
    <>
    <Button onClick={props.previousStep} variant="outline-default">Previous</Button>
    <Row>
        <Col> <Button size="sm" onClick={()=>setRoom('kitchen')} variant="outline-primary">Kitchen</Button> </Col>
        <Col> <Button size="sm" onClick={()=>setRoom('bathroom')} variant="outline-primary">Bathroom</Button> </Col>
        <Col> <Button size="sm" onClick={()=>setRoom('office')} variant="outline-primary">Office</Button> </Col>
        <Col> <Button size="sm" onClick={()=>setRoom('bedroom')} variant="outline-primary">Bedroom</Button> </Col>
    </Row>
    <br />

    {room == 'living' && <Card style={{marginBottom: '10px'}}>
     <Card.Body>
        <Card.Title>Select Appliance</Card.Title>
        <Card.Text>Living Room</Card.Text>
        <ApplianceSelector appliancesToShow={livingRoomAppliances} enabled={false}/>
        </Card.Body>
    </Card>}
    {room == 'bathroom' && <Card style={{marginBottom: '10px'}}>
     <Card.Body>
        <Card.Text>Bathroom</Card.Text>
        <ApplianceSelector appliancesToShow={bathroomApplications} enabled={false}/>
        </Card.Body>
    </Card>}
    {room == 'office' && <Card style={{marginBottom: '10px'}}>
     <Card.Body>
        <Card.Text>Office</Card.Text>
        <ApplianceSelector appliancesToShow={officeApplications} enabled={false} />
        </Card.Body>
    </Card>}
    {room == 'bedroom' && <Card style={{marginBottom: '10px'}}>
     <Card.Body>
        <Card.Text>Bedroom</Card.Text>
        <ApplianceSelector appliancesToShow={bedroomAppliances} enabled={false}/>
        </Card.Body>
    </Card>}
    {room == 'kitchen' && <Card style={{marginBottom: '10px'}}>
     <Card.Body>
        <Card.Text>Kitchen</Card.Text>
        <ApplianceSelector appliancesToShow={kitchenAppliances} enabled={false}/>
      </Card.Body>
      </Card>}
      <Button onClick={props.previousStep} variant="outline-default">Previous</Button>

      </>
  );
}

export default CustomiseSelection;
