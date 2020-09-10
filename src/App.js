import React, { useEffect, useState, createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import PostList from './components/post-list/PostList';
import PostDetails from './components/post-details/PostDetails';
import NotFound from './components/not-found/NotFound';

function App() {
  
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/posts">
            <PostList></PostList>
          </Route>
          <Route exact path="/">
            <PostList></PostList>
          </Route>
          <Route path="/post/:postId">
            <PostDetails></PostDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
