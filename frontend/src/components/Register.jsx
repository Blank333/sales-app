function Register() {
  return (
    <>
      <h2 className='text-center '>RESGISTER FORM</h2>
      <form className='w-100 m-auto border rounded p-4 d-flex flex-column gap-3'>
        <div>
          <label htmlFor='fName' className='form-label text-secondary'>
            First Name
          </label>
          <input type='text' className='form-control shadow-none' id='fName' />
        </div>
        <div>
          <label htmlFor='lName' className='form-label text-secondary'>
            Last Name
          </label>
          <input type='text' className='form-control shadow-none' id='lName' />
        </div>
        <div>
          <label htmlFor='email' className='form-label text-secondary'>
            Email
          </label>
          <input type='email' className='form-control shadow-none' id='email' />
        </div>
        <div>
          <label htmlFor='password' className='form-label text-secondary'>
            Password
          </label>
          <input type='password' className='form-control shadow-none' id='password' />
        </div>

        <button type='submit' className='btn btn-primary'>
          Register
        </button>
      </form>
    </>
  );
}

export default Register;
