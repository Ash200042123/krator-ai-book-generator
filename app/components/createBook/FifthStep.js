import { InputLabel, TextField } from "@mui/material";
import React, { useContext } from "react";
import { multiStepContext } from "../../StepContext";

export default function FifthStep() {
    const {setCurrentStep, userData, setUserData} = useContext(multiStepContext);
  return (
    <div>
      <div className="flex flex-col mx-20 bg-white p-8 pl-12 rounded-lg">
        <InputLabel className="my-3 text-black font-bold">
          Write Prompt for Generation Cover
        </InputLabel>
        <TextField
        value={userData['author']}
        onChange={(e)=>setUserData({...userData, 'author':e.target.value})}
          multiline
          rows={10}
          placeholder="Description"
          className="bg-primary w-full"
          variant="filled"
          InputProps={{
            style: {
              border: "none",
              borderRadius: "15px",
            },
            disableUnderline: true,
          }}
        />
        <div className="flex flex-row justify-center">
        <button className="btn self-center row w-1/12 bg-btn text-primary p-3 mt-6 rounded-lg"
         >Front Cover</button>
        <button className="btn self-center w-1/12 bg-btn text-primary p-3 mt-6 ml-4 rounded-lg"
         >Back Cover</button>
         </div>
        <button className="btn self-center w-1/4 bg-btn text-primary p-3 m-4 rounded-lg"
        onClick={()=>setCurrentStep(6)} >Next</button>
      </div>
    </div>
  );
}
