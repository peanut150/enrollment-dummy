import React, { useState } from "react";
import BackBtn from "../../buttonprops/BackBtn";
<<<<<<< HEAD
import SubjectBtn from "./SubjectBtn";
import IAS from "../ThirdYearSubs/Component/IASProf";
import ITElect1 from "../ThirdYearSubs/Component/ITElect1Prof";
import Mobprog from "../ThirdYearSubs/Component/MobProgProf";
import Net2 from "../ThirdYearSubs/Component/Net2Prof";
import SoftEng from "../ThirdYearSubs/Component/SoftEngProf";
import Techno from "../ThirdYearSubs/Component/TechnoProf";


function ThirdYearFirstSem({onClickBack, onClickNext, title}) {
=======
import InformationAssuranceandSecurity from "./Component/InformationAssuranceandSecurityProf";
import SubjectBtn from "./SubjectBtn";
import Networking2 from "./Component/Networking2Prof";
import MobileProgramming from "./Component/MobileProgrammingProf";
import SoftwareEngineering from "./Component/SoftwareEngineeringProf";
import ITElective1 from "./Component/ITElective1Prof";
import Technopreneurship from "./Component/TechnopreneurshipProf";

function ThirdYearFirstSem({onClick, title}) {
>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0
const [showIT311, setShowIT311] = useState(false)
const [showIT312, setShowIT312] = useState(false)
const [showIT313, setShowIT313] = useState(false)
const [showIT314, setShowIT314] = useState(false)
const [showIT315, setShowIT315] = useState(false)
<<<<<<< HEAD
const [showES211A, setShowES211A] = useState(false)
=======
const [showES211a, setShowES211a] = useState(false)
>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0
const [show, setShow] = useState(true)
  return (

    <>
    
        <div style={{ backgroundColor: "#F6F6F6", height: "100%", width:"100%", display:"flex", position:"absolute"}}>

          {showIT311 ? (
            <>
<<<<<<< HEAD
            <IAS onClickBack={() => setShow(!show) & setShowIT311(!showIT311)} onClickNext={() => setShow(!show) & setShowIT311(!showIT311)}></IAS>
=======
            <InformationAssuranceandSecurity onClickBack={() => setShow(!show) & setShowIT311(!showIT311)}></InformationAssuranceandSecurity>
>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0
            </>
          ) : null}

          {showIT312 ? (
            <>
<<<<<<< HEAD
            <Net2 onClickBack={() => setShow(!show) & setShowIT312(!showIT312)} onClickNext={() => setShow(!show) & setShowIT312(!showIT312)}></Net2>
=======
            <Networking2 onClickBack={() => setShow(!show) & setShowIT312(!showIT312)}></Networking2>
>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0
            </>
          ) : null}

          {showIT313 ? (
             <>
<<<<<<< HEAD
             <Mobprog onClickBack={() => setShow(!show) & setShowIT313(!showIT313)} onClickNext={() => setShow(!show) & setShowIT313(!showIT313)}></Mobprog>
=======
             <MobileProgramming onClickBack={() => setShow(!show) & setShowIT313(!showIT313)}></MobileProgramming>
>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0
             </>
          ) : null}

          {showIT314 ? (
             <>
<<<<<<< HEAD
             <SoftEng onClickBack={() => setShow(!show) & setShowIT314(!showIT314)} onClickNext={() => setShow(!show) & setShowIT314(!showIT314)}></SoftEng>
=======
             <SoftwareEngineering onClickBack={() => setShow(!show) & setShowIT314(!showIT314)}></SoftwareEngineering>
>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0
             </>
          ) : null}

          {showIT315 ? (
              <>
<<<<<<< HEAD
              <ITElect1 onClickBack={() => setShow(!show) & setShowIT315(!showIT315)} onClickNext={() => setShow(!show) & setShowIT315(!showIT315)}></ITElect1>
              </>
          ) : null}

          {showES211A ? (
              <>
              <Techno onClickBack={() => setShow(!show) & setShowES211A(!showES211A)} onClickNext={() => setShow(!show) & setShowES211A(!showES211A)}></Techno>
=======
              <ITElective1 onClickBack={() => setShow(!show) & setShowIT315(!showIT315)}></ITElective1>
              </>
          ) : null}

          {showES211a ? (
              <>
              <Technopreneurship onClickBack={() => setShow(!show) & setShowES211a(!showES211a)}></Technopreneurship>
>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0
              </>
          ) : null}

          {show ? (
            <>
            <div style=
                {
                  {
                    textAlign:"center",
                    position:"absolute",
                    left: "40rem",
                    top: 70
                  }
                }>
              <div style={{marginLeft: "-40rem", marginTop: "-5rem"}}>
                <h1 style={{fontWeight:"bold", fontSize: 60}}>LIST OF SUBJECTS</h1>
              </div>
              <div>
                <h3>{title}</h3>
              </div>
             </div>
             <div style={{display:"flex", flexDirection:"column", marginLeft: 55, marginTop: "8rem"}}>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowIT311(!showIT311)} code="IT311" title="Information Assurance and Security"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowIT312(!showIT312)} code="IT312" title="Networking 2"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowIT313(!showIT313)} code="IT313" title="Mobile Programming"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowIT314(!showIT314)} code="IT314" title="Software Engineering"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowIT315(!showIT315)} code="IT315" title="IT Elective 1"></SubjectBtn>
              </div>
              <div>
<<<<<<< HEAD
                <SubjectBtn onClick={() => setShow(!show) & setShowES211A(!showES211A)} code="ES211A" title="Technopreneurship"></SubjectBtn>
=======
                <SubjectBtn onClick={() => setShow(!show) & setShowES211a(!showES211a)} code="ES211a" title="Technopreneurship"></SubjectBtn>
>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0
              </div>
             </div>
             <div style={{ display: 'flex', marginTop: "40rem", position:"absolute"}}>
              <button className='backbtn' onClick={onClickBack}>BACK</button>
              <button className='nextbtn' onClick={onClickNext} style={{marginLeft:"70rem"}}>NEXT</button>
          </div>
            </>
          ):null}
             
             
      </div>
      </>
        
  );
}

export default ThirdYearFirstSem;