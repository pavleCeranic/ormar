import React, { useState } from 'react';

const Account = () => {
  const [activeTab, setActiveTab] = useState('login');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='min-h-screen flex items-center justify-center'>
		<div>
			<div>
				<div>Login</div>
				<div>Registration</div>
			</div>
			<div></div>
		</div>
      <div className=''>
        <div className=''>
          <button
            className=''
            onClick={() => handleTabChange('login')}
          >
            Login
          </button>
          <button
            className=''
            onClick={() => handleTabChange('registration')}
          >
            Registration
          </button>
        </div>
        <div className=''>
          {activeTab === 'login' && (
            <form>
              {/* Login form content */}
              <div>
                <label htmlFor="login-email" className=''>
                  Email address
                </label>
                <input
                  type="email"
                  name="login-email"
                  id="login-email"
                  autoComplete="email"
                  className=''
                />
              </div>
              <div className=''>
                <label htmlFor="login-password" className=''>
                  Password
                </label>
                <input
                  type="password"
                  name="login-password"
                  id="login-password"
                  autoComplete="current-password"
                  className=''
                />
              </div>
              <div className=''>
                <button
                  type="submit"
                  className=''
                >
                  Sign in
                </button>
              </div>
            </form>
          )}
          {activeTab === 'registration' && (
            <form>
              {/* Registration form content */}
              <div>
                <label htmlFor="registration-email" className=''>
                  Email address
                </label>
                <input
                  type="email"
                  name="registration-email"
                  id="registration-email"
                  autoComplete="email"
                  className=''
                />
              </div>
              <div className=''>
                <label htmlFor="registration-password" className=''>
                  Password
                </label>
                <input
                  type="password"
                  name="registration-password"
                  id="registration-password"
                  autoComplete="new-password"
                  className=''
                />
              </div>
              <div className=''>
                <button
                  type="submit"
                  className=''
                >
                  Sign up
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;
