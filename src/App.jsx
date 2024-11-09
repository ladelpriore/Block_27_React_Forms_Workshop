/*Step 1, Initialize Project:
  Navigate to App.jsx and remove boilerplace code and the unused import statements, leaving a blank application
  Import both of these components into your App.jsx file, and mount them inside your JSX. 

Step 3, Token and Authentication:
  Import useState from react using a hook, and create token and setToken variables with useState.
  Pass these values to each component by passing the setToken function to the SignUpForm component and by passing the token value to the Authenticate component. 
*/

import { useState } from "react";
import Authenticate from "./components/Authenticate";
import SignUpForm from "./components/SignUpForm";

export default function App() {
  const [token, setToken] = useState(null);
  return (
    <>
    <SignUpForm token={token} setToken={setToken} />
    <Authenticate token={token} setToken={setToken} />
    </>
  );
}
