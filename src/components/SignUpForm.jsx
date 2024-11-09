
/*Step 2, Sign Up Component:
  Create a components folder and a SignUpForm.jsx file 
  In your SignUpForm.jsx file, create a SignUpForm component, and ensure it is the default export. For now, you can have it render a simple h2 with a message saying, "Sign Up".
  At the top of your file, import the useState hook from React and create three state variables for our form inputs: username, password, and error. 
  Underneath the h2 we previously wrote, create a form element with two inputs and a button with the text "submit" nested inside.
  Assign each value property of your input to its corresponding state value. Similarly, pass each onChange property to a callback function.  These callback functions should be defined to take an event, and pass the event.tagert.value to the corresponding useState setter.
  In your component body, and before your return statment, define an async function called handleSubmit. Define this function to take an event and call preventDefault() on it, to prevent our page refresh. For now, also console.log a short message.
  Pass this handleSubmit to the opening form tag's onSubmit property.
  The next step is to take our username and password and pass it along to our API. To do this, leverage the fetch() API.
  Write a try/catch block in our handleSubmit function. After you preventDefault delete your console.log and replace it with a try/catch. In your catch block, pass the error.message to your setError function. This way, we can store a server error in the application state and display it.
  After your h2, open up some { } so you can 'escape' into Javascript.
  To write out a fetch request, move back to the handleSubmit function, and call fetch within the try. 
  Since you are sending information to our API, make sure to send a POST request passing along the username and password state values in the request body.
  Store the API response in a variable. Remember to then use the method to parse the response into JS to use in your code. 
  Tested and confirmed that the React form shows "Authenticate! Sign up, Username, Password, submit."
  Take the username and password and pass it to the API using fetch(). Write a try/catch block in the handleSubmit function in case this fails.
  Pass the error.message to the setError function. This is to store a server errorin the application and display it. 
  Write the fetch request under the handleSubmit function and within the try statement. Use the provided API url. 
  To send info to the API, use a POST request. Pass alongthe username and password state values. 
*/

/*Step 3, Token and Authentication:
Pass the setToken function to the SignUpForm component. Destructure setToken from props.
Use the function in the handleSubmit function, and pass the token property of the API response to setToken. 
Now when we signup, the token sent back from the API is stored in the application state. 
*/

import { useState } from "react";

export default function SignUpForm( { setToken }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();
    
      try {
          const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
          });
          const result = await response.json();
          setToken(result.token);
        } catch (error) {
          setError(error.message);
        }
      }



    
      return (
        <>
          <h2>Sign Up</h2>
          {error && <p>{error}</p>}
          <form onSubmit={handleSubmit}>
            <label>
              Username:
              <input value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
              Password:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button>Submit</button>
          </form>
        </>
      );
    }