import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

const Counter = () => {
  const [incrementAmt, setIncrementAmt] = useState(0);
  const count = useSelector((state) => state.counter.count);

  const addValue = Number(incrementAmt) || 0;

  const resetAll = () => {
    setIncrementAmt(0);
    dispatch(reset());
  };

  const dispatch = useDispatch();
  return (
    <section>
      <p>{count}</p>
      <div>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
      </div>
      <div>
        <input
          type="text"
          value={incrementAmt}
          onChange={(e) => setIncrementAmt(e.target.value)}
        />
        <div>
          <button onClick={() => dispatch(incrementByAmount(addValue))}>
            Add Amount
          </button>
          <button
            onClick={() => {
              return dispatch(resetAll);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </section>
  );
};

export default Counter;
