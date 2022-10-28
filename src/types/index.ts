export interface FeedbackMessage {
  message: string;
  color: string;
}

export interface User {
  fName: string;
  lName: string;
  email: string;
  password: string;
}

export interface InputProps {
  inputPlaceholder: string;
  type: string;
  highlightInput: boolean;
  handleSetUser: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: "fName" | "lName" | "email" | "password";
  user: User;
}