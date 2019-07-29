# inspirations

![https://media.giphy.com/media/tTA6WVVa4Zzri/giphy.gif](https://media.giphy.com/media/tTA6WVVa4Zzri/giphy.gif)

Create an app where users can anonymously post their inspirational quotes.

Your app will have a single `home.jsx`. This will be rendered from the root route. `/`

Users will enter in their quote in an input, and it will be put in a POST request to the server, using AJAX.

The quotes will be stored in a database table called `quotes`. The quotes table will have only 2 columns. `id SERIAL PRIMARY KEY` and `quote TEXT`.

When the POST request to the server is successful, write some javascript that will manipulate the DOM and put the new quote into a list of quotes.

The basic version of this can simply be a `ul`:

```html
<ul>
  <li>You're going to kill it today!</li>
  <li>It's always darkest before the dawn</li>
  <li>Every cloud has a silver lining</li>
</ul>
```

### Hints:
This first basic version of the app doesn't deal with what happens when the user refreshes the page. For what we have now, the page will not show any of the quotes already in the DB. See the further below.

Begin with writing the browser side javascript that sends the AJAX request before moving on to *any* of the database functionality (even simply installing the pg library) - this is the same order as we have been following for the server based apps- create the request before creating the thing that deals with the request.

#### further
This first version simply manipulates the DOM when a quote has successfully been added to the DB. If a new user loads the page they will see a blank page.

Create the functionality that any user will see the complete list of quotes when the page loads for them the first time.

Make an AJAX request for the current list of all quotes and render that in the DOM.

#### further
Add user login. Users can create their own quotes. Show the user for each quote in the list.

When adding user login, do this with *all* separate jsx files. Do not code user login functionality with AJAX. This is because cookies are not set with AJAX responses.

#### further
Add the ability to like/favorite a quote.
