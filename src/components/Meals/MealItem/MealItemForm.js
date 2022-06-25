import React from "react";
import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input";
const MealItemForm = function () {
  return (
    <form className={styles.form}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "1",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className={styles.button}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
