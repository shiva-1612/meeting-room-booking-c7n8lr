
import * as BuildingData from './building_data';

const InitialState = {
      buildingList : BuildingData.Buidlings,
      meetingRoomList : BuildingData.MeetingRooms,
      meetingList : BuildingData.Meeting
}
const rootReducer = (state = InitialState, action) => {
  
  switch(action.type){
    case "LOAD_DATA": return {
                            ...state, 
                            buildingList : action.payload.buildingList ? action.payload.buildingList : state.buildingList, 
                            meetingRoomList : action.payload.meetingRoomList ? action.payload.meetingRoomList : state.meetingRoomList,
                            meetingList : action.payload.meetingList ? action.payload.meetingList : state.meetingList
                          };

    case 'ADD_MEETING': {
      
      const StateCopy = {...state},

      const MeetingRoomIndex = StateCopy.meetingRoomList.findIndex(obj => obj.id === action.payload.meetingRoom);

      if(MeetingRoomIndex !== -1 ){
        
        if(StateCopy.meetingRoomList[MeetingRoomIndex].meetings){
          StateCopy.meetingRoomList[MeetingRoomIndex].meetings.push(action.payload.id)
        }
        else {
          StateCopy.meetingRoomList[MeetingRoomIndex].meetings = [action.payload.id]
        }
        
      }
      

      if(StateCopy.meetingList){
        StateCopy.meetingList.push(action.payload);
      }

      return StateCopy;
    }

    default : return state;
  }

}


export default rootReducer;