import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className='p-2 mb-4 bg-primary bg-gradient text-light'>
      <nav className='navbar navbar-expand-lg'>
        {/* Site branding */}
        <NavLink to='/' className='navbar-brand link-body-emphasis text-decoration-none me-4'>
          <span className='fs-4 text-white'>SALES APP</span>
        </NavLink>

        {/* Hambuger button */}
        <button
          className='navbar-toggler border-light-subtle shadow-none  '
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarContent'
          aria-controls='navbarContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon navbar-dark' style={{ color: "red" }}></span>
        </button>

        {/* Nav items */}
        <div className='collapse navbar-collapse' id='navbarContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              {/* Using NavLink from react router for nav items so we have an IsActive property to set classnames based on current route */}
              <NavLink
                to='/addsales'
                className={({ isActive }) => (isActive ? "cus-active " : "") + "nav-link text-white-50"}
                aria-current='page'
              >
                ADD SALES
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/topsales'
                className={({ isActive }) => (isActive ? "cus-active " : "") + "nav-link text-white-50"}
              >
                TOP 5 SALES
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/totalrevenue'
                className={({ isActive }) => (isActive ? "cus-active " : "") + "nav-link text-white-50"}
              >
                TODAY&apos;S TOTAL REVENUE
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/login'
                className={({ isActive }) => (isActive ? "cus-active " : "") + "nav-link text-white-50"}
              >
                LOGIN
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/register'
                className={({ isActive }) => (isActive ? "cus-active " : "") + "nav-link text-white-50"}
              >
                REGISTER
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/logout'
                className={({ isActive }) => (isActive ? "cus-active " : "") + "nav-link text-white-50"}
              >
                LOGOUT
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
