import { FC, memo } from "react";
import { Switch, Route } from "react-router-dom";

import { SignIn } from "components/pages/SignIn";
import { homeRoutes } from "./HomeRoutes";
import { Page404 } from "components/pages/Page404";
import { HeaderLayout } from "components/templates/HeaderLayout";
import { SignUp } from "components/pages/SignUp";
import { AuthUserProvider } from "providers/AuthUserProvider";

export const Router: FC = memo(() => {
  return (
    <Switch>
      <AuthUserProvider>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route path="/sign_up">
          <SignUp />
        </Route>
        <Route path="/home" render={({ match: { url } }) => (
          <Switch>
            {homeRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                <HeaderLayout>{route.children}</HeaderLayout>
              </Route>
            ))}
          </Switch>
        )} />
      </AuthUserProvider>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
});