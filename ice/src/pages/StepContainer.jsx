import "../jun.css";
import "../"

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Aq from "../components/AdvanceQuestion"
import Upper from "../components/Upper"
import Dday from "../components/Dday"
import Stepstack from "../components/Stepstack";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";


export default function StepPage() {

    return(
        <div className='step-container'>
            
            <BrowserRouter>
            <Upper/>
            <Stepstack/>
                <Routes>
                    <Route path="Aq" element={<Aq/>}/>
                    <Route path="step-1" element={<Step1/>}/>
                    <Route path="step-2" element={<Step2/>}/>
                    <Route path="step-3" element={<Step3/>}/>
                </Routes>
                <button className="btn">링크 복사하기</button>    
            </BrowserRouter>          
        </div>
    )

}