import Axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Filter from "./Dashboard/Filter";
import MainSection from "./Dashboard/MainSection";

const Container = styled.div`
  display: flex;
  flex-flow: row;
  height: 100%;
  min-height: 90vh;
  align-items: stretch;
`;

export default function Dashboard() {
  const [Customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = Axios.get(
        "https://my.api.mockaroo.com/customer_data.json?key=3bd40b80"
      );
      setIsLoading(true);

      try {
        await res.then((res) => {
          let tempData = [...res.data];
          tempData.forEach((e, i) => {
            tempData[i].full_name = e.first_name + " " + e.last_name;
          });
          setCustomers(tempData);
        });
        setIsLoading(false);
        console.log("Fetched Data Complete");
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <Container>
      {!isLoading ? (
        <>
          <Filter />
          <MainSection customers={Customers} />
        </>
      ) : (
        <p>Loading</p>
      )}
    </Container>
  );
}
