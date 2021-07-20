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

=== Prompt Component ===

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



=== Query Parameters ===

Are special perameters that you find at the end of a url, and that basically pass extra data to the url.

Syntax: ? key == value

Starts with a question mark, and is followed by a key/value pairing.

* Regular Dynamic Route vs Query Parameter Route:

The diefference between the two is that Regular dynamic routes are 'mandatory' routes, 
meaning that the nested (rendered) component is only loaded if the dynamic route is matched,

While Query Parameters are optional. They do not change the 'route matching',
but whatever route is matched it then has access to that parameter data, to
for exmaple change the behaivor of the page loaded.

Query Parameter Use-Case Example:

A page that loads a list, the query  allows you to implement sorting into your url. 
So that when your list is in ascending vs descending order, your url reflects those states.

* This way a user can have access to the different states of your page by simply loading that url.


=== Writing more flexible Routing Paths ===

Currently we are manually building our dynamic strings in a simple way,
and it works, but it has one downside to this approach.

* Downside: If we ever change our main route to another path,
then we have to go through our code and change it everywhere that we added our manually-built
paths, but (even more complicatedingly) we also have to change our nested routes that rely on the parent route.

* FIX:

We can leverage some of the hooks that react-router provides us with, that allows us to indentify the paths being used,
and its these properties that we can use to build our dynamic paths.

So our nested paths are built on top of path references, provided to use from react-router hooks.



=== useRouteMatch Hook ===

Hook is similar to the useLocation object, but it actually provides us with more information about the currently loaded app
then the useLocation object.

* useRouteMatch Object: Returns,

1) params object, which consists of the dynamic path key and it's value.
2) path: The actual path defined by the developer, including the dynamic placeholder.

* Path is great for creating a dynamic path that is based on a dynamic placeholder path.

3) URL: The URL path

* URL is great for url that is already apart of that page, just adding onto it.

== Using useRouteMatch ==

we can call useRouterMatch and store the returned object into a match constant.

This object can be used to define our routes dynamically, by accessing it's properties as a reference!



=== Alternative pathname construction ===

React router allows you to construct your path destination in a seperate way,
because when you have big projects paths can become long and convoluted.

* Passing an object value:

Instead of a string path, you can also pass an object to descibe the path destination.

== Path Object ==

The path object wants:

1) pathname: the path you want to navigate to.
2) search: allows you to add query parameters.

* You still define your query params with a string, but now it's split with the pathname
into two different properties, making it easier to read and follow.

*/