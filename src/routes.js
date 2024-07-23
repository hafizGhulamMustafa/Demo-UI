import FullLayout from "./layouts/LandingPageLayout";
import Error from "./pages/Error";
import LandingPage from "./pages/LandingPage";

const routes = () => {
  return [
    {
      element: <FullLayout />,
      children: [{ path: "/", element: <LandingPage /> }],
    },
    { path: "*", element: <Error /> },
  ];
};

export default routes;
