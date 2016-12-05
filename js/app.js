import React from "react";
import ReactDOM from "react-dom";

var MyComponent = React.createClass({
    render:function(){
      return <div>Hello {this.props.name}</div>;
    }
});

var mountNode= document.getElementById("root");

ReactDOM.render(<MyComponent name="Srinivasa Reddy" />, mountNode);
