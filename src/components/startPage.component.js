import React, { Component } from "react";
import Background from '../images/carimage.png';
var sectionStyle = {
    width: "100%",
    height: "750px",
    backgroundImage: `url(${Background})`
  };
export default class StartPage extends Component {
       
          render() {
            return (
              <section style={ sectionStyle }>
                 <div className="p-5 text-center">
                <h1>Car shop</h1>
                </div>
              </section>
                
            );
          }
    }
  