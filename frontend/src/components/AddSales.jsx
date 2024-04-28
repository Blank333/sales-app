function AddSales() {
  return (
    <>
      <h2 className='text-center '>ADD SALE ENTRY</h2>
      <form className='w-100 m-auto border rounded p-4 d-flex flex-column gap-3'>
        <div>
          <label htmlFor='name' className='form-label text-secondary'>
            Product Name
          </label>
          <input type='text' className='form-control shadow-none' id='name' />
        </div>
        <div>
          <label htmlFor='quantity' className='form-label text-secondary'>
            Quantity
          </label>
          <input type='text' className='form-control shadow-none' id='quantity' />
        </div>
        <div>
          <label htmlFor='amount' className='form-label text-secondary'>
            Amount
          </label>
          <input type='text' className='form-control shadow-none' id='amount' />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </>
  );
}

export default AddSales;
