import AuthForm from "../components/Auth/AuthForm";

const AuthPage = (props) => {
  return <AuthForm showModalHandler={props.showModalHandler} />;
};

export default AuthPage;
