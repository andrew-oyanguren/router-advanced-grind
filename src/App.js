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



=== Programatic Navigation ===

When we have a form submission, and we want to navigate away after submission,
we cannot do that with a link of navlink because its a form submission button, 
so what we have to do is programatically navigate away after the form submits.

=== useHistory Hook ===

To perform this programatic navigation, react-router provides us with the useHistory Hook!

* useHistory: A hook that allows us to change the browser history.

=== Using useHistory ===

1) We call useHistory(), which returns a history object, and we can store that in a history const.
2) We can trigger history changing actions (methods) on this history object.

=== useHistory Methods ===

1) history.Push(): Allows us to navigate away by adding/pushing a new page on the stack of pages in the history.

* Allows user to go back, as we push onto a stack of existing page that is still available.

2)history.replace(): Also lets us navigate away, but replaces the current page.

* User cannot go back, as we replaced the existing page.


=== Preventing unwanted Router Transitions ===

One common and great functionailty to implement, into your forms, is a navigation prompt.

* Navigation Prompt: With this prompt, you want to check if the user has entered an input or not, 
and if they have return a prompt when the browser back or forwards button is clicked.
The point is to avoid accidental navigation, where the user loses all the data they ahve already entered,
by providing a warning prompt, so they have an opportunity to opt out of the navigation.

=== Implementing Navigation warning prompt ===

We want to accomplish two things:

1) Listen to when the user starts working with the form, when the form gains focus.

* We can do this by using the onFocus (prop) on the form element, and trigger a handler.

2) We want to show a warning prompt if the user tries to navigate away after the form has gained focus.

=== Propmt Component ===

React Router provides us with a prompt component.

Prompt Component: This is a component we can render, and the componnet watches if the user navigates away,
and if a certain condition is met, that we define, it will show a warning.

* <Prompt /> component wants two (props):

1) When (prop): This prop takes in a true of false (boolean) value,
and this decides if a prompt should or should not be shown when the user tries to navigate away.

* We can set this equal to the state value that should determine this value.

2)Message (prop): Takes in an arrow function that allows us to return a string, 
a message for the user.

* It takes a function because it allows us to pass in a 'location' object, 
that holds information about the page we are trying to go to. 
It would allow us to include the 'path' we are trying to go to.

*/