import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from "./Components/Common/Navbar";
import Sidebar from "./Components/Common/Sidebar";
import Footer from "./Components/Common/Footer";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isShow:false
    }
  }
  render() {
    return (
      <div className="App">
              <Navbar event={()=>{
                this.setState({
                  isShow:!this.state.isShow
                })
              }}/>
              <Sidebar show={this.state.isShow} event={()=>{
                this.setState({
                  isShow:false
                })
              }}/>

              <section>
                {this.props.children}
              </section>
              <Footer/>
      </div>
    )
  }
}

export default App;
