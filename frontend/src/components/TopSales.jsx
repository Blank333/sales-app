import { useEffect, useState } from "react";

function TopSales() {
  const [topSales, setTopSales] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/sales/top")
      .then((res) => res.json())
      .then((data) => {
        setTopSales(data);
      })
      .catch((err) => {
        console.error(`Error fetching sales ${err}`);
      });
  }, []);
  return (
    <>
      <h2 className='text-center '>{topSales.length ? "TOP 5 SALES" : "Fetching Details..."}</h2>

      <div className='table-responsive'>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Sales ID</th>
              <th scope='col'>Product Name</th>
              <th scope='col'>Quantity</th>
              <th scope='col'>Sale Amount (₹)</th>
            </tr>
          </thead>
          <tbody className='table-group-divider'>
            {topSales.map((sale, index) => {
              return (
                <>
                  <tr>
                    <th scope='row'>{index + 1}</th>
                    <td>{sale._id}</td>
                    <td>{sale.product}</td>
                    <td>{sale.quantity}</td>
                    <td>₹{sale.amount}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TopSales;
