import { useEffect, useRef } from "react";
import { authWrapper } from "../shared/authWrapper";
import { Main } from "../components/Main";
import { AccountWelcome } from "./AccountWelcom";
import { Field } from "../types/fields";
import ReactDOM from "react-dom/client";

type AccountProps = {
  type?: string;
  fields: Field[];
};

export const Account = ({ type, fields }: AccountProps) => {
  const authRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<ReturnType<typeof ReactDOM.createRoot> | null>(null);

  useEffect(() => {
    const validPages = ['login', 'register'];
    const currentPage = validPages.includes(type || '') ? type! : 'login';

    authWrapper.setType(currentPage as 'login' | 'register', fields);

    const renderForm = () => {
      const authElement = authWrapper.render();
      if (authRef.current) {
        if (!rootRef.current) {
          rootRef.current = ReactDOM.createRoot(authRef.current);
        }
        rootRef.current.render(authElement);
      }
    };

    renderForm();
  }, [type, fields]);

  return (
    <Main className="account">
      <div ref={authRef} className="account__auth-form" />
      <AccountWelcome />
    </Main>
  );
};