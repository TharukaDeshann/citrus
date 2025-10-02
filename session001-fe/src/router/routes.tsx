import * as routes from "../constants/routes";

const routeItems = [
  {
    path: routes.DASHBOARD,
    component: "Dashboard",
    policy: "dashboard.index",
  },
  {
    path: routes.TOOL_DETAILS,
    component: "ToolDetails",
    policy: "tools.view",
  },
];

export default routeItems;
