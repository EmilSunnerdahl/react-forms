import React, { useState } from "react";
import Input from "./Input";
import axios from "axios";
import { FeedbackMessage, User } from "../types/index";

const Form: React.FC = () => {
  const [user, setUser] = useState<User>({
    fName: "",
    lName: "",
    email: "",
    password: "",
  });

  const [feedbackMessage, setFeedbackMessage] = useState<FeedbackMessage>({
    message: "",
    color: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user.fName || !user.lName || !user.email || !user.password) {
      setFeedbackMessage({
        message: "Please fill out the before before submitting.",
        color: "red",
      });
      return;
    }

    const res = await axios.post("http://localhost:5000/users", user);

    if (res.status === 201) {
      setFeedbackMessage({
        message: "Account created successfully!",
        color: "green",
      });
    } else {
      setFeedbackMessage({
        message: res.status.toString(),
        color: "red",
      });
    }

    setUser({
      fName: "",
      lName: "",
      email: "",
      password: "",
    });
  };

  const handleSetUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <form
      className="submit-form"
      onSubmit={(e: React.FormEvent) => handleSubmit(e)}
    >
      <h2 style={{ marginBottom: "1rem" }}>Create your account today!</h2>
      <Input
        highlightInput={false}
        type="text"
        user={user}
        handleSetUser={handleSetUser}
        name="fName"
        inputPlaceholder="First name"
      />
      <Input
        highlightInput={false}
        type="text"
        user={user}
        handleSetUser={handleSetUser}
        name="lName"
        inputPlaceholder="Last name"
      />
      <Input
        highlightInput={false}
        type="email"
        user={user}
        handleSetUser={handleSetUser}
        name="email"
        inputPlaceholder="Email"
      />
      <Input
        highlightInput={false}
        type="password"
        user={user}
        handleSetUser={handleSetUser}
        name="password"
        inputPlaceholder="Password"
      />
      <input type="submit" className="submit-btn" value="Create Account" />

      {feedbackMessage.message ? (
        <p
          style={{ display: "block", color: feedbackMessage.color }}
          className="error-message"
        >
          {feedbackMessage.message}
        </p>
      ) : (
        ""
      )}
    </form>
  );
};

export default Form;
