import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'; // Importación de componentes de Formik
import { QueryClient, QueryClientProvider, useMutation } from 'react-query'; // Importación de componentes de React Query

const queryClient = new QueryClient(); // Creación de una instancia de QueryClient

// Componente para mostrar un mensaje de error
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

// Componente principal de la página de inicio de sesión
const Login = () => {
  const [showError, setShowError] = useState(false); // Estado para mostrar u ocultar el mensaje de error
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar u ocultar la contraseña
  const mutation = useMutation(data => fetch('http://192.168.1.8:8080/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(res => res.json()));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      {/* Formulario de inicio de sesión */}
      <div className="flex flex-col items-center justify-center bg-gray-100 rounded-tl-lg rounded-bl-lg p-4 relative">
        {/* Mensaje de error */}
        {showError && <AlertError />}
        <div className="my-8">
          {/* Logo */}
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
        {/* Formulario de inicio de sesión */}
        <div className="w-full mb-8">
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={(values, { setSubmitting }) => {
              mutation.mutate(values, {
                onSuccess: () => {
                  setShowError(false);
                  alert('Login successful!');
                  window.location.href = '/dashboard'; // Redirección al dashboard cuando el inicio de sesión es exitoso
                },
                onError: () => {
                  setShowError(true);
                  setTimeout(() => {
                    setShowError(false);
                  }, 2000);
                },
                onSettled: () => {
                  setSubmitting(false);
                }
              });
            }}
          >
            <Form>
              <div className="flex justify-center mb-4">
                <Field
                  type="text"
                  name="username"
                  className="w-full max-w-md py-2 px-4 rounded-lg outline-none"
                  placeholder="User Name"
                />
              </div>
              <ErrorMessage name="username" component="div" className="text-red-500" />
              {/* Campo de contraseña con opción de mostrar/ocultar */}
              <div className="flex justify-center mb-6">
                <div className="relative w-full max-w-md">
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="w-full py-2 px-4 rounded-lg outline-none pr-10"
                    placeholder="Password"
                  />
                  {/* Icono de ojo para mostrar/ocultar la contraseña */}
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center px-2 focus:outline-none"
                    onClick={() => setShowPassword(prevState => !prevState)}
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-400 hover:text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 12a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-400 hover:text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7a3 3 0 00-3-3 3 3 0 00-3 3m6 10a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                  </button>
                </div>
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

// Componente principal de la aplicación que provee el QueryClient
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Login />
    </QueryClientProvider>
  );
};

export default App;