import { useEffect, useState } from "react";

function TotalRevenue() {
  const [totalRevenue, setTotalRevenue] = useState(0);
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
        {totalRevenue ? `TODAY'S TOTAL REVENUE IS ₹${totalRevenue}` : "Fetching details..."}
      </h2>
    </>
  );
}

export default TotalRevenue;
