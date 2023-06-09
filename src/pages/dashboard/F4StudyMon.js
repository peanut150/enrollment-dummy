import { useState } from 'react';
import logo from "./../dashboard/logoUni.png";
import year from "../../components/year/year";
import "./../../styles/styles.css";
import './table.css'

function F4StudMon({back, next}) {


    const data =[
        {subject: "Electives 1", name: "20" + "/" + 60},
        {subject: "Electives 2", name: "25" + "/" + 60}
    ]



  return (
    <div style={{ backgroundColor: '#F6F6F6', width: '100%', height: '100vh', resize: 'none',}}>
      <div style={{backgroundColor: 'white', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <img src={logo} style={{height: 39, width: 'auto', marginLeft: 20}}/>
        <h3 style={{color: '#2AB5E1'}}>INFOTECH UNIVERSITY</h3>
      </div>


    <div>
        <h1>Fourth Year Student Monitoring</h1>
    </div>
    <div className='App' style={{display:"flex", position:"absolute"}}>
        <table>
            <tr>
                <th>Subjects</th>
                <th>Number of Students</th>
            </tr>
            {data.map((val, key) =>{
                return(
                    <tr key={key}>
                        <td style={{paddingLeft:100, paddingRight: 100}} >{val.subject}</td>
                        <td>{val.name}</td>
                    </tr>
                )
            })}
            
        </table>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: "25rem" }}>
        <button className='backbtn' onClick={back}><h1 style={{fontSize: 15}}>BACK</h1></button>
    </div>
    

      
    </div>
  );
}

export default F4StudMon;
