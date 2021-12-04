import s from './SearchForm.module.scss'
import { Component } from 'react'
import PropTypes from 'prop-types';

class SearchForm extends Component{

    state = {
        query: '',
    };

    handleInput = e => {
        
        const { name, value } = e.currentTarget

        this.setState({
            [name]:value,
        })
    }

    handleSumbit = e => {
        e.preventDefault();

        const propsQuery = this.props.onSearch;
        const stateQuery = this.state.query;
        if (stateQuery.trim() === '') {
            return
        }
        if (!stateQuery)
            return
        
        propsQuery(stateQuery)

        this.resetForm()
    }

    resetForm = () =>
        this.setState({
            query:'',
        })


    render(){
        return(
            <>
            <form className={s.SearchForm} onSubmit={this.handleSumbit}>
                <button type="submit" className={s.SearchFormButton}>
                    <span className={s.SearchFormButtonLabel}>Search</span>
                </button>
                <input
                    className={s.SearchFormInput}
                    type="text"
                    name="query"
                    value={this.state.query}
                    onChange={this.handleInput}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"/>
            </form>
          </>      
        )
    }
};

SearchForm.propTypes = {
    onSearch: PropTypes.func.isRequired
}

export default SearchForm 