import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function TopSales() {
  const [topSales, setTopSales] = useState([]);
  const [title, setTitle] = useState("FETCHING DETAILS...");

  useEffect(() => {
    fetch("http://localhost:3000/api/sales/top", {
      headers: { Authorization: localStorage.getItem("token") },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setTitle(data.error);
          return;
        }
        if (!data.message.length) {
          setTitle("No sales yet!");
        }
        setTopSales(data.message);
      })
      .catch((err) => {
        console.error(`Error fetching sales ${err}`);
      });
  }, []);
  return (
    <>
      <div className='text-center'>
        <h2>{topSales.length ? "TOP 5 SALES" : title}</h2>
        {title.includes("No sales yet!") && (
          <Link className='text-decoration-none' to='/addsales'>
            <h2>Add sales here!</h2>
          </Link>
        )}
      </div>
      <div className={"table-responsive " + (topSales.length ? "" : "d-none")}>
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
                <tr key={sale._id}>
                  <th scope='row'>{index + 1}</th>
                  <td>{sale._id}</td>
                  <td>{sale.product}</td>
                  <td>{sale.quantity}</td>
                  <td>₹{sale.amount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TopSales;
