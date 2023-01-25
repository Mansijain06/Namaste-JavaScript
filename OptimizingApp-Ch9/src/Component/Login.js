import { Formik, Form, Field } from "formik";
import { FoodLogo } from "../assets/img/foodlogo.jpeg";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Login</h1>
        <img
          src="https://www.pngfind.com/pngs/m/330-3309459_food-logo-transparent-background-hd-png-download.png"
          alt="logo"
        />
      </div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={async (values) => {
          console.log(values);
        }}
      >
        <Form className="login-form">
          <div>
            <label htmlFor="number">Phone number</label>
            <Field id="number" name="number" placeholder="Phone number" />
          </div>
          <div>
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" placeholder="Name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" placeholder="Email" />
          </div>
          <button type="submit">SUBMIT</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
