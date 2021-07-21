import { Fragment, useEffect } from 'react';
import { Route, useParams, Link, useRouteMatch } from 'react-router-dom';

import Comments from '../../components/comments/Comments';
import HighlightedQuote from '../../components/quotes/HighlightedQuote';
import LoadingSpinner from '../../components/UI/LoadingSpinner';

// Request Imports
import useHttp from '../../hooks/use-http';
import { getSingleQuote } from '../../lib/api';

const QuoteDetail = () => {

  const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);

  const match = useRouteMatch();
  const params = useParams();

  const { quoteId } = params;

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className='centered'>{error}</p>
  }

  if (!loadedQuote.text){
    return <p className='centered'>No Quote Found!</p>
  }

  return (
    <Fragment>
      <HighlightedQuote author={loadedQuote.author} text={loadedQuote.text}/>
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