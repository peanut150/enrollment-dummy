import React, { useState } from "react";
import BackBtn from "../../buttonprops/BackBtn";
<<<<<<< HEAD
import ArtApp from "../FirstYearSubs/Component/ArtAppProf"
import Comprog2 from "../FirstYearSubs/Component/Comprog2Prof"
import DiscreteMath from "../FirstYearSubs/Component/DiscreteMathProf"
import Dsalgo from "../FirstYearSubs/Component/DsalgoProf"
import NSTP2 from "../FirstYearSubs/Component/NSTP2Prof"
import PE2 from "../FirstYearSubs/Component/PE2Prof"
import STS from "../FirstYearSubs/Component/StsProf"
import UTS from "../FirstYearSubs/Component/UtsProf"
import SubjectBtn from "./SubjectBtn"

function FirstYearFirstSem({onClickBack, title, onClickNext}) {
const [showArtApp, setShowArtApp] = useState(false)
const [showPathFit2, setShowPathFit2] = useState(false)
const [showIT121, setShowIT121] = useState(false)
const [showIT123, setShowIT123] = useState(false)
const [showIT122, setShowIT122] = useState(false)
const [showNSTP102, setShowNSTP102] = useState(false)
const [showSTS, setShowSTS] = useState(false)
const [showUTS, setShowUTS] = useState(false)
const [show, setShow] = useState(true)
=======
import SubjectBtn from "./SubjectBtn";
import CheckBox from "./Component/CheckBox";
import ComputerProgramming2 from "./Component/ComputerProgramming2Prof";
import DataStructuresandAlgorithms from "./Component/DataStructuresandAlgorithmsProf";
import DiscreteMathematics from "./Component/DiscreteMathematicsProf";
import ArtAppreciation from "./Component/ArtAppreciationProf";
import UnderstandingTheSelf from "./Component/UnderstandingTheSelfProf";
import ScienceTechnologyandSociety from "./Component/ScienceTechnologyandSocietyProf";
import RotcCwtsLts2 from "./Component/RotcCwtsLts2Prof";
import FitnessActivityandExercises from "./Component/FitnessActivityandExercisesProf";

function FirstYearSecondSem({onClick, title}) {
  const [showIT121, setShowIT121] = useState(false)
  const [showIT122, setShowIT122] = useState(false)
  const [showIT123, setShowIT123] = useState(false)
  const [showArtApp, setShowArtApp] = useState(false)
  const [showUTS, setShowUTS] = useState(false)
  const [showSTS, setShowSTS] = useState(false)
  const [showNSTP102, setShowNSTP102] = useState(false)
  const [showPATHFITH2, setShowPATHFIT2] = useState(false)
  const [show, setShow] = useState(true)
>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0
  return (

    <>
    
        <div style={{ backgroundColor: "#F6F6F6", height: "100%", width:"100%", display:"flex", position:"absolute"}}>

<<<<<<< HEAD
          {showNSTP102 ? (
            <>
              <NSTP2 onClickBack={() => setShow(!show) & setShowNSTP102(!showNSTP102)} onClickNext={() => setShow(!show) & setShowNSTP102(!showNSTP102)}></NSTP2>
            </>
          ) : null}

          {showPathFit2 ? (
            <>
              <PE2 onClickBack={() => setShow(!show) & setShowPathFit2(!showPathFit2)} onClickNext={() => setShow(!show) & setShowPathFit2(!showPathFit2)}></PE2>
            </>
          ) : null}

          {showIT121 ? (
            <>
              <Comprog2 onClickBack={() =>setShow(!show) & setShowIT121(!showIT121)} onClickNext={() =>setShow(!show) & setShowIT121(!showIT121)}></Comprog2>
            </>
          ) : null}

          {showIT123 ? (
            <>
              <DiscreteMath onClickBack={() => setShow(!show) & setShowIT123(!showIT123)} onClickNext={() => setShow(!show) & setShowIT123(!showIT123)}></DiscreteMath>
=======
          {showIT121 ? (
            <>
            <ComputerProgramming2 onClickBack={() => setShow(!show) & setShowIT121(!showIT121)}></ComputerProgramming2>
>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0
            </>
          ) : null}

          {showIT122 ? (
            <>
<<<<<<< HEAD
              <Dsalgo onClickBack={() => setShow(!show) & setShowIT122(!showIT122)} onClickNext={() => setShow(!show) & setShowIT122(!showIT122)}></Dsalgo>
            </>
          ) : null}

          {showArtApp ? (
            <>
              <ArtApp onClickBack={() => setShow(!show) & setShowArtApp(!showArtApp)} onClickNext={() => setShow(!show) & setShowArtApp(!showArtApp)}></ArtApp>
            </>
          ) : null}

          {showUTS ? (
            <>
              <UTS onClickBack={() => setShow(!show) & setShowUTS(!showUTS)} onClickNext={() => setShow(!show) & setShowUTS(!showUTS)}></UTS>
            </>
          ) : null}

          {showSTS ? (
            <>
              <STS onClickBack={() => setShow(!show) & setShowSTS(!showSTS)} onClickNext={() => setShow(!show) & setShowSTS(!showSTS)}></STS>
            </>
=======
            <DataStructuresandAlgorithms onClickBack={() => setShow(!show) & setShowIT122(!showIT122)}></DataStructuresandAlgorithms>
            </>
          ) : null}

          {showIT123 ? (
             <>
             <DiscreteMathematics onClickBack={() => setShow(!show) & setShowIT123(!showIT123)}></DiscreteMathematics>
             </>
          ) : null}

          {showArtApp ? (
             <>
             <ArtAppreciation onClickBack={() => setShow(!show) & setShowArtApp(!showArtApp)}></ArtAppreciation>
             </>
          ) : null}

          {showUTS? (
              <>
              <UnderstandingTheSelf onClickBack={() => setShow(!show) & setShowUTS(!showUTS)}></UnderstandingTheSelf>
              </>
          ) : null}

          {showSTS ? (
              <>
              <ScienceTechnologyandSociety onClickBack={() => setShow(!show) & setShowSTS(!showSTS)}></ScienceTechnologyandSociety>
              </>
          ) : null}

          {showNSTP102 ? (
              <>
              <RotcCwtsLts2 onClickBack={() => setShow(!show) & setShowNSTP102(!showNSTP102)}></RotcCwtsLts2>
              </>
          ) : null}

          {showPATHFITH2 ? (
              <>
              <FitnessActivityandExercises onClickBack={() => setShow(!show) & setShowPATHFIT2(!showPATHFITH2)}></FitnessActivityandExercises>
              </>
>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0
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
              <div style={{marginLeft: "-40rem", marginTop: "-4rem"}}>
                <h1 style={{fontWeight:"bold", fontSize: 60}}>LIST OF SUBJECTS</h1>
              </div>
              <div>
                <h3>{title}</h3>
              </div>
             </div>
<<<<<<< HEAD
             <div style={{display:"flex", flexDirection:"column", marginLeft: 55, marginTop: "6rem"}}>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowNSTP102(!showNSTP102)} code="NSTP102" title="ROTC/CWTS/LTS 2"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowPathFit2(!showPathFit2)} code="PathFit2" title="Fitness Activity and Exercises"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowIT121(!showIT121)} code="IT121" title="Computer Programming 2"></SubjectBtn>
=======
             <div style={{display:"flex", flexDirection:"column", marginLeft: 55, marginTop: "8rem"}}>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowIT121(!showIT121)} code="NSTP101" title="Computer Programming 2"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowIT122(!showIT122)} code="IT122" title="Data Structures and Algorithms"></SubjectBtn>
>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowIT123(!showIT123)} code="IT123" title="Discrete Mathematics"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowArtApp(!showArtApp)} code="ArtApp" title="Art Appreciation"></SubjectBtn>
              </div>
              <div>
<<<<<<< HEAD
                <SubjectBtn onClick={() => setShow(!show) & setShowUTS(!showUTS)} code="UTS" title="Understanding the Self"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowSTS(!showSTS)} code="STS" title="Science, Technology and Society"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowIT122(!showIT122)} code="IT122" title="Data Structures and Algorithms"></SubjectBtn>
              </div>
             </div>
             <div style={{ display: 'flex', marginTop: "40rem", position:"absolute"}}>
              <button className='backbtn' onClick={onClickBack}>BACK</button>
              <button className='nextbtn' onClick={onClickNext} style={{marginLeft:"70rem"}}>NEXT</button>
          </div>
=======
                <SubjectBtn onClick={() => setShow(!show) & setShowUTS(!showUTS)} code="UTS" title="Understanding The Self"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowSTS(!showSTS)} code="STS" title="Science Technology and Society"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowNSTP102(!showNSTP102)} code="NSTP102" title="ROTC/CWTS/LTS 2"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowPATHFIT2(!showPATHFITH2)} code="PATHFIT2" title="Fitness Activity and Exercises"></SubjectBtn>
              </div>
             </div>
             <div style={{marginTop: 54, marginLeft: -255}}>
              <BackBtn title = "BACK" onClick={onClick}></BackBtn>
             </div>
             
>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0
            </>
          ):null}
             
             
      </div>
      </>
        
  );
}

<<<<<<< HEAD
export default FirstYearFirstSem;
=======
export default FirstYearSecondSem;
>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0
