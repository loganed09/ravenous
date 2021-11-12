import React, {useState} from "react";
import './SearchBar.css';

export default function SearchBar(props) {
    const [search, setSearch] = useState({
        term: '',
        location: '',
        sortBy: 'best_match'
    });

    const sortByOptions = {
        'Best Match': 'best_match',
        'Highest Rated': 'rating',
        'Most Reviewed': 'review_count'
    }

    const getSortByClass = (sortByOption) => {
        if(search.sortBy === sortByOption) {
            return 'active';
        }else {
            return ' ';
        }
    }

    const handleSortByChange = (sortByOption) => {
        setSearch({ sortBy: sortByOption})
    }

    const handleTermChange = e => {
        setSearch(prev => ({
            ...prev,
            term: e.target.value
        }))
    }

    const handleLocationChange = e => {
        setSearch(prev => ({
            ...prev,
            location: e.target.value
        }))
    }

    const handleSearch = e => {
        props.searchYelp(search.term, search.location, search.sortBy);
        e.preventDefault();
    }


    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue} className={getSortByClass(sortByOptionValue)} onClick={()=> handleSortByChange(sortByOptionValue)}>{sortByOption}</li>
        });
    }
    return(
    <div className="SearchBar">
        <div className="SearchBar-sort-options">
        <ul>
            {renderSortByOptions()}
        </ul>
        </div>
        <div className="SearchBar-fields">
            <input onChange={handleTermChange} placeholder="Search Businesses" />
            <input onChange={handleLocationChange} placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
            <a onClick={handleSearch}>Let's Go</a>
        </div>
    </div>
    )
}

