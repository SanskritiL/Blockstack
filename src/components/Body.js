import React from "react"

export default function Body(){
    return(
        <div class="center">
            <h4 style={{"fontWeight":"bold", "color": "white", "textAlign":"center", "margin": "3rem", "border":"2px solid black", "padding":"0.8rem 0rem","backgroundColor":"rgb(77, 76, 76)","borderRadius":"25px"}}>Welcome to Deep Pocket</h4>
        <div class="card">
          <div class="additional">
            <div class="user-card">
              <div class="level center">
                Level 13
              </div>
              <div class="points center">
                5,312 Points
              </div>
             <img className="cardImg" src="stock.png"/>
            </div>
            <div class="more-info">
              <h1>Manage finances</h1>
              <div class="coords">
                <span>Username</span>
                <span>Joined January 2019</span>
              </div>
              <div class="coords">
                <span>Student</span>
                <span>Boston, MA</span>
              </div>
              <div>
                  {/* <div class="title">Matches</div>
                  <i class="fa fa-gamepad"></i>
                  <div class="value">27</div> */}
                  <button style={{"borderRadius":"25px", "margin":"10px"}}>Connect to Bank</button>
                </div>
              <div class="stats">
                <div>
                  <div class="title">Awards</div>
                  <i class="fa fa-trophy"></i>
                  <div class="value">2</div>
                </div>
                <div>
                  <div class="title">Matches</div>
                  <i class="fa fa-gamepad"></i>
                  <div class="value">27</div>
                </div>
                
                <div>
                  <div class="title">Social</div>
                  <i class="fa fa-group"></i>
                  <div class="value">123</div>
                </div>
                <div>
                  <div class="title">Fortune</div>
                  <i class="fa fa-coffee"></i>
                  <div class="value infinity">∞</div>
                </div>
              </div>
            </div>
          </div>
          <div class="general">
            <h1>Manage Finance</h1>
            <p>Connect your bank account</p>
            <span class="more">Mouse over the card for more info</span>
          </div>
        </div>
      
        <div class="card green">
          <div class="additional">
            <div class="user-card">
              <div class="level center">
                Level 13
              </div>
              <div class="points center">
                5,312 Points
              </div>
              <img className="cardImg" src="bit.png"/>

            </div>
            <div class="more-info">
              <h1>Visualize</h1>
              <div class="coords">
                <span>Group Name</span>
                <span>Joined January 2019</span>
              </div>
              <div class="coords">
                <span>Position/Role</span>
                <span>City, Country</span>
              </div>
              <div class="stats">
                <div>
                  <div class="title">Awards</div>
                  <i class="fa fa-trophy"></i>
                  <div class="value">2</div>
                </div>
                <div>
                  <div class="title">Matches</div>
                  <i class="fa fa-gamepad"></i>
                  <div class="value">27</div>
                </div>
                <div>
                  <div class="title">Social</div>
                  <i class="fa fa-group"></i>
                  <div class="value">123</div>
                </div>
                <div>
                  <div class="title">Fortune</div>
                  <i class="fa fa-coffee"></i>
                  <div class="value infinity">∞</div>
                </div>
              </div>
            </div>
          </div>
          <div class="general">
            <h3>Budget that works</h3>
            <p>Visualize your data</p>
            <span class="more">Mouse over the card for more info</span>
          </div>
        </div>
      
      </div>
    )
}