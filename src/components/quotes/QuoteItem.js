import { Link, useParams } from 'react-router-dom';

import classes from './QuoteItem.module.css';

const QuoteItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link className='btn' to={`/quotes/${props.id}`}>
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;


/*

* NOTES: 

=== Dynamic Path ===

Here, in the quote item, we want to view a quote detail page when we click our Link.
Because we want to create a path for every unique link we are clicking on we need to creact a dynamic path.

A good way of doing this, is to use our prop id that we are getting passed in for each quote object,
and that way each object has a unique path based on it's unique id.

*/