import React from 'react'
import GoogleLogin from 'react-google-login';


const LogInPage = () => {
  const responseGoogle = (response) => {
    console.log(response);
  }
  return (
    <div>
      <GoogleLogin
        clientId="516217509351-d251nr866eqnnvq7dbjbsph91gq5s9ci.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}

export default LogInPage
