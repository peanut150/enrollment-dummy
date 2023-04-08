import { FormControlLabel, FormGroup } from "@mui/material";
import React, { useState } from "react";
import BackBtn from "../../../buttonprops/BackBtn";
import {Checkbox} from "@mui/material";
import CheckBox from "./CheckBox";
import SemBtn from "../../../buttonprops/SemBtn";

<<<<<<<< HEAD:src/components/yearStatus/ThirdYearSubs/Component/IPTProf.js
function IPT({onClickBack, onClickNext, title}) {
========
function Networking2({onClick, title}) {
>>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0:src/components/yearStatus/ThirdYearSubs/Component/Networking2Prof.js
const [show, setShow] = useState(true)
  return (

    <>
    
        <div style={{ backgroundColor: "#F6F6F6", height: "100%", width:"100%", display:"flex", position:"absolute"}}>
             <div style=
                {
                  {
                    textAlign:"center",
                    position:"absolute",
                    left: "19rem",
                    top: 70
                  }
                }>
              <div style={{marginLeft: "-10rem", marginTop: "-5rem"}}>
<<<<<<<< HEAD:src/components/yearStatus/ThirdYearSubs/Component/IPTProf.js
                <h4 style={{fontWeight:"bold", fontSize: 30}}>SUBJECT: IT322 - Integrative Programming and Technologies</h4>
========
                <h4 style={{fontWeight:"bold", fontSize: 30}}>SUBJECT: IT312 - Networking2</h4>
>>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0:src/components/yearStatus/ThirdYearSubs/Component/Networking2Prof.js
              </div>              
             </div>


             <div>
                <div
                    style={{
                        marginLeft: "20rem",
                        marginTop: "7rem",
                        width: 800,
                        height: 41,
                        border:"none",
                        background: "linear-gradient(to right, #18ABDA, #49C5EC, #7EE0FF)",
                        borderRadius: 5,
                        boxShadow:"5px 10px 15px #A9E1F2",
                        color: "white",
                        textAlign:"left",
                        paddingLeft: 20

                    }}
                >
<<<<<<<< HEAD:src/components/yearStatus/ThirdYearSubs/Component/IPTProf.js
                    <h1 style={{fontSize: 25, fontWeight:"normal"}}>Instructor 1: Mr. Dario C. Miñoza Jr.</h1>
========
                    <h1 style={{fontSize: 25, fontWeight:"normal"}}>Instructor 1: Mr. John Ray Abamonga</h1>
>>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0:src/components/yearStatus/ThirdYearSubs/Component/Networking2Prof.js
                </div>
                
                <div style={{marginTop: "1rem", marginLeft:"40rem"}}>
                    <CheckBox value="T 9:00AM-11:00AM" title="T 9:00AM-11:00AM"></CheckBox>
                    <CheckBox value="W 2:00PM-4:00PM" title="W 2:00PM-4:00PM"></CheckBox>
                    <CheckBox value="F 10:30AM-12:30PM" title="F 10:30AM-12:30PM"></CheckBox>
                </div>

                <div style={{marginTop:"-6rem"}}>

                    <div
                        style={{
                            marginLeft: "20rem",
                            marginTop: "7rem",
                            width: 800,
                            height: 41,
                            border:"none",
                            background: "linear-gradient(to right, #18ABDA, #49C5EC, #7EE0FF)",
                            borderRadius: 5,
                            boxShadow:"5px 10px 15px #A9E1F2",
                            color: "white",
                            textAlign:"left",
                            paddingLeft: 20

                        }}
                    >
<<<<<<<< HEAD:src/components/yearStatus/ThirdYearSubs/Component/IPTProf.js
                        <h1 style={{fontSize: 25, fontWeight:"normal"}}>Instructor 2: Mrs. Marivic Villalobos</h1>
                    </div>
                    
                    <div style={{marginTop: "1rem", marginLeft:"40rem"}}>
                        <CheckBox value="M 7:00PM- 9:00PM" title="M 7:00PM- 9:00PM"></CheckBox>
                        <CheckBox value="TH 1:30PM- 3:30PM" title="TH 1:30PM- 3:30PM"></CheckBox>
                        <CheckBox value="S 9:00AM- 11:00AM" title="S 9:00AM- 11:00AM"></CheckBox>
========
                        <h1 style={{fontSize: 25, fontWeight:"normal"}}>Instructor 2: Mr. Darwin Moriño</h1>
                    </div>
                    
                    <div style={{marginTop: "1rem", marginLeft:"40rem"}}>
                        <CheckBox value="M 7:00PM-9:00PM" title="M 7:00PM-9:00PM"></CheckBox>
                        <CheckBox value="TH 1:30PM-3:30PM" title="TH 1:30PM-3:30PM"></CheckBox>
                        <CheckBox value="S 9:00PM-11:00AM" title="S 9:00PM-11:00AM"></CheckBox>
>>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0:src/components/yearStatus/ThirdYearSubs/Component/Networking2Prof.js
                    </div>

                </div>
             </div>
                <div style={{marginTop: 90}}>
                    <BackBtn title="BACK" onClick={onClickBack}></BackBtn>
                </div>
                <div style={{marginLeft: "60rem", marginTop: 90}}>
                    <BackBtn title="NEXT" onClick={onClickNext}></BackBtn>
                </div>
            
             
             
      </div>
      </>
        
  );
}

<<<<<<<< HEAD:src/components/yearStatus/ThirdYearSubs/Component/IPTProf.js
export default IPT;
========
export default Networking2;
>>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0:src/components/yearStatus/ThirdYearSubs/Component/Networking2Prof.js
