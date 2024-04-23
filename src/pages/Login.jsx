import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';


const initialFormData = {
  email: 'admin@email.com',
  password: '123',
};

const AlertError = () => {
  return (
    <div className="fixed top-0 right-0 m-4 z-10 fade-out">
      <div className="flex bg-white shadow-lg rounded-lg">
        <div className="icon bg-red-600 flex justify-center items-center py-4 px-6 rounded-tr-3xl rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 bg-white rounded-full text-red-600 p-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <div className="flex flex-col p-4 rounded-tr-lg rounded-br-lg">
          <h2 className="font-semibold text-red-600">Error</h2>
          <p className="text-gray-700">
            Incorrect email or password
          </p>
        </div>
      </div>
    </div>
  );
}



const Login = () => {
  const [showError, setShowError] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      <div className="flex flex-col items-center justify-center bg-gray-100 rounded-tl-lg rounded-bl-lg p-4 relative">
        {showError && <AlertError />}
        <div className="my-8">
          <img src="../../src/assets/logo-biblioteca.png" alt="JT Devs" width="100" height="100" />
        </div>
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-4xl font-bold text-gray-900">Welcome</h1>
        </div>
        <div className="my-14">
          <p className="text-center relative text-gray-500 bg-gray-100 before:max-w-[50px] md:before:max-w-[120px] before:w-full before:-left-[60px] md:before:-left-[140px] before:h-[1px] before:bg-current before:absolute before:top-[50%] after:max-w-[50px] md:after:max-w-[120px] after:w-full after:h-[1px] after:bg-current after:absolute after:top-[50%] after:-right-[60px] md:after:-right-[140px]">
            Log in with your email address
          </p>
        </div>
        <div className="w-full mb-8">
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                if (
                  values.email !== initialFormData.email ||
                  values.password !== initialFormData.password
                ) {
                  setShowError(true);
                  setTimeout(() => {
                    setShowError(false);
                  }, 2000);
                  setSubmitting(false);
                } else {
                  setShowError(false);
                  alert('Login successful!');
                  setSubmitting(false);
                }
              }, 400);
            }}
          >
            <Form>
              <div className="flex justify-center mb-4">
                <Field
                  type="text"
                  name="text"
                  className="w-full max-w-md py-2 px-4 rounded-lg outline-none"
                  placeholder="User Name"
                />
              </div>
              <ErrorMessage name="email" component="div" className="text-red-500" />
              <div className="flex justify-center mb-6">
                <Field
                  type="password"
                  name="password"
                  className="w-full max-w-md py-2 px-4 rounded-lg outline-none"
                  placeholder="Password"
                />
              </div>
              <ErrorMessage name="password" component="div" className="text-red-500" />
              <div className="w-full max-w-md mx-auto flex items-center justify-between text-gray-500 mb-8">
                <div className="flex items-center gap-2">
                  <Field type="checkbox" id="remember" name="remember" className="mr-2" />
                  <label htmlFor="remember">Remember</label>
                </div>
              </div>
              <div className="w-full max-w-md mx-auto">
                <button type="submit" className="block w-full bg-gray-200 py-2 px-4 text-gray-900 rounded-md text-center hover:bg-gray-300 transition-colors">
                  Login
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center border-t border-r border-b rounded-tr-lg rounded-br-lg">
        <img
          src="../../src/assets/fondo-login.jpg"
          className="w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;