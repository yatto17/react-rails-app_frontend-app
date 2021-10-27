import { FC, memo } from "react";
import { Switch, Route } from "react-router-dom";

import { SignIn } from "components/pages/SignIn";
import { homeRoutes } from "./HomeRoutes";
import { Page404 } from "components/pages/Page404";
import { HeaderLayout } from "components/templates/HeaderLayout";

export const Router: FC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <SignIn />
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
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
});