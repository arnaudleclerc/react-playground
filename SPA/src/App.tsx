import './App.css';
import { Home } from './components/Home';

import { MsalProvider, AuthenticatedTemplate, UnauthenticatedTemplate, useMsalAuthentication } from "@azure/msal-react";

import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from './auth/authConfig';
import { NavigationBar } from './components/NavigationBar';
import RequestInterceptor from './auth/RequestInterceptor';
import { LoadingIndicator } from './common/spinner';

export const msalInstance = new PublicClientApplication(msalConfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MsalProvider instance={msalInstance}>
          <AuthenticatedTemplate>
            <NavigationBar />
            <RequestInterceptor>
              <Home />
            </RequestInterceptor>
            <LoadingIndicator />
          </AuthenticatedTemplate>
          <UnauthenticatedTemplate>
            <NavigationBar />
            <p>You are not signed in! Please sign in.</p>
          </UnauthenticatedTemplate>
        </MsalProvider>
      </header>
    </div>
  );
}

export default App;
