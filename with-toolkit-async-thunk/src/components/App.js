import axios from 'axios';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';

import SearchBar from './SearchBar';
import QuoteList from './QuoteList';
import Loading from './Loading/Loading';
import { fetchQuotes } from '../features/quoteSlice';

const App = () => {
  const dispatch = useDispatch();
  const [term, setTerm] = useState('happiness');
  const { data, status } = useSelector((store) => store.quotes);

  useEffect(() => {
    dispatch(fetchQuotes(term));
  }, [dispatch, term]);

  const renderContent = () => {
    if (status === 'loading') {
      return <Loading />;
    }

    if (status === 'error') {
      return <div className="alert alert-danger">{data}</div>;
    }

    return <QuoteList quotes={data} />;
  };

  return (
    <div className="container mt-3">
      <SearchBar onSubmit={(term) => setTerm(term)} initialValue="happiness" />
      {renderContent()}
    </div>
  );
};

export default App;
