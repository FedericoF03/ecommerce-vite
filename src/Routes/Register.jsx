import UserForm from "../components/UserForm/UserForm";
import CodeForm from "../components/CodeForm/CodeForm";
import { useState } from "react";

const Register = () => {
  const [test , setTest] = useState(false)
  
  return (
    <main className="background-color--o background-size--100vh display--flex align-items--center justify-content--center background--user-form">
      {test && <UserForm typeForm={"Register"} />}
      {!test && <CodeForm typeForm={"Login"}/>}
    </main>
  );
};

export default Register;
