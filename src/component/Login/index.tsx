import { useFormik } from 'formik';
import axios from 'axios';

const Login: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values);
      const data = values;
      //   axios.post('api', data).then((response) => {
      //     axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      //   });
    },
  });

  return (
    <form>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="pasword"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
    </form>
  );
};

export default Login;
