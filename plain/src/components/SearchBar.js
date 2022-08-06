import {useState} from 'react';

const SearchBar = (props) => {
  const [term, setTerm] = useState(props.initialValue);

  const onFormSubmit = (e) => {
      e.preventDefault();
      props.search(term);
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