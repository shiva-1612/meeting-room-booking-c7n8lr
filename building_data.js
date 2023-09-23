
const Buidlings = [

  {
    name : "Building 1",
    id : 1,
    meetingRooms : [1, 2, 3]
  },

   {
    name : "Building 2",
    id : 2,
    meetingRooms : [4, 5, 6]
  },

   {
    name : "Building 3",
    id : 3,
    meetingRooms : [7]
  },

];


const MeetingRooms = [

  {
    id: 1,
    name: 'Meeting Room 1',
    floor : 1,
    building : 1,
    meetings: [1]
  },

  {
    id: 2,
    name: 'Meeting Room 2',
    floor : 2,
    building : 1,
    meetings: null
  },

  {
    id: 3,
    name: 'Meeting Room 3',
    floor : 3,
    building : 1,
    meetings: null
  },

  {
    id: 4,
    name: 'Meeting Room 4',
    floor : 1,
    building : 2,
    meetings: null
  },

  {
    id: 5,
    name: 'Meeting Room 5',
    floor : 2,
    building : 2,
    meetings: null
  },


  {
    id: 6,
    name: 'Meeting Room 6',
    floor : 2,
    building : 3,
    meetings: null
  },

  {
    id: 7,
    name: 'Meeting Room 7',
    floor : 2,
    building : 3,
    meetings: null
  }

]


const Meeting = [
  {
    id : 1,
    title : 'Quick Books daily stand up',
    date : '06/13/2019',
    startTime : "12:00",
    endTime : "12:00",
    meetingRoom : 1    
  }
]



export {
    Buidlings,
    MeetingRooms,
    Meeting

}
