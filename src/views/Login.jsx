import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="container">
      <div className="register-container">
        <div className="register-container-left">
          <div>
            <p>Welcome</p>
          </div>
        </div>
        <div className="register-container-right">
          <div className="form-box">
            <h2>Login</h2>
            <LoginForm />
            <p>
              Do not have an account?<span>Sign up</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
