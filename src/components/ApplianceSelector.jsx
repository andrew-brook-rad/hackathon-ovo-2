import applicationsMaster from "./../resources/application_master.json";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

export default function ApplianceSelector(props) {
  return (
    <Table striped>
      <thead>
        <tr>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {applicationsMaster.map((item, index) => {
          if(!props.appliancesToShow.includes(item.Product_Mode)) return;
          if(item.selected === undefined){
            item.selected = props.enabled;
          }
          return <tr key={item.Product_Mode}>
            <td>{item.Display_Name}</td>
            <td>
              <Form.Check type="switch" id={item.Product_Mode} defaultChecked={item.selected}/>
            </td>
          </tr>;
        })}
      </tbody>
    </Table>
  );
}
