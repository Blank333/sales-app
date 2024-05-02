import { useState } from "react";

function AddSales() {
  const [data, setData] = useState({
    product: "",
    quantity: "",
    amount: "",
  });
  const [modal, setModal] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Assume product was added because the modal pops up instantly while fetching requires async operation
    setModal("Added product successfully!");

    // Check for all fields
    if (!data.product || !data.quantity || !data.amount) {
      setModal("Please fill all fields");
      return;
    }

    //Validate as a number
    if (isNaN(data.quantity) || isNaN(data.amount)) {
      setModal("Please use numbers for quantity and amount");
      return;
    }

    //Post data to API
    fetch("http://localhost:3000/api/sales", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).catch((err) => {
      setModal("Something went wrong");
      console.error(`Error fetching sales ${err}`);
    });

    clearForm();
  };
  const clearForm = () => {
    setData({
      product: "",
      quantity: "",
      amount: "",
    });
  };

  return (
    <>
      <h2 className='text-center '>ADD SALE ENTRY</h2>
      <form className='w-100 m-auto border rounded p-4 d-flex flex-column gap-3'>
        <div>
          <label htmlFor='product' className='form-label text-secondary'>
            Product Name
          </label>
          <input
            type='text'
            className='form-control shadow-none'
            id='product'
            value={data.product}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='quantity' className='form-label text-secondary'>
            Quantity
          </label>
          <input
            type='text'
            className='form-control shadow-none'
            id='quantity'
            value={data.quantity}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='amount' className='form-label text-secondary'>
            Amount
          </label>
          <input
            type='text'
            className='form-control shadow-none'
            id='amount'
            value={data.amount}
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
          Submit
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

export default AddSales;
