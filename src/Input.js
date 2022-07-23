import { useState } from "react";

function Input() {
  const [value, updateValue] = useState("");
  const [countOfKeys, setcountOfKeys] = useState(0)
  return (
    <div>
      <input value={value} onChange={(ev) => update(ev)} />
      <span>{value} </span>
      <span>{countOfKeys} </span>
    </div>
  )

  function update(ev) {
    setcountOfKeys(countOfKeys + 1);

    console.log("User enteered", ev.target.value);
    let userInput = ev.target.value;
    userInput = userInput.replace(/[a-z]/, '');

    updateValue(userInput);
  }
}
export default Input;