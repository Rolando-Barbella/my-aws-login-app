import React, { useState, useEffect }  from 'react';
import { Redirect, Route } from "react-router-dom";
import { Auth } from 'aws-amplify';
import Homepage from './Home'

const PrivateRoute = ({ children, ...rest }) => {
  const [signInUser, setSignInUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let getUser = async() => {
      try {
        let user = await Auth.currentAuthenticatedUser();
        await setSignInUser(user);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error)        
      }
    }
    getUser();
  },[]);

  if(isLoading) {
    return <p>...Loading</p>
  }
  return (
    <Route {...rest} render={({ location }) => {
      return signInUser? <Homepage/>
        : <Redirect to={{
            pathname: '/log-in',
            state: { from: location }
          }} />
    }} />
  )
}

export default PrivateRoute;