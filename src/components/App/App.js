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
      <h1>ravenous</h1>
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businesses={business.businesses}/>
    </div>
  )
}

export default App;
