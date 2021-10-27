import { Home } from "components/pages/Home";
import { DetailView } from "components/pages/DetailView";
import { Setting } from "components/pages/Setting";
import { Page404 } from "components/pages/Page404";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/detail_view",
    exact: false,
    children: <DetailView />
  },
  {
    path: "/setting",
    exact: false,
    children: <Setting />
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />
  }
]