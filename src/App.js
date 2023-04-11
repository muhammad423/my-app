
import './App.css';
import React from 'react';
import { useState } from 'react';
import List from './components/List'
import SubmitList from './components/SubmitList';
import DammyData from './components/DammyData';


function App(){

   const [data, setData] = useState(DammyData)
   const [editableCard, setEditableCard] = useState(null)
   const childData = (cData) => {
    setData([
        ...data, 
      {...cData, id: data.length+1}
    ])
    };

    const deletCard = (id) => {
      setData(data.filter(cData=>cData.id!==id))
    }

    const editCard = (id) => {
     setEditableCard(data.find(fData=>fData.id===id))
      console.log(id)
    }


     return(
      <div className='App'>
        <SubmitList childData={childData}editableCard={editableCard}></SubmitList>
       <div className='app-list'>
       {data.map((todo)=><List
           name={todo.name}
           age ={todo.age}
           key={todo.id}
           id={todo.id}
           date_of_Birth={todo.date_of_Birth}
           deletCard={deletCard}
           editCard={editCard}
         ></List>)}
       </div>
         
      </div>
     )
  
}

export default App;