import { FormControlLabel, FormGroup } from "@mui/material";
import React, { useState } from "react";
import BackBtn from "../../../buttonprops/BackBtn";
import {Checkbox} from "@mui/material";
import CheckBox from "./CheckBox";
import SemBtn from "../../../buttonprops/SemBtn";

<<<<<<<< HEAD:src/components/yearStatus/ThirdYearSubs/Component/IASProf.js
function IAS({onClickBack, onClickNext, title}) {
========
function PhysicalActivityTowardsHealthandFitness1({onClick, title}) {
>>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0:src/components/yearStatus/FirstYearSubs/Component/PhysicalActivityTowardsHealthandFitness1Prof.js
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
<<<<<<<< HEAD:src/components/yearStatus/ThirdYearSubs/Component/IASProf.js
                <h4 style={{fontWeight:"bold", fontSize: 30}}>SUBJECT: IT311 - Information Assurance and Security</h4>
========
                <h4 style={{fontWeight:"bold", fontSize: 30}}>SUBJECT: [PE101d - Physical Activity Towards Health and Fitness1]</h4>
>>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0:src/components/yearStatus/FirstYearSubs/Component/PhysicalActivityTowardsHealthandFitness1Prof.js
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
<<<<<<<< HEAD:src/components/yearStatus/ThirdYearSubs/Component/IASProf.js
                    <h1 style={{fontSize: 25, fontWeight:"normal"}}>Instructor 1: Mr. Juan Cruz</h1>
                </div>
                
                <div style={{marginTop: "1rem", marginLeft:"40rem"}}>
                    <CheckBox value="W 10:00AM-12:00PM" title="W 10:00AM-12:00PM"></CheckBox>
                    <CheckBox value="M 2:30PM-4:30PM" title="M 2:30PM-4:30PM"></CheckBox>
                    <CheckBox value="F 9:00AM-11:00AM" title="F 9:00AM-11:00AM"></CheckBox>
========
                    <h1 style={{fontSize: 25, fontWeight:"normal"}}>Instructor 1: Ms. Rhea Marie E. Quibel</h1>
                </div>
                
                <div style={{marginTop: "1rem", marginLeft:"40rem"}}>
                    <CheckBox value="M 1:00PM-3:00PM" title="M 1:00PM-3:00PM"></CheckBox>
                    <CheckBox value="W 10:00AM-12:00PM" title="W 10:00AM-12:00PM"></CheckBox>
                    <CheckBox value="F 8:00AM-10:00AM" title="F 8:00AM-10:00AM"></CheckBox>
>>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0:src/components/yearStatus/FirstYearSubs/Component/PhysicalActivityTowardsHealthandFitness1Prof.js
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
<<<<<<<< HEAD:src/components/yearStatus/ThirdYearSubs/Component/IASProf.js
                        <h1 style={{fontSize: 25, fontWeight:"normal"}}>Instructor 2: Ms. Mary Chris Tan</h1>
                    </div>
                    
                    <div style={{marginTop: "1rem", marginLeft:"40rem"}}>
                        <CheckBox value="M 1:00PM- 3:00PM" title="M 1:00PM- 3:00PM"></CheckBox>
                        <CheckBox value="TH 5:00PM- 7:00PM" title="TH 5:00PM- 7:00PM"></CheckBox>
                        <CheckBox value="S 7:00PM-9:00PM" title="S 7:00PM-9:00PM"></CheckBox>
========
                        <h1 style={{fontSize: 25, fontWeight:"normal"}}>Instructor 2: Mr. Al Batulan</h1>
                    </div>
                    
                    <div style={{marginTop: "1rem", marginLeft:"40rem"}}>
                        <CheckBox value="M 9:00AM-11:00AM" title="M 9:00AM-11:00AM"></CheckBox>
                        <CheckBox value="T 3:00PM-5:00PM" title="T 3:00PM-5:00PM"></CheckBox>
                        <CheckBox value="TH 1:00PM-3:00PM" title="TH 1:00PM-3:00PM"></CheckBox>
>>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0:src/components/yearStatus/FirstYearSubs/Component/PhysicalActivityTowardsHealthandFitness1Prof.js
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

<<<<<<<< HEAD:src/components/yearStatus/ThirdYearSubs/Component/IASProf.js
export default IAS;
========
export default PhysicalActivityTowardsHealthandFitness1;
>>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0:src/components/yearStatus/FirstYearSubs/Component/PhysicalActivityTowardsHealthandFitness1Prof.js
