import Lottie from 'lottie-react';
import React, { use } from 'react';
import register from '../assets/lottieFiles/register.json';
import { AuthContext } from '../Context/AuthContext';
import SocialLogin from '../Component/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router';

const Register = () => {
  const {createUser}=use(AuthContext);
  const location=useLocation();
    const navigate=useNavigate();
    const from=location.state||'/';
    const handleRegister=e=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        //console.log(email,password);

        //create user
      createUser(email, password)
        .then((result) => {
          console.log(result.user);
           navigate(from);
          //setLoading(false)
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
           <Lottie animationData={register} loop={true} style={{width:'500px'}}></Lottie>
    </div>
    <div className="card bg-base-100 w-full p-5 max-w-sm shrink-0 shadow-2xl">  
      <h1 className="text-5xl font-bold text-center">Register now!</h1>
      <p className='p-3 ml-3'>Already Have An Account? Please <Link className='text-xl text-blue-700 underline' to='/login'>Login</Link></p>
      <div className="card-body">
        <form onSubmit={handleRegister} >
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" name='email' placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" name='password' placeholder="Password" />
          {/* <select name="role" defaultValue="" className="select" required>
            <option value="" disabled>choose your role</option>
  <option value="applicant">Applicant</option>
  <option value="recruiter">Recruiter</option>
</select> */}

          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        </form>
        <SocialLogin></SocialLogin>
      </div>
      </div>
    </div>
  </div>
    );
};

export default Register;