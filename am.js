// import React from "react";
import React, {Component, useState} from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
class AmFrontEnd extends Component{
    constructor(props){
        super(props);
        this.state={
            sino:'',
            vehicletype:'',
            registerationno:'',
            model:'',
            status:'',
            servicedate:'',
            delivery:'',
        };
    }

    handlevehicletypeChange=(event)=>{
        this.setState({vehicletype:event.target.value});
    };
    handleregisterationnoChange=(event)=>{
        this.setState({registerationno:event.target.value});
    };
    handlemodelChange=(event)=>{
        this.setState({model:event.target.value});
    };

    handlestatusChange=(event)=>{
        this.setState({status:event.target.value});
    };
    handleservicedateChange=(event)=>{
        this.setState({servicedate:event.target.value});
    };
    handledeliverydateChange=(event)=>{
        this.setState({delivery:event.target.value});
    };
    handletime_of_serviceChange=(event)=>{
        this.setState({timeofservice:event.target.value});
    };
    handletime_of_deliveryChange=(event)=>{
        this.setState({timeofdelivery:event.target.value});
    };
    handlesinochange=(event)=>{
        this.setState({sino:event.target.value});
    };
    

 handleSubmit = (event) => {

event.preventDefault();

const data={
    vehicletype:this.state.vehicletype,
    registerationno:this.state.registerationno,
    model:this.state.model,
    // fname:this.state.fname,
    status:this.state.status,
    servicedate:this.state.servicedate,
    delivery:this.state.delivery,
    timeofservice:this.state.timeofservice,
    timeofdelivery:this.state.timeofdelivery,
    sino:this.state.sino
};
axios.post('http://localhost:8080/postRegister',data)
};

    render(){
        return(
        <div>
            {/* <header className="nav-header">
            <input type="checkbox" id="nav-check" />
            <div className="nav-btn">
              <label htmlFor="nav-check">
                <span />
                <span />
                <span />
              </label>
            </div>
            <nav className="nav-links" aria-label="Navigation links in  TravCom header">
              <ul>
              <li className="navItems"><Link to='/'>HOME</Link></li>
              <li className="navItems"><Link to='/page1'>UPDATE REGISTRY</Link></li>
              <li className="navItems"><Link to='/page2'>DELETE REGISTRY</Link></li>
              <li className="navItems"><Link to='/page3'>VIEW REGISTRY</Link></li>
              </ul>
            </nav>
          </header> */}
          <header>
          <div class="navbar">
            <ul>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/page1">UPDATE REGISTRY</Link></li>
              <li><Link to="/page2">DELETE REGISTRY</Link></li>
              <li><Link to="/page3">VIEW REGISTRY</Link></li>
            </ul>
          </div>
          </header>
         
      <div className="container1">
        <form onSubmit={this.handleSubmit}>

            <h4>Service Registeration</h4>
   
              <div className="row">
              <div className="input-group input-group-icon">
              <input type="text" placeholder="SiNo" value={this.state.sino} onChange={this.handlesinochange}/>
              
            </div>
            <div className="input-group input-group-icon">
              <input type="text" placeholder="Vehicle Type" value={this.state.vehicletype} onChange={this.handlevehicletypeChange}/>
              
            </div>
          <div className="row">
            <div className="input-group input-group-icon">
              <input type="text" placeholder="Registeration Number" value={this.state.registerationno} onChange={this.handleregisterationnoChange}/>
              
            </div>
            <div className="row">
              <div className="input-group input-group-icon">
                <input type="text" placeholder="Model" value={this.state.model} onChange={this.handlemodelChange}/>
                
              </div>
            {/* <div className="input-group input-group-icon">
              <input type="text" placeholder="Full Name" value={this.state.fname} onChange={this.handlefnameChange}/>
              
            </div> */}
            <div className="input-group input-group-icon">
              <input type="text" placeholder="Status" value={this.state.status} onChange={this.handlestatusChange}/>
             
            </div>
            <div className="input-group input-group-icon">
              <input type="text" placeholder="Date of Service(YYYY-MM-DD)" value={this.state.servicedate} onChange={this.handleservicedateChange}/>
             
            </div>
            <div className="input-group input-group-icon">
              <input type="text" placeholder="Date of Delivery (YYYY-MM-DD)" value={this.state.delivery} onChange={this.handledeliverydateChange}/>
             
            </div>
           
          </div>
          
            </div>
           
          </div>
          <input type="submit"/>
        </form>
      </div>
      <Link to= '/page3'>click</Link>
      <Link to='/page1'>click2</Link>
      <Link to="/page2">click3</Link>
        </div>
    );
}
}
export default AmFrontEnd;