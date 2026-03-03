import React from "react";
import "./Challenge10.css"; 
import bgVideo from "../video/video bg ctf.mp4"; // Ensure you have the video file in the correct path

const Challenge0x10 = () => {
  return (
    <div className="challenge-wrapper">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Challenge Content */}
      <div className="challenge-content">
        <h1 className="challenge-header">0x10 {"->"} Crypto Alchemy</h1>
        
        <p className="challenge-instruction">
        in khyrtogherjy e substitution kirjah is e vatjol of ankhyrting by wjikj units of rmeintact eha harmekal 
        witj kirjahtact ekkohling to e fical systav tja units vey ba singma mattahs reihs of mattahs thirmats of mattahs 
        victuhas of tja eboda enl so fohtj tja hakaidah lakirjahs tja tact by rahfohving tja indahsa substitution 
        substitution kirjahs ken ba kovrehal witj thensrosition kirjahs in e thensrosition kirjah tja units of tja 
        rmeintact eha haehhengal in e <b>{"KHEKPAL{GeLSFhtwfpudFLGJMgfs}"}</b> liffahant enl usuemmy quita kovrmac ohlah but tja units tjavsamdas eha maft unkjengal 
        by konthest in e substitution kirjah tja units of tja rmeintact eha hateinal in tja seva saquanka in tja kirjahtact 
        but tja units tjavsamdas eha emtahal 
        </p>

      
        
      </div>
    </div>
  );
};

export default Challenge0x10;

