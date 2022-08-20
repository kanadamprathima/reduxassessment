import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "../store/cards/slice";
import { selectCheckingAmount } from "../store/cards/selectors";
const Transactions = () => {
  const checkingbalance = useSelector(selectCheckingAmount);
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Transactions</h1>
      <p>Checking account:{checkingbalance}</p>

      <label>
        Amount :
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value))}
        />
      </label>
      <br />
      <button onClick={() => dispatch(deposit(amount))}>deposit</button>
      <button onClick={() => dispatch(withdraw(amount))}>Withdraw</button>
    </div>
  );
};
export default Transactions;
