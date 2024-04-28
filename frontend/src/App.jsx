import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className='d-flex justify-content-center flex-column container-fluid w-100 w-md-75 p-4 gap-4'>
        <Outlet />
      </main>
    </>
  );
}

export default App;
