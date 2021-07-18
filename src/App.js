import { Switch, Route, Redirect} from 'react-router-dom';

import Layout from './components/layout/Layout';

// === Import Pages:
import AllQuotes from './pages/AllQuotes/AllQuotes';
import QuoteDetail from './pages/QuoteDetail/QuoteDetail';
import NewQuote from './pages/NewQuote/NewQuote';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes' />
        </Route>

        <Route path='/quotes' exact>
          <AllQuotes />
        </Route>

        <Route path='/quotes/:quoteId'>
          <QuoteDetail />
        </Route>

        <Route path='/new-quote'>
          <NewQuote />
        </Route>

        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;


/*

=== Constructing A Dynamic Path ===

* You can also pass in dynamic paths, not just hardcoded paths.

You can do this two ways: 

Examples:

1) path='/quotes/:quotedId/comments
2) path={`/quotes/${params.quoteId}/comments`}

=== Fallback Page (404) page ===

You also want to create a not found page, for when the search does not match any known path.

We can add a new (not found) page component in our pages folder.

=== How to implement page route? ===

We typically want to add the not-found route at the end of our app routes.
The goal is to be a fallback, so after the rest have been checked.

Path=(*): The star signifies 'all', and we can add that into our path definition.
Then render our NotFound component inside the Route.

*/