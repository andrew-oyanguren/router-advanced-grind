import { Fragment } from 'react';
import { Route, useParams, Link, useRouteMatch } from 'react-router-dom';

import Comments from '../../components/comments/Comments';
import HighlightedQuote from '../../components/quotes/HighlightedQuote';

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

const QuoteDetail = () => {

  const match = useRouteMatch();
  const params = useParams();

  console.log(match);

  // Our current quote
  const currentQuote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  // Quote is not a part of array
  if (!currentQuote) {
    return (
      <p>No Quote Found!</p>
    );
  }

  return (
    <Fragment>
      <HighlightedQuote author={currentQuote.author} text={currentQuote.text}/>
      <Route path={match.path} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`${match.url}/comments`}>Comments</Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;



/*

* NOTES:

Here we are getting our current quote using the find() array method to compare the current params.quoteId, 
so the current dynamic URL to to the id's of the object, because we set our quoteId to equal a unique quoteId
from the current quote we fired our details event on.

* Now we can output the correct data, of the current quote, into our HighlightedQuote component,
which renders our details.

=== No Quote Found In Array ===

We want to create a check if no quote id found in an array, and return some user notification.

*/