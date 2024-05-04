function Modal({ modal }) {
  return (
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
  );
}

export default Modal;
