import { useEffect, useState } from "react";

function Register() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [modal, setModal] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setModal("Processing...");
    // Check for all fields
    if (!data.firstName || !data.lastName || !data.email || !data.password) {
      setModal("Please fill all fields");
      return;
    }
    //Validate email
    if (!/\S+@\w+\.\w+(\.\w+)?/.test(data.email)) {
      setModal("Invalid email");
      return;
    }
    //Validate password
    if (data.password.length < 8) {
      setModal("Please use atleast 8 characters for password");
      return;
    }
    fetch("http://localhost:3000/api/users/register", {
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
          setModal(data.message + " Redirecting to login page...");
          setTimeout(() => {
            window.location.href = "/login";
          }, 3000);
        }
      })
      .catch((err) => {
        setModal("Something went wrong");
        console.error(`Error registering ${err}`);
      });
    clearForm();
  };
  useEffect(() => {}, []);

  const clearForm = () => {
    setData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <h2 className='text-center '>RESGISTER FORM</h2>
      <form className='w-100 m-auto border rounded p-4 d-flex flex-column gap-3'>
        <div>
          <label htmlFor='fName' className='form-label text-secondary'>
            First Name
          </label>
          <input
            type='text'
            className='form-control shadow-none'
            id='firstName'
            value={data.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='lName' className='form-label text-secondary'>
            Last Name
          </label>
          <input
            type='text'
            className='form-control shadow-none'
            id='lastName'
            value={data.lastName}
            onChange={handleChange}
          />
        </div>
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
          Register
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

export default Register;
