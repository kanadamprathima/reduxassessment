import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCheckingAmount, selectSavings } from "../store/cards/selectors";
import { toChecking } from "../store/cards/slice";
import { tosavings } from "../store/cards/slice";

const Transfer = () => {
  const checkingsAmount = useSelector(selectCheckingAmount);
  const savingsamount = useSelector(selectSavings);

  const [customAmount, setCustomAmount] = useState(0);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Transfer</h2>
      <h2>Checkings account:{checkingsAmount}</h2>
      <h3> Savings account: {savingsamount}</h3>
      <label>
        Amount :
        <input
          type="number"
          value={customAmount}
          onChange={(e) => setCustomAmount(parseInt(e.target.value))}
        />
      </label>
      <br />
      <button onClick={() => dispatch(toChecking(customAmount))}>
        to checkings
      </button>
      <button onClick={() => dispatch(tosavings(customAmount))}>
        to savings
      </button>
    </div>
  );
};
export default Transfer;
