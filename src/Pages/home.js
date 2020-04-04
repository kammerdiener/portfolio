import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
        <section>
          <div>
            <img src={require("../img/profile.jpg")} width="25%" style={{position: "relative", paddingLeft: "15%"}} />
            <div style={{float: "right", position: "relative", paddingRight: "10%", paddingTop: "5%"}}>
              <div>
                <h1 style={{color: "orange", fontSize: "50px"}}>Hi there I'm Nick Kammerdiener</h1>
              </div>
              <div>
                <p style={{color: "orange", fontSize: "30px"}}>
                  I am a Full Full Stack Developer
                </p>
              </div>
              <div>
                <p style={{color: "orange", fontSize: "30px"}}>
                  I work on Front End, Back End, Mobile, DevOps, and Systems
                </p>
              </div>
            </div>
            <div style={{clear: "both"}}></div>
          </div>
        </section>
        <section style={{clear: "both", marginTop: "-10px"}}>
          <div style={{backgroundColor: "#303030", position: "absolute", width: "100%", paddingTop: "12px", paddingBottom: "12px"}}>
            <div style={{float: "left", paddingLeft: "100px"}}>
              <img src={require("../img/logos/homedepot.png")} height="150px"/>
            </div>
            <div style={{float: "left", paddingLeft: "100px"}}>
              <img src={require("../img/logos/macstadium.png")}/>
            </div>
            <div style={{float: "left", paddingLeft: "100px"}}>
              <img src={require("../img/logos/bitrail.png")} height="75px" style={{paddingTop: "30px"}}/>
            </div>
            <div style={{float: "left", paddingLeft: "100px"}}>
              <img src={require("../img/logos/carrolldaniel.gif")} height="75px" style={{paddingTop: "30px"}}/>
            </div>
            <div style={{float: "left", paddingLeft: "100px"}}>
              <img src={require("../img/logos/dynamix.png")} height="100px"/>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
