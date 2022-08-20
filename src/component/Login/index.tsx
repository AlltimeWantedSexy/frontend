import { withFormik, Form, Field } from 'formik';

const Login: React.FC = () => {
  return (
    <div>
      <Form>
        <div>
          <Field type="email" name="email" placeholder="Email" />
        </div>
        <div>
          <Field type="password" name="password" placeholder="Password" />
        </div>
        <button type="submit"> Login </button>
      </Form>
    </div>
  );
};

const LoginFormik = withFormik({
  mapPropsToValues: ({ email, password }) => {
    return {
      email: email || '',
      password: password || '',
    };
  },
  handleSubmit: (values) => {
    console.log(values);
  },
})(Login);

export default Login;
