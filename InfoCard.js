
import React from 'react';
import './style.css'


const InfoCard = (props) => {

  const generateInfoListElement = function(){

  let listElement = '';
  
    if(props.name === 'buildings'){

       listElement = (
           <ul className="info-list">
              <li>Total {props.data.total}</li>
           </ul>
       ) 

    }

    else if(props.name === 'rooms'){
      
      listElement = (
        
        <ul className="info-list">
          <li>Total {props.data.total}</li>
          <li>Free Now {props.data.free}</li>
        </ul> 

       ) 
    }


  else if(props.name === 'meetings'){

      listElement = (

        <ul className="info-list">          
          <li>Total {props.data.total} today</li>
          <li>Total {props.data.onGoing} Going on now</li>
        </ul> 

       )
  }

  return listElement;
}


  return (

    <div className="info-card-container">
        
        <h3 className="title">{props.name}</h3>
        
        {generateInfoListElement()}


    </div>

  );
}

export default InfoCard;