import { React } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './SearchBar.css';

function SearchBar() {

    // const [searchTerm, setSearchTerm] = useState('');

    const handleOnChange = () => {

    }

    return (
        <div className="search-box">
            <div className="search-container">
                <div className="search-icon">
                    <SearchIcon className="search-icon" />
                </div>
                <label htmlFor="search-bar"></label>
                <input type="text" className="search-bar" onChange={handleOnChange} placeholder="search event" />
            </div>
            <div className="search-banner">
                <h2 className="search-title">
                    Explore Amazing Events
                </h2>
            </div>
        </div>
    )
}

export default SearchBar;
