import { LogLevel } from "@azure/msal-browser";

export const msalConfig = {
    auth: {
        clientId: "ee3ea299-b169-41c1-a382-776cf124797f", // This is the ONLY mandatory field that you need to supply.
        authority: "https://login.microsoftonline.com/665bf27d-3f57-48d3-8c23-c2eee348cf10", // Defaults to "https://login.microsoftonline.com/common"
        redirectUri: "/signin-oidc", // You must register this URI on Azure Portal/App Registration. Defaults to window.location.origin
        postLogoutRedirectUri: "/", // Indicates the page to navigate after logout.
        navigateToLoginRequestUrl: false, // If "true", will navigate back to the original request location before processing the auth code response.
    },
    cache: {
        cacheLocation: "sessionStorage", // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
        loggerOptions: {
            loggerCallback: (level: LogLevel, message: string, containsPii: boolean) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                }
            }
        }
    }
};

export const loginRequest = {
    scopes: []
};

export const protectedResources = {
    graphMe: {
        endpoint: "https://graph.microsoft.com/v1.0/me",
        scopes: ["User.Read"],
    }
}
