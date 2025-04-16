import { EmailRule, PasswordRule, RequiredRule } from "../helpers/rules";
import { InputField } from "./InputField";

const required = new RequiredRule();
const passwordRule = new PasswordRule();
const emailRule = new EmailRule();

export const email = new InputField(
  { type: "email", name: "emailUser", label: "E-mail", placeholder: "Your email" },
  [required, emailRule]
);

export const password = new InputField(
  { type: "password", name: "password", label: "Hasło", placeholder: "Your password" },
  [required, passwordRule]
);


// export const button = new ButtonField(
//   { type: "submit", name: "buttonSend", label: "Zaloguj się" }
// );
