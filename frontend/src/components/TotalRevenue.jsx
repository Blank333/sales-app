import { useEffect, useState } from "react";

function TotalRevenue() {
  const [totalRevenue, setTotalRevenue] = useState(-1);
  useEffect(() => {
    fetch("http://localhost:3000/api/sales/total")
      .then((res) => res.json())
      .then((data) => {
        setTotalRevenue(data);
      })
      .catch((err) => {
        console.error(`Error fetching sales ${err}`);
      });
  }, []);

  return (
    <>
      <h2 className='text-center '>
        {totalRevenue >= 0 ? `TODAY'S TOTAL REVENUE IS ₹${totalRevenue}` : "FETCHING DETAILS..."}
      </h2>
    </>
  );
}

export default TotalRevenue;
