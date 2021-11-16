import logo from '../../logo.svg';
import React, {useState} from 'react';
import './App.css';
import Business from '../Business/Business';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar'
import {Yelp} from '../../util/Yelp';

function App() {
  const [business, setBusiness] = useState({
    businesses: []
  })

  const searchYelp = (term, location, sortBy) => {
    console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
    Yelp.search(term, location, sortBy).then((businesses)=> {
      setBusiness({ businesses: businesses})
    } );
  }

  return (
    <div class="App">
      <div className="header">
        <h1>ravenous</h1>
        <h6>Please visit <a href="https://cors-anywhere.herokuapp.com/corsdemo">this</a> and request temporary access for this demo to work properly.</h6>
      </div>
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businesses={business.businesses}/>
    </div>
  )
}

export default App;
