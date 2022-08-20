import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCards } from "../store/cards/selectors";
import { toggleBlock, changeLimit } from "../store/cards/slice";

const CardComponent = () => {
  const allCards = useSelector(selectCards);
  const dispatch = useDispatch();
  const [limit, setLimit] = useState();
  console.log(allCards);

  return (
    <div>
      <h2>card component</h2>

      {allCards.map((c, index) => (
        <div key={index}>
          <h1>card {c.id}</h1>
          <p> limit: {c.limit}</p>
          <p>max:{c.max}</p>
          <button onClick={() => dispatch(toggleBlock(c.id))}>
            {allCards.includes(c.id) ? "block" : "unblock"}
          </button>
          <br />
          <label>
            Limitchange :
            <input
              type="number"
              value={limit}
              onChange={(e) => setLimit(parseInt(e.target.value))}
            />
          </label>
          <br />
          <button onClick={() => dispatch(changeLimit(c.id))}>
            {allCards.includes(c.id) ? "limit" : ""}
          </button>
        </div>
      ))}
    </div>
  );
};
export default CardComponent;
