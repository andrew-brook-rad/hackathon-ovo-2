import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import deviceList from "./../resources/device-list.json";
import Form from "react-bootstrap/Form";
import ApplicationMaster from './../resources/application_master.json';

function DeviceList(props) {

  var uniqueList = new Set(deviceList);
  const enrichedDeviceList = [];
  useEffect(() => {
    for (let i = 0; i < Array.from(uniqueList).length; i++) {
      //find the device in the application master
      const device = ApplicationMaster.find(
        (appliance) => appliance.Product_Mode === deviceList[i]
      );
      if(device){
        device.amount = 1;
        enrichedDeviceList.push(device);
      }
    }
  }, []);

  const [myDeviceList, setMyDeviceList] = useState(enrichedDeviceList);
  const [totalKwh, setTotalKwh] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [costPerKwh, setCostPerKwh] = useState(40);

  useEffect(() => {
    calculateTotal();
  }, [costPerKwh]);

  const changeAmount = (device, amount) => {
    if (amount >= 0) {
      const newDeviceList = [...myDeviceList];
      //find device in newDeviceList
      const index = newDeviceList.findIndex(
        (d) => d.Product_Mode === device.Product_Mode
      );
      newDeviceList[index].amount = amount;
      setMyDeviceList(newDeviceList);
      calculateTotal();
    }
  };

  const calculateTotal = () => {
    let totalKwh = 0;
    myDeviceList.map((device) => {
        totalKwh +=  device.KWH_PerDay * device.amount;
    });
    setTotalKwh(totalKwh * 365 );
    setTotalCost((totalKwh) * 365 * (costPerKwh / 1000));
  };

  return (
    <>
      <Button onClick={props.nextStep} variant="outline-success">
        Add Appliance
      </Button>
      <br /><br />
      <Card
        style={{ marginBottom: "10px", maxHeight: "50vh", overflow: "auto" }}
      >
        <Card.Body>
          <Card.Title>Your Household Appliances </Card.Title>
          <Table striped>
            <thead>
              <tr>
                <th>Device</th>
                <th>Standby usage(kw)</th>
                <th></th>
                <th>#</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {myDeviceList.map((item, index) => (
                <tr key={item.Product_Mode + index}>
                  <td>{item.Display_Name}</td>
                  <td>{item.KWH_PerDay} </td>
                  <td>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() =>
                        changeAmount(item, parseInt(item.amount, 10) - 1)
                      }
                    >
                      -
                    </Button>
                  </td>
                  <td>{item.amount}</td>
                  <td>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() =>
                        changeAmount(item, parseInt(item.amount, 10) + 1)
                      }
                    >
                      +
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
           
      <Card
        style={{ marginBottom: "10px", maxHeight: "50vh", overflow: "auto" }}
      >
        <Card.Body>
          <Card.Title>Usage Calculation</Card.Title>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Yearly Kwh Usage</th>
                <th>Yearly Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{totalKwh.toFixed(2)}</td>
                <td>£{totalCost.toFixed(2)}</td>
              </tr>
            </tbody>
          </Table>
          <Form>
          <Form.Group className="mb-1" controlId="costPerKwh">
        <Form.Label>Cost Per Kwh (£)</Form.Label>
        <Form.Control type="text" placeholder="costPerKwh" value={costPerKwh} style={{width: '100px'}} onChange={(val)=>{setCostPerKwh(val.target.value)}}/>
      </Form.Group>
        </Form> 
        <br />
        This shows you how much energy the devices are using while on standby. We’re using 40p per kwh, as this is the predicted cost per kwh in the October price increase. We use an average standby time for each appliance, and multiply it by the standby usage and cost per kwh to work out each appliance cost.
<br />
Total kwh usage = Total kwh usage <br />

Total cost = Total cost (per year)

        </Card.Body>
      </Card>

      <Button onClick={props.previousStep} variant="outline-default">
        Previous
      </Button>
    </>
  );
}

export default DeviceList;
