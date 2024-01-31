import Form from "../components/RegistrationForm";
import "../css/register.css";

const Register = () => {
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
            <h2>New User?</h2>
            <div className="text">
              Use the form below to create your account.
            </div>
            <Form />
            <p>
              Already have an account?<span>Sign in</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
