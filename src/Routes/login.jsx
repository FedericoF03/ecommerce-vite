import UserForm from "../components/UserForm/UserForm";

const Login = () => {
  return (
    <main className="background-color--o background-size--100vh display--flex align-items--center justify-content--center background--user-form">
      <UserForm typeForm={"Login"} />
    </main>
  );
};

export default Login;
