import QuoteList from '../../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  {
    id: 'q1',
    author: 'Andrew',
    text: 'Learning React is fun!'
  },
  {
    id: 'q2',
    author: 'Rianna',
    text: 'Mastering React is better'
  }
];

const AllQuotes = () => {
  return (
    <QuoteList quotes={DUMMY_QUOTES} />
  );
};

export default AllQuotes;