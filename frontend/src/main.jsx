import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddSales from "./components/AddSales.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import TopSales from "./components/TopSales.jsx";
import TotalRevenue from "./components/TotalRevenue.jsx";
import Header from "./components/Header.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Welcome from "./components/Welcome.jsx";

//Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <>
        <Header />
        <ErrorPage />
      </>
    ),
    children: [
      {
        path: "",
        element: <Welcome />,
      },
      {
        path: "/addsales",
        element: <AddSales />,
      },
      {
        path: "/topsales",
        element: <TopSales />,
      },
      {
        path: "/totalrevenue",
        element: <TotalRevenue />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
