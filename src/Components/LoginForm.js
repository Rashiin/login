/* Rashin Gholijani Farahani */



import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { loginUser } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import Toast from './Toast';

const LoginForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required')
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const data = await loginUser(values.email, values.password);
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        localStorage.setItem('authId', data.authId);
        localStorage.setItem('userName', `${values.firstName} ${values.lastName}`);
        navigate('/');
      } catch (err) {
        setError(err.message || 'Login failed, please try again.');
      } finally {
        setSubmitting(false);
      }
    }
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500 p-4">
      {error && <Toast message={error} onClose={() => setError(null)} />}
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Sign In
        </h2>
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          
          <div className="relative">
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder=" "
              className="block w-full appearance-none bg-transparent border border-gray-300 rounded-md px-3 py-2 text-base text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 peer"
              {...formik.getFieldProps('firstName')}
            />
            <label
              htmlFor="firstName"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-1
                         peer-focus:px-1 peer-focus:text-blue-500
                         peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 
                         peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
            >
              First Name
            </label>
            {formik.touched.firstName && formik.errors.firstName && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.firstName}</div>
            )}
          </div>
          
          <div className="relative">
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder=" "
              className="block w-full appearance-none bg-transparent border border-gray-300 rounded-md px-3 py-2 text-base text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 peer"
              {...formik.getFieldProps('lastName')}
            />
            <label
              htmlFor="lastName"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-1
                         peer-focus:px-1 peer-focus:text-blue-500
                         peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 
                         peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
            >
              Last Name
            </label>
            {formik.touched.lastName && formik.errors.lastName && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.lastName}</div>
            )}
          </div>
          
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              placeholder=" "
              className="block w-full appearance-none bg-transparent border border-gray-300 rounded-md px-3 py-2 text-base text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 peer"
              {...formik.getFieldProps('email')}
            />
            <label
              htmlFor="email"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-1
                         peer-focus:px-1 peer-focus:text-blue-500
                         peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 
                         peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
            >
              Email
            </label>
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
            )}
          </div>
          
          <div className="relative">
            <input
              type="password"
              id="password"
              name="password"
              placeholder=" "
              className="block w-full appearance-none bg-transparent border border-gray-300 rounded-md px-3 py-2 text-base text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 peer"
              {...formik.getFieldProps('password')}
            />
            <label
              htmlFor="password"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-1
                         peer-focus:px-1 peer-focus:text-blue-500
                         peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 
                         peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
            >
              Password
            </label>
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
            )}
          </div>
          
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="flex items-center justify-center w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition duration-300 disabled:opacity-50"
          >
            {formik.isSubmitting && (
              <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  className="opacity-25"
                />
                <path
                  d="M4 12a8 8 0 018-8"
                  stroke="currentColor"
                  strokeWidth="4"
                  className="opacity-75"
                />
              </svg>
            )}
            {formik.isSubmitting ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
