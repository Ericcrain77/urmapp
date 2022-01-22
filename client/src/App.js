import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import LoginSignUpPage from './pages/LoginPage';
import Homepage from './pages/Homepage';
import './App.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          {/* <Navbar /> */}
          <Switch>
            <Route exact path='/' component={LoginSignUpPage} />
            <Route exact path='/saved' component={Homepage} />
            <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
          </Switch>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;