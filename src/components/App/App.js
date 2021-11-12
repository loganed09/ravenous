import logo from '../../logo.svg';
import React, {useState} from 'react';
import './App.css';
import Business from '../Business/Business';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar'
import {Yelp} from '../../util/Yelp';

// const business = {
//   imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
//   name: 'MarginOtto Pizzeria',
//   address: '1010 Paddington Way',
//   city: 'Flavortown',
//   state: 'NY',
//   zipCode: '10101',
//   category: 'Italian',
//   rating: 4.5,
//   reviewCount: 90
// }

// const businesses = [
//   business,
//   business,
//   business,
//   business,
//   business,
//   business
// ];

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
