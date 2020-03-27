import React, { Component } from "react";
import {PlaidLink} from "react-plaid-link";
import axios from "axios";



export default class Link extends Component{

   constructor(){
       super();
       this.state = {
           transactions: []
       };
       this.handleCLick = this.handleClick.bind(this);
   }
  
   handleOnSuccess(public_token, metadata) {
    // send token to client server
    axios.post("/auth/public_token", {
      public_token: public_token
    });
  }

  handleOnExit() {
    // handle the case when your user exits Link
    // For the sake of this tutorial, we're not going to be doing anything here.
  }
  handleClick= (res)=> {
    axios.get("/transactions").then(res => {
    
            this.setState({ transactions: res.data });
     
    });
  }
  render() {
    return (
     <div>
        <PlaidLink
            clientName="React Plaid Setup"
            env="sandbox"
            product={["auth", "transactions"]}
            publicKey="2d23bdf36ae634cd15f94ee36a4bc4"
            onExit={this.handleOnExit}
            onSuccess={this.handleOnSuccess}
            className="test"
            >
            Open Link and connect your bank!
        </PlaidLink>
        <div>
        <button style={{"marginTop": "0.5rem"}}onClick={this.handleClick}>Get Transactions</button>
      </div>
      </div>
       
    );
  }
}


