//ReducerCount.js
//상태 관리를 위한 Hook 중 하나로, 복잡한 상태 로직을
//다룰 때 유용
import React, { useReducer } from "react";

//Switch를 활용해서 현재 상태와 액션을 받아서 새로운 상태를
//전달할 예정
const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };
    
    case "RESET":
        return { count :  0};

    default:
      return state;
  }
};

const Counter = () => {

  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    <>
      <p>count : {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>증가</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>감소</button>
      <button onClick={() => dispatch({ type: "RESET" })}>초기화</button>
    </>
  );
};
export default Counter;
