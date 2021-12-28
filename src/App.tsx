import React from 'react';
import {DropDownListComponent} from '@syncfusion/ej2-react-dropdowns';
import {employees} from './data';
import './App.css';

function App() {
  const divStyle = {
    margin: 100,
    width: 250
  }
  const customItems = (props:any)=>{
    return(
      <div>
        <img className='empImage' src={'https://ej2.syncfusion.com/react/demos/src/drop-down-list/Employees/' + props.EmployeeID +'.png'} alt=''/>
        <div className='ename'>{props.Name}</div>
        <div className='ejob'>{props.Designation}</div>
      </div>
    )
  }
  const customValues = (props:any)=>{
    return(
      <div>
        <img className='valueImage' height={28} width={28}
        src={'https://ej2.syncfusion.com/react/demos/src/drop-down-list/Employees/' + props.EmployeeID +'.png'} alt=''/>
        <div className='value'>{props.Name}</div>
      </div>
    )
  }
  const customHeader = (props:any)=>{
    return(
      <div className='header'>
        <span>Photo</span>
        <span className='columnHeader'>Employee Info</span>
      </div>
    )
  }
  const customFooter = (props:any)=>{
    return(
      <div className='footer'>
        Add new items <span className='e-icons plus'></span>
      </div>
    )
  }
  return (
    // noRecordsTemplate is used while refering an empty object "employees1" from data.js file
    <div style={divStyle}>
      <DropDownListComponent dataSource={employees} placeholder="Select a name"
      itemTemplate={customItems} headerTemplate={customHeader}
      valueTemplate={customValues}
      footerTemplate={customFooter} noRecordsTemplate="No records available!!!"
      fields={{value:"Name"}}></DropDownListComponent>
    </div>
  );
}

export default App;
