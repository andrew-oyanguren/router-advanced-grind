import { Fragment } from 'react';

import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {

  const history = useHistory();
  const location = useLocation();

  // transform location.search to JavaScript Object:
  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get('sort') === 'asc';

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  const changeSortingHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${(isSortingAscending ? 'desc' : 'asc')}`
    });
    // history.push(`${location.pathname}?sort=${(isSortingAscending ? 'dec' : 'asc')}`);
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? 'Descending' : 'Ascending'}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;



/*

=== Adding sorting and Query Parameters ===

1) First we want to add sorting functionality and options to the page.
2) Then we want to save these sorting states in the url.

1) We want to add asorting button, and add an onclick event that points to a sorting handler function.


=== Sorting Function ===

The goal here is to change how we sort our quotes.

1) One thing we want to do is update the query parameters in the URL in conjunction with the sorting states in our function.

* To do this we need to update the URL, and we can do this with the useHistory hook.

=== useHistory Hook ===

We are using the useHistory hook because it allows us to change the url path.

We can call the push() method on the history object to change the url.

2) We want to read that query parameter and act accordingly.

We can read query parameters with the useLocation hook.

=== useLocation ===

Where useHistory allows us to change the current page, the 'useLocation' gives us acces to an object
that gives us information about the current URL.

* So we can call useLocation() and then store the location object inside a location const.

Location Object:

gives us two key bits of information:

1) pathname: Gives us the url.
2) search: Gives us the query parameter.

* Now that we have the location object, we want to transform the search key into a Javascript object
that's a bit easier to work with.

=== URLSearchParams() ===

The url serach params is a built in (to the bowser) constructor function, that takes in the locaton object 
and search key, then returns an object that allows us to access that search key information by key/value pairing.

For Example: '/?sort=asc'

URLSearchParams will return an object where the key is 'sort', and the value is 'asc'!

* NOTE: Remember this is a constructor object, so call the key word 'new' before URLSearchParams()
to construct a new object.

=== create a helper constant ===

We can create a helper const to check the state of our queryParam. 

* NOTE: You can call the .get() to exstract the queryparam key, in this case the 'sort' key
is what we are interested in.

*/