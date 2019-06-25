import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import emailRegex from './emailRegex'
import goldRecord from './goldRecord.png'

const checkEmail = (email)=>
  (emailRegex).test(email);

class App extends React.Component {

  state = {
    rapName: '',
    email: '',
    isEmailValid: false,
    albumSales: 1000,
  }

  setRapName = (event)=> {
    this.setState({
      rapName: event.target.value,
    })
  }

  setEmail = (event)=> {
    this.setState({
      email: event.target.value,
      isEmailValid: checkEmail(event.target.value),
    })
  }

  setAlbumSales = (event)=> {
    this.setState({
      albumSales: Math.max(0, (1*event.target.value)),
    })
  }

  done = (event)=> {
    console.log('hello');
  }


  render() {
    return (
      <div className='App'>
        <div className="form">
          <div className='card swanky-input-container'>
            <label>
              <input value={this.state.rapName} onChange={this.setRapName}/>
              <span className='title'>Rap Name</span>
            </label>
          </div>
          <div className='card swanky-input-container'>
            <label>
              <input value={this.state.email} onChange={this.setEmail}/>
              <span>Email</span>
              {
                (this.state.isEmailValid || this.state.email.length < 1)? (null) : (
                  <span className='email-invalid'> Your email invalid</span>
                )
              }
            </label>
          </div>
          <div className='card swanky-input-container'>
            <label>
              <input type='number' step={10000} value={this.state.albumSales} onChange={this.setAlbumSales}/>
              <span className='title'>Album sales</span>
              <div className='goldRecords'>
                {
                  [1,2,3,4]
                  .filter((n)=> n*500000 < this.state.albumSales)
                  .map( n =>(
                    <div className='goldRecord' key={n}>
                      <img src={goldRecord} alt='gold record'/>
                    </div>
                  ))
                }
              </div>
            </label>
          </div>
          <div className='done-container'>
            <button className='done-button' onClick={this.done}>Done</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
