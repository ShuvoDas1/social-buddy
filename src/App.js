import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';


function App() {
  const [posts,setPosts]=useState([])
  useEffect(()=>{
    const url='https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then(res => res.json())
    .then(data => setPosts(data))
  },[])
  
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>

        </Switch>
      </Router>
    </div>
  )
}

export default App;
