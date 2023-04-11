import React, { useEffect, useState } from "react";
import './submitList.css'

const SubmitList = ({childData,editableCard}) => {
    const [enterName, setName] = useState('')
    const [enterAge, setAge] = useState('')
    const [enterDate, setDate] = useState('')
   const nameHandleChange = (e) => {
     setName(e.target.value)
   }

   const ageHandleChange = (e) => {
    setAge(e.target.value)
  }

  const dateHandleChange = (e) => {
    setDate(e.target.value)
  }

   const handleSubmit = (event)=> {
    event.preventDefault()
      let SumbitData = {
        name : enterName,
        age : enterAge,
        date_of_Birth: enterDate
      }
      childData(SumbitData,)

      setName('');
      setAge('');
      setDate('');
   }

   useEffect(() => {
    if(editableCard){
    console.log(editableCard)
    }
   },[editableCard])
    return(
        <div className="main-form">
        <form className="inner-form"  onSubmit={handleSubmit}>
            <div className="inner-form">
                <label>Name:</label>
                <input type="name" placeholder="name" value={enterName} onChange={nameHandleChange}></input>
            </div>
            <div className="inner-form">
                <label>Age:</label>
                <input type="number" placeholder="age" value={enterAge} onChange={ageHandleChange}></input>
            </div>
            <div className="inner-form">
                <label>Date:</label>
                <input type="date" value={enterDate} onChange={dateHandleChange}></input>
            </div>
          <div className="btn-div">
          <button type="submit">Sumit</button>
          </div>
        </form>
        </div>
    )
}

export default SubmitList;