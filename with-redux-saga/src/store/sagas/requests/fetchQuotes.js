import axios from 'axios';

export const fetchQuotes = (term) => {
  return axios.get(
    `https://api.quotable.io/quotes?tags=${term}`
  );
}

