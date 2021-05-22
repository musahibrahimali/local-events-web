import React from 'react';
import './SearchBar.css';

function SearchBar() {

    // const [searchTerm, setSearchTerm] = useState('');

    const handleOnChange = () => {

    }

    return (
        <div className="search-box">
            <div className="search-container">
                <label htmlFor="search-bar"/>
                <input
                    type="text"
                    className="search-bar"
                    onChange={handleOnChange}
                    placeholder="search event"
                />
            </div>
        </div>
    )
}

export default SearchBar;
