import s from './SearchForm.module.scss'
import { useState } from 'react'
import PropTypes from 'prop-types';

const SearchForm = ({ onSearch }) => {
    const [query, setQuery] = useState('')

    const handleInput = (e) => {
        const { value } = e.currentTarget

        setQuery(value);
    };
    const handleSumbit = e => {
        e.preventDefault();

        if (!query.trim() ) {
            return
        }
        
        onSearch(query)

        resetForm()
    }
    const resetForm = () => 
        setQuery('')
    

   return(
            <>
            <form className={s.SearchForm} onSubmit={handleSumbit}>
                <button type="submit" className={s.SearchFormButton}>
                    <span className={s.SearchFormButtonLabel}>Search</span>
                </button>
                <input
                    className={s.SearchFormInput}
                    type="text"
                    name="query"
                    value={query}
                    onChange={handleInput}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"/>
            </form>
          </>      
        )
}

SearchForm.propTypes = {
    onSearch: PropTypes.func.isRequired
}

export default SearchForm;