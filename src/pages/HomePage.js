import CardComponent from "../components/CardComponent";
import Transactions from "../components/Transactions";
import Transfer from "../components/Transfer";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <CardComponent />
      <Transactions />
      <Transfer />
    </div>
  );
};
export default HomePage;
