function Login() {
  return (
    <>
      <h2 className='text-center '>LOGIN FORM</h2>
      <form className='w-100 m-auto border rounded p-4 d-flex flex-column gap-3'>
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
          Login
        </button>
      </form>
    </>
  );
}

export default Login;
