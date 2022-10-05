import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import Customers from "../../customers";
import ServiceProviders from "../../service-providers";

const HomePage = () => {
  return (
    <>
      <Customers />
      <ServiceProviders />
    </>
  );
};

export default HomePage;
