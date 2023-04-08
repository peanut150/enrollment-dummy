import { useState } from 'react';
import BackBtn from './yearStatus/FirstYearSubs/Component/BackBtn';
import SemBtn from './buttonprops/SemBtn';
import FirstYearFirstSem from "./yearStatus/FirstYearSubs/FirstYearFirstSem"
import FirstYearSecondSem from "./yearStatus/FirstYearSubs/FirstYearSecondSem"


function YearLevelPage({onClickBack, onClickNext, title}) {

  const [show4FirstSem, setShow4FirstSem] = useState(false)
  const [showYearLevelPage, setShowYearLevelPage] = useState(true)
  const [show4SecondSem, setShow4SecondSem] = useState(false)

  return (

        <div style={{ backgroundColor: "#F6F6F6", height: "100%", width:"100%", display:"flex", position:"absolute"}}>
              {show4FirstSem ? (
                    <FirstYearFirstSem onClickBack={()=> setShow4FirstSem(!show4FirstSem) & setShowYearLevelPage(!showYearLevelPage)}></FirstYearFirstSem>
                  ) : null}

              {show4SecondSem ? (
                    <FirstYearSecondSem  onClickBack={()=> setShow4SecondSem(!show4SecondSem) & setShowYearLevelPage(!showYearLevelPage)}></FirsthYearSecondSem>
                  ) : null}

              {showYearLevelPage ? (
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

                
              <div>
                <h1 >View Student Enrollment</h1>
              </div>
              <div>
                <h3>{title}</h3>
              </div>
             </div>
             <div style={{display:"flex", flexDirection:"column", marginLeft: 55}}>
              <div>
                <SemBtn onClick={() => setShow4FirstSem(!show4FirstSem) & setShowYearLevelPage(!showYearLevelPage)} title="First Semester"></SemBtn>
              </div>
              <div style={{marginTop:"-13rem"}}>
                <SemBtn onClick={() => setShow4SecondSem(!show4SecondSem) & setShowYearLevelPage(!showYearLevelPage)} title="Second Semester"></SemBtn>
              </div>
             </div>
             <div style={{display:"flex", position:"absolute", marginTop: "30rem"}}>
                <div>
                    <BackBtn title="BACK" onClick={onClickBack}></BackBtn>
                </div>
             </div>
                </>
              ):null}
             
             
             
             
             
             
             
      </div>
        
  );
}

export default YearLevelPage;
