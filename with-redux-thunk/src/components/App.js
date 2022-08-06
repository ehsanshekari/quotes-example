import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';

import SearchBar from './SearchBar';
import QuoteList from './QuoteList';
import Loading from './Loading/Loading';
import { fetchQuotes } from '../store';

const App = () => {
  const dispatch = useDispatch();
  const {loading, error, data: quotes} = useSelector((store) => store.quotes);

  useEffect(() => {
    dispatch(fetchQuotes('happiness'));
  }, [dispatch]);

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    }

    if (error) {
      return <div className="alert alert-danger">{error}</div>;
    }

    return <QuoteList quotes={quotes} />;
  };

  return (
    <div className="container mt-3">
      <SearchBar initialValue="happiness"/>
      {renderContent()}
    </div>
  );
};

export default App;
