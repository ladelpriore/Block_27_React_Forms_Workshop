/*Step 2, Sign Up Component:
  In your Authenitcate.jsx file, create an Authenticate component, and ensure it is the default export. Have it render a simple h2 with a message saying, "Authenticate".

Step 3, Token and Authentication:
  Make changes similar to those of the SignUpForm component: Destructure token from props and add a button with onClick
  Access the token and pass it along to the /authenticate API endpoint
  Create an button which onClick sends a request to the API, and create a button element with text, "Authneticate Token". 
  The button will send a GET request to  the /authenticate endpoint of the API. 
  Send a network request by write an async function handleClick (before the return statement), and pass it to the onClick property of the button. 
  Start with a 'try/catch' since I'm making an asynchoronous network request. 
  Add an error state to the component. Create error and setError state variables, and pass the error.message property to the setError function. 
  IN the try block, Call the fetch API function and pass 2 arguments for the endpoint
  Create successMessage and setSuccessMessage variables, and pass the message property of the API result to setSuccessMessage
*/

export default function Authenticate({ token }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  async function handleClick() {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      setSuccessMessage(result.message);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
            <h2>Authenticate</h2>
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}
            <button onClick={handleClick}>Authenticate Token!</button>
          
    </div>
  );
}