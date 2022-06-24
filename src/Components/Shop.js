import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

export default function Shop() {
  const dispatch = useDispatch();
  //const actions = bindActionCreators(actionCreators, dispatch);

  const { withdrawMoney, depositMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <div>
      <h2>Deposite/Withraw Money</h2>
      {/* <button
        type="button"
        className="btn btn-primary"
        onClick={() => dispatch(actionCreators.withdrawMoney(100))}
      >
        -
      </button>
      Update Balance
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => dispatch(actionCreators.depositMoney(100))}
      >
        +
      </button> */}
      {/* <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          actions.withdrawMoney(100);
        }}
      >
        -
      </button>
      Update Balance
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          actions.depositMoney(100);
        }}
      >
        +
      </button> */}
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          withdrawMoney(100);
        }}
      >
        -
      </button>
      Update Balance
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          depositMoney(100);
        }}
      >
        +
      </button>
    </div>
  );
}
