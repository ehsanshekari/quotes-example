import axios from 'axios';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import SearchBar from './SearchBar';
import QuoteList from './QuoteList';
import Loading from './Loading/Loading';

const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const search = async (term) => {
    setLoading(true);
    try {
      const result = await axios.get(
        `https://api.quotable.io/quotes?tags=${term}`
      );
      setQuotes(result.data.results);
      setLoading(false);
      setError('');
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    search('happiness');
  }, []);

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
      <SearchBar search={search} initialValue="happiness"/>
      {renderContent()}
    </div>
  );
};

export default App;
