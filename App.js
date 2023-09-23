import React from "react";
import routes from "./routes";

export default class App extends React.Component {

  render() {
    console.log(this);
    return (
      <div >
        <header id="header" className="header">
           Smart Meeting Organizer 
        </header>
        {routes}
      </div>
      
      );
  }

}
