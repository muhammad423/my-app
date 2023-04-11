import React from 'react';
import './list.css'
const List = ({name,age,date_of_Birth ,Key, deletCard, id,editCard}) =>{

    return(
        <div className='main-list'>
          <div className=' inner-list'>
            <div className='data'>
                <h4>{`Name: ${name}`}</h4>
                <h4>{`Age: ${age}`}</h4>
                <h4>{`Date: ${ date_of_Birth}`}</h4>
            </div>
            <div className='btn'>
                <button className='edit' onClick={() => editCard(id)}>Edit</button>
                <button className='close' onClick={() => deletCard(id)}>X</button>
            </div>
          </div>
        </div>
    )
}

export default List;