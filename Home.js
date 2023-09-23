import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';

import InfoCard from './InfoCard';
import * as BuildingData from './building_data';

import CommonHandler from './common';
import MeetingCard from './MeetingCard';

class Home extends Component{ 

  state = {
    freeRooms : [],
    bookedRooms : [],
    onGoingMeetings : [],
    todaysMeeting : [], 
  }

  
componentWillMount = () => {    
  CommonHandler.checkRoomAvailibility.call(this, null, this.updateRoomsAvailablibilty);  
}
  

  getBuildingDetails = () => {
    
      const TotalBuildings = this.props.buildingList.length;

      return {
        total : TotalBuildings
      }
  }   

  getRoomsDetails = () => {
      const TotalRooms = this.props.meetingRoomList.length;

      return {
        total : TotalRooms,
        free : this.state.freeRooms.length
      }      
  }   

  getMeetingsDetails = () => {
   
      return {
        total : this.state.todaysMeeting.length,
        onGoing : this.state.onGoingMeetings.length
      }
  }   


  updateRoomsAvailablibilty = (obj) => {    
    this.setState({...obj});
  }

  render() {
   
    const BuildingObj  = this.getBuildingDetails(),
          
          RoomsObj = this.getRoomsDetails(),

          MeetingsObj = this.getMeetingsDetails();    

          const MeetingCardsElement = this.props.meetingList.map(function(obj){
            return (
              <MeetingCard meetingObj={obj}></MeetingCard>
            )
          })

    return(
      <section id="home-page-container" className="home-page-container">
        
        <div className="main-container">
           
            <InfoCard name="buildings" data = {BuildingObj}></InfoCard>
            <InfoCard name="rooms" data = {RoomsObj}></InfoCard>
            <InfoCard name="meetings" data = {MeetingsObj}></InfoCard>

            <NavLink to='add-meeting' exact>
              <button className="primary-btn">Add meeting</button>
            </NavLink>
         </div>     


         <div className="flex-item flex-row-container">
              {MeetingCardsElement}
         </div>

      </section>
    );
  }
}

const mapsStateToProps = (state) =>{

  return {
    ...state
  }
}

export default connect(mapsStateToProps)(Home);
