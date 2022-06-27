import React, { useState, useRef } from "react";
import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input";
const MealItemForm = function (props) {
  // My solution to get meal amount value from the input
  // const [enteredAmount, setEnteredAmount] = useState("1");
  // const amountChangeHandler = function (e) {
  //    setEnteredAmount(e.target.value);
  // };
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = function (e) {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    // console.log(enteredAmountNumber);
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref={amountInputRef}
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
          // value: enteredAmount,
          // onChange: amountChangeHandler,
        }}
      />
      <button className={styles.button}>+ Add</button>
      {!amountIsValid && <p>Plese enter a valid amount (1 - 5).</p>}
    </form>
  );
};

export default MealItemForm;
