import React from "react";
import { InputProps } from "../types/index";

const Input: React.FC<InputProps> = ({
  inputPlaceholder,
  type,
  highlightInput,
  user,
  handleSetUser,
  name,
}) => {
  return (
    <div className="input-div">
      <input
        style={{
          border: `${highlightInput ? "2px solid red" : "1px solid lightgrey"}`,
        }}
        value={user[name]}
        // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        //   setInputState(e.target.value)
        // }
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSetUser(e)}
        type={type}
        placeholder={inputPlaceholder}
        className="input"
        name={name}
      />
    </div>
  );
};

export default Input;
