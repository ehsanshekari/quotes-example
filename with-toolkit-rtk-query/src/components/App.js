import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import SearchBar from './SearchBar';
import QuoteList from './QuoteList';
import Loading from './Loading/Loading';
import { useGetQuotesQuery } from '../services/quoteApi';

const App = () => {
  const [term, setTerm] = useState('happiness');
  const { data, isError, error, isLoading } = useGetQuotesQuery(term);

  const renderContent = () => {
    if (isLoading) {
      return <Loading />;
    }

    if (isError) {
      return <div className="alert alert-danger">{error.error}</div>;
    }

    return <QuoteList quotes={data.results} />;
  };

  return (
    <div className="container mt-3">
      <SearchBar onSubmit={(term) => setTerm(term)} initialValue="happiness" />
      {renderContent()}
    </div>
  );
};

export default App;
