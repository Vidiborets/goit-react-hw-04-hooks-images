import SearchForm from '../SearchForm'
import s from './Searchbar.module.scss'
import PropTypes from 'prop-types';

const SearchBar = ({ onSearch }) => (
    <header className={s.Searchbar}>
        <SearchForm onSearch={onSearch} />
    </header>
);

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired
}

export default SearchBar


