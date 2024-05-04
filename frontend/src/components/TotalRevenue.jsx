import { useEffect, useState } from "react";

function TotalRevenue() {
  const [totalRevenue, setTotalRevenue] = useState(-1);
  const [title, setTitle] = useState("FETCHING DETAILS...");

  useEffect(() => {
    fetch("http://localhost:3000/api/sales/total", {
      headers: { Authorization: localStorage.getItem("token") },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setTitle(data.error);
          return;
        }
        setTotalRevenue(data.message);
      })
      .catch((err) => {
        console.error(`Error fetching sales ${err}`);
      });
  }, []);

  return (
    <>
      <h2 className='text-center '>{totalRevenue >= 0 ? `TODAY'S TOTAL REVENUE IS ₹${totalRevenue}` : title}</h2>
    </>
  );
}

export default TotalRevenue;
