import { FormControlLabel, FormGroup } from "@mui/material";
import React, { useState } from "react";
import BackBtn from "../../../buttonprops/BackBtn";
import {Checkbox} from "@mui/material";
import CheckBox from "./CheckBox";
import SemBtn from "../../../buttonprops/SemBtn";

<<<<<<<< HEAD:src/components/yearStatus/ThirdYearSubs/Component/TechnoProf.js
function Techno({onClickBack, onClickNext, title}) {
========
function ScienceTechnologyandSociety({onClick, title}) {
>>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0:src/components/yearStatus/FirstYearSubs/Component/ScienceTechnologyandSocietyProf.js
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
<<<<<<<< HEAD:src/components/yearStatus/ThirdYearSubs/Component/TechnoProf.js
                <h4 style={{fontWeight:"bold", fontSize: 30}}>SUBJECT: ES211A - Technopreneurship</h4>
========
                <h4 style={{fontWeight:"bold", fontSize: 30}}>SUBJECT: STS - Science, Technology and Society</h4>
>>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0:src/components/yearStatus/FirstYearSubs/Component/ScienceTechnologyandSocietyProf.js
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
<<<<<<<< HEAD:src/components/yearStatus/ThirdYearSubs/Component/TechnoProf.js
                    <h1 style={{fontSize: 25, fontWeight:"normal"}}>Instructor 1: Ms. Rhea Suzette M. Haguisan</h1>
                </div>
                
                <div style={{marginTop: "1rem", marginLeft:"40rem"}}>
                    <CheckBox value="M 9:00AM-10:30AM" title="M 9:00AM-10:30AM"></CheckBox>
                    <CheckBox value="TH 7:00PM-8:30PM" title="TH 7:00PM-8:30PM"></CheckBox>
========
                    <h1 style={{fontSize: 25, fontWeight:"normal"}}>Instructor 1: Mrs. Maria Luz E. Perez</h1>
                </div>
                
                <div style={{marginTop: "1rem", marginLeft:"40rem"}}>
                    <CheckBox value="T 10:00AM-11:30AM" title="T 10:00AM-11:30AM"></CheckBox>
                    <CheckBox value="TH 3:00PM-4:30PM" title="TH 3:00PM-4:30PM"></CheckBox>
>>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0:src/components/yearStatus/FirstYearSubs/Component/ScienceTechnologyandSocietyProf.js
                    <CheckBox value="F 1:00PM-2:30PM" title="F 1:00PM-2:30PM"></CheckBox>
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
<<<<<<<< HEAD:src/components/yearStatus/ThirdYearSubs/Component/TechnoProf.js
                        <h1 style={{fontSize: 25, fontWeight:"normal"}}>Instructor 2: Ms. Tim Gab</h1>
                    </div>
                    
                    <div style={{marginTop: "1rem", marginLeft:"40rem"}}>
                        <CheckBox value="M 1:00PM- 2:30PM" title="M 1:00PM- 2:30PM"></CheckBox>
                        <CheckBox value="TH 4:00PM-5:30PM" title="TH 4:00PM-5:30PM"></CheckBox>
                        <CheckBox value="F 9:00AM-10:30AM" title="F 9:00AM-10:30AM"></CheckBox>
========
                        <h1 style={{fontSize: 25, fontWeight:"normal"}}>Instructor 2: Ms. Ash Gracia</h1>
                    </div>
                    
                    <div style={{marginTop: "1rem", marginLeft:"40rem"}}>
                        <CheckBox value="W 1:00PM-2:30PM" title="W 1:00PM-2:30PM"></CheckBox>
                        <CheckBox value="TH 11:30AM-1:00PM" title="TH 11:30AM-1:00PM"></CheckBox>
                        <CheckBox value="F 9:30AM-11:00AM" title="F 9:30AM-11:00AM"></CheckBox>
>>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0:src/components/yearStatus/FirstYearSubs/Component/ScienceTechnologyandSocietyProf.js
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

<<<<<<<< HEAD:src/components/yearStatus/ThirdYearSubs/Component/TechnoProf.js
export default Techno;
========
export default ScienceTechnologyandSociety;
>>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0:src/components/yearStatus/FirstYearSubs/Component/ScienceTechnologyandSocietyProf.js
