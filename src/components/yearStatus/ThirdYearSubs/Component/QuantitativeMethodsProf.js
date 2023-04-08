import { FormControlLabel, FormGroup } from "@mui/material";
import React, { useState } from "react";
import BackBtn from "../../../buttonprops/BackBtn";
import {Checkbox} from "@mui/material";
import CheckBox from "./CheckBox";
import SemBtn from "../../../buttonprops/SemBtn";

<<<<<<<< HEAD:src/components/yearStatus/ThirdYearSubs/Component/ITElect1Prof.js
function ITElect1({onClickBack, onClickNext, title}) {
========
function QuantitativeMethods({onClickBack, onClickNext, title}) {
>>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0:src/components/yearStatus/ThirdYearSubs/Component/QuantitativeMethodsProf.js
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
<<<<<<<< HEAD:src/components/yearStatus/ThirdYearSubs/Component/ITElect1Prof.js
                <h4 style={{fontWeight:"bold", fontSize: 30}}>SUBJECT: IT315 - Software Engineering</h4>
========
                <h4 style={{fontWeight:"bold", fontSize: 30}}>SUBJECT: IT324 - QuantitativeMethods</h4>
>>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0:src/components/yearStatus/ThirdYearSubs/Component/QuantitativeMethodsProf.js
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
<<<<<<<< HEAD:src/components/yearStatus/ThirdYearSubs/Component/ITElect1Prof.js
                    <h1 style={{fontSize: 25, fontWeight:"normal"}}>Instructor 1: Ms. Petal May M. Dal</h1>
                </div>
                
                <div style={{marginTop: "1rem", marginLeft:"40rem"}}>
                    <CheckBox value="M 11:00AM-1:00PM" title="M 11:00AM-1:00PM"></CheckBox>
                    <CheckBox value="W 9:00AM-11:00AM" title="W 9:00AM-11:00AM"></CheckBox>
                    <CheckBox value="TH 10:30AM-12:30PM" title="TH 10:30AM-12:30PM"></CheckBox>
========
                    <h1 style={{fontSize: 25, fontWeight:"normal"}}>Instructor 1: Mrs. Rhegie Caga-anan</h1>
                </div>
                
                <div style={{marginTop: "1rem", marginLeft:"40rem"}}>
                    <CheckBox value="M 3:00PM-5:00PM" title="M 3:00PM-5:00PM"></CheckBox>
                    <CheckBox value="TH 1:30PM-3:30PM" title="TH 1:30PM-3:30PM"></CheckBox>
                    <CheckBox value="F 9:00AM-11:00AM" title="F 9:00AM-11:00AM"></CheckBox>
>>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0:src/components/yearStatus/ThirdYearSubs/Component/QuantitativeMethodsProf.js
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
<<<<<<<< HEAD:src/components/yearStatus/ThirdYearSubs/Component/ITElect1Prof.js
                        <h1 style={{fontSize: 25, fontWeight:"normal"}}>Instructor 2: Ms. Kaycee Tim</h1>
                    </div>
                    
                    <div style={{marginTop: "1rem", marginLeft:"40rem"}}>
                        <CheckBox value="T 4:00PM- 6:00PM" title="T 4:00PM- 6:00PM"></CheckBox>
                        <CheckBox value="W 11:00AM-1:00PM" title="W 11:00AM-1:00PM"></CheckBox>
                        <CheckBox value="F :30AM-9:30AM" title="F :30AM-9:30AM"></CheckBox>
========
                        <h1 style={{fontSize: 25, fontWeight:"normal"}}>Instructor 2: Mrs. Dianalyn Villalobos</h1>
                    </div>
                    
                    <div style={{marginTop: "1rem", marginLeft:"40rem"}}>
                        <CheckBox value="W 1:00PM-3:00PM" title="W 1:00PM-3:00PM"></CheckBox>
                        <CheckBox value="F 7:30AM-9:30AM" title="F 7:30AM-9:30AM"></CheckBox>
                        <CheckBox value="S 9:00AM-11:00AM" title="S 9:00AM-11:00AM"></CheckBox>
>>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0:src/components/yearStatus/ThirdYearSubs/Component/QuantitativeMethodsProf.js
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

<<<<<<<< HEAD:src/components/yearStatus/ThirdYearSubs/Component/ITElect1Prof.js
export default ITElect1;
========
export default QuantitativeMethods;
>>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0:src/components/yearStatus/ThirdYearSubs/Component/QuantitativeMethodsProf.js
