import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div
      id='error-page'
      className='d-flex justify-content-center flex-column container-fluid w-100 w-md-75 p-4 gap-4 text-center'
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          {error.status} {error.statusText || error.message}
        </i>
      </p>
    </div>
  );
}
