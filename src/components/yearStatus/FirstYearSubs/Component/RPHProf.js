import { FormControlLabel, FormGroup } from "@mui/material";
import React, { useState } from "react";
import BackBtn from "../../../buttonprops/BackBtn";
import {Checkbox} from "@mui/material";
import CheckBox from "./CheckBox";
import SemBtn from "../../../buttonprops/SemBtn";

<<<<<<<< HEAD:src/components/yearStatus/FirstYearSubs/Component/RPHProf.js
function Rph({onClickBack, onClickNext, title}) {
========
function ComputerProgramming2({onClick, title}) {
>>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0:src/components/yearStatus/FirstYearSubs/Component/ComputerProgramming2Prof.js
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
<<<<<<<< HEAD:src/components/yearStatus/FirstYearSubs/Component/RPHProf.js
                <h4 style={{fontWeight:"bold", fontSize: 30}}>SUBJECT: SS102 - Reading in Philippine History</h4>
========
                <h4 style={{fontWeight:"bold", fontSize: 30}}>SUBJECT: IT121 - Computer Programming 2</h4>
>>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0:src/components/yearStatus/FirstYearSubs/Component/ComputerProgramming2Prof.js
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
<<<<<<<< HEAD:src/components/yearStatus/FirstYearSubs/Component/RPHProf.js
                    <h1 style={{fontSize: 25, fontWeight:"normal"}}>Instructor 1: Mr. Rolando J. Lee Jr.</h1>
                </div>
                
                <div style={{marginTop: "1rem", marginLeft:"40rem"}}>
                    <CheckBox value="M 9:00AM-10:30AM" title="M 9:00AM-10:30AM"></CheckBox>
                    <CheckBox value="T 7:30PM-9:00PM" title="T 7:30PM-9:00PM"></CheckBox>
                    <CheckBox value="F 1:30PM-3:00PM" title="F 1:30PM-3:00PM"></CheckBox>
========
                    <h1 style={{fontSize: 25, fontWeight:"normal"}}>Instructor 1: Mrs. Jocel Garido</h1>
                </div>
                
                <div style={{marginTop: "1rem", marginLeft:"40rem"}}>
                    <CheckBox value="T 10:00AM-12:00PM" title="T 10:00AM-12:00PM"></CheckBox>
                    <CheckBox value="W 11:00AM-1:00PM" title="W 11:00AM-1:00PM"></CheckBox>
                    <CheckBox value="F 3:30PM-5:30PM" title="F 3:30PM-5:30PM"></CheckBox>
>>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0:src/components/yearStatus/FirstYearSubs/Component/ComputerProgramming2Prof.js
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
<<<<<<<< HEAD:src/components/yearStatus/FirstYearSubs/Component/RPHProf.js
                        <h1 style={{fontSize: 25, fontWeight:"normal"}}>Instructor 2: Mr. Quizon Suan</h1>
                    </div>
                    
                    <div style={{marginTop: "1rem", marginLeft:"40rem"}}>
                        <CheckBox value="M 1:00PM- 3:00PM" title="M 1:00PM- 3:00PM"></CheckBox>
                        <CheckBox value="TH 5:30PM-7:00PM" title="TH 5:30PM-7:00PM"></CheckBox>
                        <CheckBox value="F 9:30AM-11:00AM" title="F 9:30AM-11:00AM"></CheckBox>
========
                        <h1 style={{fontSize: 25, fontWeight:"normal"}}>Instructor 2: Ms. Jecil Sampay</h1>
                    </div>
                    
                    <div style={{marginTop: "1rem", marginLeft:"40rem"}}>
                        <CheckBox value="W 9:30AM-11:30AM" title="W 9:30AM-11:30AM"></CheckBox>
                        <CheckBox value="TH 7:30AM-9:30AM" title="TH 7:30AM-9:30AM"></CheckBox>
                        <CheckBox value="S 2:30PM-4:30PM" title="S 2:30PM-4:30PM"></CheckBox>
>>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0:src/components/yearStatus/FirstYearSubs/Component/ComputerProgramming2Prof.js
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

<<<<<<<< HEAD:src/components/yearStatus/FirstYearSubs/Component/RPHProf.js
export default Rph;
========
export default ComputerProgramming2;
>>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0:src/components/yearStatus/FirstYearSubs/Component/ComputerProgramming2Prof.js
