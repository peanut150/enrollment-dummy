import { FormControlLabel, FormGroup } from "@mui/material";
import React, { useState } from "react";
import BackBtn from "../../../buttonprops/BackBtn";
import {Checkbox} from "@mui/material";
import CheckBox from "./CheckBox";
import SemBtn from "../../../buttonprops/SemBtn";

<<<<<<<< HEAD:src/components/yearStatus/FirstYearSubs/Component/ArtAppProf.js
function ArtApp({onClickBack, onClickNext, title}) {
========
function Technopreneurship({onClick, title}) {
>>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0:src/components/yearStatus/ThirdYearSubs/Component/TechnopreneurshipProf.js
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
<<<<<<<< HEAD:src/components/yearStatus/FirstYearSubs/Component/ArtAppProf.js
                <h4 style={{fontWeight:"bold", fontSize: 30}}>SUBJECT: ArtApp - Art Appreciation</h4>
========
                <h4 style={{fontWeight:"bold", fontSize: 30}}>SUBJECT: ES211a- Technopreneurship</h4>
>>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0:src/components/yearStatus/ThirdYearSubs/Component/TechnopreneurshipProf.js
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
<<<<<<<< HEAD:src/components/yearStatus/FirstYearSubs/Component/ArtAppProf.js
                    <h1 style={{fontSize: 25, fontWeight:"normal"}}>Instructor 1: Mrs. Josan C. Fermano</h1>
                </div>
                
                <div style={{marginTop: "1rem", marginLeft:"40rem"}}>
                        <CheckBox value="M 7:30AM-9:00AM" title="M 7:30AM-9:00AM"></CheckBox>
                        <CheckBox value="TH 11:00AM-12:30PM" title="TH 11:00AM-12:30PM"></CheckBox>
                        <CheckBox value="F 1:00PM-2:30PM" title="F 1:00PM-2:30PM"></CheckBox>
========
                    <h1 style={{fontSize: 25, fontWeight:"normal"}}>Instructor 1: Ms. Rhea Suzette M. Haguisan</h1>
                </div>
                
                <div style={{marginTop: "1rem", marginLeft:"40rem"}}>
                    <CheckBox value="M 9:00PM-10:30AM" title="M 9:00PM-10:30AM"></CheckBox>
                    <CheckBox value="TH 7:00PM-8:30PM" title="TH 7:00PM-8:30PM"></CheckBox>
                    <CheckBox value="F 1:00PM-2:30PM" title="F 1:00PM-2:30PM"></CheckBox>
>>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0:src/components/yearStatus/ThirdYearSubs/Component/TechnopreneurshipProf.js
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
<<<<<<<< HEAD:src/components/yearStatus/FirstYearSubs/Component/ArtAppProf.js
                        <h1 style={{fontSize: 25, fontWeight:"normal"}}>Instructor 2: Ms. Sim Drax</h1>
                    </div>
                    
                    <div style={{marginTop: "1rem", marginLeft:"40rem"}}>
                        <CheckBox value="M 9:00AM- 10:30AM" title="M 9:00AM- 10:30AM"></CheckBox>
                        <CheckBox value="T 1:00PM-2:30PM" title="T 1:00PM-2:30PM"></CheckBox>
                        <CheckBox value="TH 7:00PM-8:30PM" title="TH 7:00PM-8:30PM"></CheckBox>
========
                        <h1 style={{fontSize: 25, fontWeight:"normal"}}>Instructor 2: Ms. Tim Gab</h1>
                    </div>
                    
                    <div style={{marginTop: "1rem", marginLeft:"40rem"}}>
                        <CheckBox value="M 1:00PM-2:30PM" title="M 1:00PM-2:30PM"></CheckBox>
                        <CheckBox value="TH 4:00PM-5:30PM" title="TH 4:00PM-5:30PM"></CheckBox>
                        <CheckBox value="F 9:00AM-10:30AM" title="F 9:00AM-10:30AM"></CheckBox>
>>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0:src/components/yearStatus/ThirdYearSubs/Component/TechnopreneurshipProf.js
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

<<<<<<<< HEAD:src/components/yearStatus/FirstYearSubs/Component/ArtAppProf.js
export default ArtApp;
========
export default Technopreneurship;
>>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0:src/components/yearStatus/ThirdYearSubs/Component/TechnopreneurshipProf.js
