import React,{Component} from "react"

export default function Landing(props){
    return(
        <div className="panel-welcome" id="section-2">
        <div className="avatar-section">
          <img src={ props.avatar ? props.avatar : props.avatarFallbackImage } className="img-rounded avatar" id="avatar-image" alt=""/>
        </div>
        <h1>Hello, <span id="heading-name">{ props.name ? props.name : 'Nameless Person' }</span>!</h1>
        <p className="lead">
          <button
            className="btn btn-primary btn-lg"
            id="signout-button"
            onClick={props.onclick }
          >
            Logout
          </button>
        </p>
      </div>
    )
}