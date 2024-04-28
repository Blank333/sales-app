import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddSales from "./components/AddSales.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import TopSales from "./components/TopSales.jsx";

//Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/addsales",
        element: <AddSales />,
      },
      {
        path: "/topsales",
        element: <TopSales />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
