import { createBrowserRouter } from "react-router-dom";
import Teams from "./pages/Teams";
import TeamsIndex from "./pages/TeamsIndex";
import Team from "./pages/Team";


const router = createBrowserRouter([
  {
    path: "/teams",
    element: <Teams />,
    children: [
      {
        index: true, 
        element: <TeamsIndex />,
      },
      {
        path: ":teamId", 
        element: <Team />,
      },
    ],
  },
]);

export default router;
