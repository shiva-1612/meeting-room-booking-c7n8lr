import React from 'react';

const MeetingCard = (props) =>{

    return(
       <div className="meeting-card">
                  <h4>{props.meetingObj.title}</h4>
                  <div>Date: {props.meetingObj.date}</div>                  
                  <div>Start Time: {props.meetingObj.startTime} </div>
                  <div>End Time: {props.meetingObj.endTime}</div>
                  
        </div>
    );
}

export default MeetingCard;