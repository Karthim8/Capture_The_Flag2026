import React, { useState } from "react";
import "./Challenge36.css";
import bgVideo from "../video/video bg ctf.mp4";

const Challenge0x36 = () => {

  const [input,setInput] = useState("");
  const [response,setResponse] = useState("");
  const [stage,setStage] = useState(1);

  // 🔐 hidden admin key
  const adKey = "sql_master";

  // 🔐 hidden flag (encoded)
  const flag = atob("Q1JBQ0tFRHtZb3VBcmVTUUxNYXN0ZXJ9");

  const handleSubmit = (e)=>{
    e.preventDefault();

    // -----------------
    // CHECKPOINT 1
    // -----------------
    if(stage===1){

      if(input.includes("OR 1=1") || input.includes("' OR")){
        setStage(2);
        setResponse("Checkpoint 1 passed. Database access granted. Enter SQL query to verify admin key.");
      }
      else{
        setResponse("Login failed.");
      }

    }

    // -----------------
    // CHECKPOINT 2
    // -----------------
    else if(stage===2){

      const match = input.match(/key LIKE '(.+)%'/i);

      if(match){

        const prefix = match[1];

        if(adKey.startsWith(prefix)){
          setResponse("TRUE");
        }
        else{
          setResponse("FALSE");
        }

      }

      else if(input === adKey){

        setStage(3);
        setResponse("Checkpoint 2 passed. Key can be verified Successfully.");

      }

      else{
        setResponse("Query error.");
      }

    }

    // -----------------
    // FINAL FLAG
    // -----------------
    else if(stage===3){

      setResponse("FLAG: " + flag);

    }

  };

  return (

    <div className="challenge-wrapper">

      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4"/>
      </video>

      <div className="challenge-content">

        <h1 className="challenge-header">0x36 → SQL Injection Control Panel</h1>

        <p className="challenge-instruction">

          A ransomware control server database was recovered.<br/>
          The login system appears vulnerable.<br/><br/>

          Exploit the SQL injection and retrieve the admin key.

        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Enter SQL payload..."
            value={input}
            onChange={(e)=>setInput(e.target.value)}
          />

          <button type="submit">Execute</button>

        </form>

        <p>{response}</p>

      </div>

    </div>

  );
};

export default Challenge0x36;