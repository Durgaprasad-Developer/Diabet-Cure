import React,{useState} from 'react'
import {motion} from "framer-motion"

function Glucosereadings() {
  const [value,setValue] = useState("");
  const [mealContext, setmealContext] = useState("");
  const [mealTag, setmealTag] = useState("");
  const [notes, setNotes] = useState("");

  

  return (
    <div>
      <form action="">
        <div>
          <label >
            GlucoReading Value
          <input required type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
          </label>
        </div>
        <div>
          <label >
            Meal Context
            <button value="preMeal" onClick={()=>setmealContext("preMeal")}>preMeal</button>
            <button value="postMeal" onClick={()=>setmealContext("postMeal")}>postMeal</button>
          </label>
        </div>
        <div>
          <label>
            Meal Type
          <select value={mealTag} onChange={(e)=>setmealTag(e.target.value)} required>
            <option value="fasting">fasting</option>
            <option value="breakfast">breakfast</option>
            <option value="lunch">lunch</option>
            <option value="dinner">dinner</option>
            <option value="bedtime">bedtime</option>
          </select>
          </label>
        </div>
        <div>
          <label >
            <input type="text" value={notes} onChange={(e)=>setNotes(e.target.value)} />
          </label>
        </div>
        
      </form>
    </div>
  )
}

export default Glucosereadings