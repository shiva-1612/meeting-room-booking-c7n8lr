
import React from 'react';

import {connect} from 'react-redux';

import CommonHandler from './common';

class AddMeeting extends React.Component{
  

  state = {
    title : '',
    date : '',
    startTime : '',
    endTime : '',
    building : '',
    meetingRoom : null,
    frame:1,
    id : this.props.meetingList.length ? this.props.meetingList[this.props.meetingList.length - 1].id + 1 : 1,
    selectedRoomID:''

  }

  inputChangeHandler = (event) => {
    this.setState({[event.target.name] : event.target.value});
  }

  addMeeting = () => {
    
    let id = this.props.meetingList.id ? this.props.meetingList.id + 1 : 1;

    const {dispatch} = this.props,
    
    payload = {
      ...this.state, 
      id
    }  

    dispatch({type : 'ADD_MEETING', payload})
  }

  getAvailableRoom = (event) => {    
    event.preventDefault();
    CommonHandler.checkRoomAvailibility.call(this, this.state, (obj) => {
        this.setState({...obj, frame : 2})   
      }
      ) ;   
  }

  generateAvailableRoomsElement = () => {    
    
    const freeRoomArr = [];
      
     let avialableRoomsElement = "";

     if(this.state.roomForNewMeeting){

          for( let roomObj of this.props.meetingRoomList){
            if(this.state.roomForNewMeeting.some((ID) => ID === roomObj.id)){
              freeRoomArr.push(roomObj);
            }
          }

          avialableRoomsElement = freeRoomArr.map( meetingObj => {
            if((this.state.building == meetingObj.building) || !this.state.building){
                return(
                      <ul onClick = { (e) => this.onRoomSelect(meetingObj.id, e) } name = "selectedRoom" className="avilable-room-list-wrapper" key = { meetingObj.id }>
                      
                          <li className="room-item" >
                            <span>{meetingObj.name}</span>
                            <span>{`Building ${meetingObj.building}`}</span>
                            <span>{`Floor ${meetingObj.floor}`}</span>
                          </li>                    
                      </ul>
              );
            }
            else {
              return null;
            }
            
            
        });
     }
    

  return avialableRoomsElement;

  }

   onRoomSelect = (id, event) => {

     const activeRoom = document.querySelector('.active-room');
     
     if(activeRoom){
       activeRoom.classList.remove('active-room');
     }

     event.currentTarget.classList.add("active-room") 

     this.setState({selectedRoomID : id});    

  }

  saveMeeting = () => {
     const {dispatch} = this.props,
     StateCopy = {...this.state};

     let payload = {
       title : StateCopy.title,
       date : StateCopy.date, 
       startTime : StateCopy.startTime, 
       endTime : StateCopy.endTime, 
       id : StateCopy.id, 
       building : StateCopy.building,
       meetingRoom : this.state.selectedRoomID 
       }

     dispatch({type:'ADD_MEETING' , payload});
     this.props.history.push('/');
  } 

  

  render(){    
  
    return (
  
      <section active-frame = {this.state.frame} id="add-meeting-container" className="add-main-container main-container">
          
          <form className="form-container">

             <div className="input-controller">
                <label>Meeting Title</label>
                <input type="text" placeholder="title" name="title" onChange ={this.inputChangeHandler}/>
             </div>  

             <div className="input-controller">
                <label>Date</label>
                <input type="text" placeholder="mm/dd/yyyy" name="date" onChange ={this.inputChangeHandler}/>
             </div>  


             <div className="input-controller">
                <label>Start Time</label>
                <input type="text" placeholder="hh:mm" name="startTime" onChange ={this.inputChangeHandler}/>
             </div>  


             <div className="input-controller">
                <label>End Time</label>
                <input type="text" placeholder="hh:mm" name="endTime" onChange ={this.inputChangeHandler}/>
             </div> 

             <div className="input-controller">
                <label>Select Building</label>
                <select name="building" onChange ={this.inputChangeHandler}>
                  <option value="">Select building</option>
                  <option value="1">Building One</option>
                  <option value="2">Building Two</option>
                  <option value="3">Building Three</option>
                  <option value="4">Building four</option>
                </select>
             </div>   

             <button onClick = {this.getAvailableRoom} className="primary-btn">Next</button>


          </form>

          <div className="avilable-room-container">  
          
            {this.generateAvailableRoomsElement()}

            <button className="primary-btn" onClick={this.saveMeeting}>Save</button>
        </div>

      </section>
    );
  }
}


const mapStateToProps = (state) => {  
  console.log(state);
  console.log("state");
  return {...state}
}

export default connect(mapStateToProps)(AddMeeting);