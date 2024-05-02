import { useState } from "react";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [modal, setModal] = useState();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setModal("Processing...");
    // Check for all fields
    if (!data.email || !data.password) {
      setModal("Please fill all fields");
      return;
    }

    fetch("http://localhost:3000/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.error) {
          setModal(data.error);
        } else {
          setModal(data.message + " Redirecting...");
          setTimeout(() => {
            window.location.href = "/";
          }, 3000);
        }
      })
      .catch((err) => {
        console.error(`error: ${err}`);
      });

    clearForm();
  };

  const clearForm = () => {
    setData({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <h2 className='text-center '>LOGIN FORM</h2>
      <form className='w-100 m-auto border rounded p-4 d-flex flex-column gap-3'>
        <div>
          <label htmlFor='email' className='form-label text-secondary'>
            Email
          </label>
          <input
            type='email'
            className='form-control shadow-none'
            id='email'
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='password' className='form-label text-secondary'>
            Password
          </label>
          <input
            type='password'
            className='form-control shadow-none'
            id='password'
            value={data.password}
            onChange={handleChange}
          />
        </div>

        <button
          type='submit'
          className='btn btn-primary'
          onClick={handleSubmit}
          data-bs-toggle='modal'
          data-bs-target='#modal'
        >
          Login
        </button>
      </form>

      {/* Modal */}
      <div className='modal fade' tabIndex='-1' id='modal'>
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-body text-center'>
              <p>{modal}</p>
            </div>
            <div className='modal-footer d-flex justify-content-center'>
              <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
