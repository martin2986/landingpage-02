import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Blog from "./pages/Blog";
import Feature from "./pages/Feature";
import HomePage from "./pages/HomePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "feature",
        element: <Feature />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
