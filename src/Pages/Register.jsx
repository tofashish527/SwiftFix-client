
import React, { useContext, useState } from 'react';
import Lottie from 'lottie-react';
import register from '../assets/lottieFiles/register.json';
import { AuthContext } from '../Context/AuthContext';
import SocialLogin from '../Component/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Helmet } from 'react-helmet';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,photo)
    // Create user
    createUser(email, password)
      .then((result) => {
        console.log('User created:', result.user);
        navigate(from);
      })
      .catch((error) => {
        console.log('Registration error:', error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
       <Helmet>
        <title>
          SwiftFix | Register
        </title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie animationData={register} loop={true} style={{ width: '500px' }} />
        </div>
        <div className="card bg-base-100 w-full p-5 max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold text-center">Register now!</h1>
          <p className="p-3 ml-3">
            Already Have An Account? Please{' '}
            <Link className="text-xl text-blue-700 underline" to="/login">
              Login
            </Link>
          </p>
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm">Photo URL</label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Your Photo URL"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-sm">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300"
                    required
                  />
                </div>

                <div className="relative">
                  <label className="block text-sm mb-1">Password</label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="********"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300"
                    required
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-9 cursor-pointer text-xl text-gray-600"
                  >
                    {showPassword ? <FiEye /> : <FiEyeOff />}
                  </span>
                </div>
              </div>

              <button className="btn btn-neutral mt-4 w-full">Register</button>
            </form>

            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
