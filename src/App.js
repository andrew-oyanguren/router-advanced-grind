import { Switch, Route, Redirect} from 'react-router-dom';

import Layout from './components/layout/Layout';

// === Import Pages:
import AllQuotes from './pages/AllQuotes/AllQuotes';
import QuoteDetail from './pages/QuoteDetail/QuoteDetail';
import NewQuote from './pages/NewQuote/NewQuote';

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

*/