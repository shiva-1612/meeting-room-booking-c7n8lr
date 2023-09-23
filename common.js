const CommonHandler = (function(){

  let  self = '';

  const checkRoomAvailibility = function (newMeetingObj, callback){
    
    self = this;
    
    let freeRooms = [],
        onGoingMeetings = [],
        todaysMeeting = [],        
        meetingObj = "",
        roomForNewMeeting = [];

       const MeetingRoomList = self.props.meetingRoomList; 
       
       const checkRoomsForNewMeetingHandler = checkRoomsForNewMeeting.bind(this,newMeetingObj);

      // if meeting rooms
    if(MeetingRoomList){
      
      let isMeetingOnGoing = false, isRoomForNewMeeting = true;          ;
      MeetingRoomList.forEach((meetingRoomObj,index) => {
                

        if(!meetingRoomObj.meetings){
          // if no meetings, room is free
            freeRooms.push(meetingRoomObj.id);
            roomForNewMeeting.push(meetingRoomObj.id);
        }
        else {
          
          isRoomForNewMeeting = true; 

          for(let meetingID of meetingRoomObj.meetings){

              let meetingObj = getMeetingObj( meetingID ) ;

              // check for ongoing meeting
              if ( checkOnGoingMeeting( meetingObj ) ){
                onGoingMeetings.push(meetingID);
                todaysMeeting.push(meetingID);
                isMeetingOnGoing = true;

              } // check is room is booked for today
              else if( checkTodaysMeeting( meetingObj ) ) {
                todaysMeeting.push(meetingID);
              }

            
              if( !checkRoomsForNewMeetingHandler(meetingObj) ){
                    isRoomForNewMeeting = false;
              };             

          }   
          
          if(!isMeetingOnGoing){
            freeRooms.push(meetingRoomObj.id)
          }

          if(isRoomForNewMeeting){
            roomForNewMeeting.push(meetingRoomObj.id);
          }

        }

      })
    } 

    callback(
      {
        freeRooms,
        onGoingMeetings,
        todaysMeeting,
        roomForNewMeeting
      }
    );   
  }

  const convertDateToTimestamp = (date, time) => {
    return new Date(`${date} ${time}`);
  };


  const checkRoomsForNewMeeting = (newMeetingObj, meetingObj) => {

      
      if(!newMeetingObj) return false;

      const StartTime = convertDateToTimestamp(meetingObj.date,  meetingObj.startTime),
            EndTime = convertDateToTimestamp(meetingObj.date, meetingObj.endTime),

            NewMeetingStartTime = convertDateToTimestamp(newMeetingObj.date,  newMeetingObj.startTime),
            NewMeetingEndTime = convertDateToTimestamp(newMeetingObj.date, newMeetingObj.endTime);

            if( (NewMeetingStartTime >= StartTime && NewMeetingStartTime <= EndTime) 
                || (StartTime >= NewMeetingStartTime && StartTime <= NewMeetingEndTime))
            {                             
              return false;
            }

            return true;
  }

  const checkOnGoingMeeting = (meetingObj) => {   

      const CurrentTime = new Date().getTime(),
      StartTime = convertDateToTimestamp(meetingObj.date,  meetingObj.startTime),
      EndTime = convertDateToTimestamp(meetingObj.date, meetingObj.endTime);
      
      if(CurrentTime >= StartTime && CurrentTime <=EndTime){
        return true;
      }
      else {
        return false
      }

  }

   const checkTodaysMeeting = (meetingObj) => {

       const CurrentDate = new Date().toDateString(),      
       MeetingDate = (new Date(meetingObj.date)).toDateString();
       
       return(CurrentDate === MeetingDate);
  }

    const getMeetingObj = (meetingID) => {
    
        const MeetingIndex =  self.props.meetingList.findIndex( obj => meetingID === obj.id);

        if(MeetingIndex !== -1){
          return self.props.meetingList[MeetingIndex];
        }

        return null;
    }


  return {
    checkRoomAvailibility
  }
        
}())


export default CommonHandler;