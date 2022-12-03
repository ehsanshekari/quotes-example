import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useQuery } from 'react-query';
import axios from 'axios';

import SearchBar from './SearchBar';
import QuoteList from './QuoteList';
import Loading from './Loading/Loading';

const App = () => {
  const [term, setTerm] = useState('happiness');

  const { isLoading, isError, error, data } = useQuery(
    ['quotes', term],
    async () => {
      const response = await axios.get(`https://api.quotable.io/quotes?tags=${term}`);
      return response.data.results;        
    }
  );

  const renderContent = () => {
    if (isLoading) {
      return <Loading />;
    }

    if (isError) {
      return <div className="alert alert-danger">{error.message}</div>;
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
