import { EmailRule, LengthRule, PasswordRule, RequiredRule } from "../helpers/rules";
import { InputField } from "./InputField";

const required = new RequiredRule();
const passwordRule = new PasswordRule();
const emailRule = new EmailRule();
const lengthRule = new LengthRule(3)

export const name = new InputField(
  { type: "text", name: "name", label: "Name", placeholder: "Your Name" },
  [required, lengthRule]
);

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
