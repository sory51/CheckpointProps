import React, { Component } from 'react';
import Profil from './profile/Profil';
import './App.css';
import ImP from './aurealat.jpg';

class App extends Component {
  render() {
    return (
      <div className='App'>
      <Profil fullName='Aurélie Bonnin' profession='Assistante social indépendante'>
        <img src={ImP}/>
      </Profil>
    </div>
    );
  }
}

export default App;
