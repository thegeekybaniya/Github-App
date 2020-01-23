import React from 'react';
import GitHubLogin from 'react-github-login';

const handleSocialLogin = (user) => {
  console.log(user)
}

const handleSocialLoginFailure = (err) => {
  console.error(err)
}
function App() {
  return (
    <div className="App">
      <GitHubLogin

          clientId='7721be539451c5deef96'
          onLoginSuccess={handleSocialLogin}
          onLoginFailure={handleSocialLoginFailure}      >
        Login with Github
      </GitHubLogin>
    </div>
  );
}

export default App;
