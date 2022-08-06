import {useState} from 'react';
import { useDispatch } from 'react-redux';

import { fetchQuotes } from '../store';

const SearchBar = (props) => {
  const dispatch = useDispatch(); 
  const [term, setTerm] = useState(props.initialValue);

  const onFormSubmit = (e) => {
      e.preventDefault();
      dispatch(fetchQuotes(term));
  }

  return (
    <form onSubmit={onFormSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search for quotes"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button
          className="btn btn-outline-primary"
          type="submit"
          id="button-addon2"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;