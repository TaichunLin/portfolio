import React from 'react';

interface Props {}

export const Signin: React.FC<Props> = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-rose-100">
        <div className="flex-1 p-8">
          <div className="mx-auto overflow-hidden bg-white shadow-xl w-80 rounded-3xl">
            <div className="relative h-48 bg-primary-50 rounded-bl-4xl">
              <svg
                className="absolute bottom-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="#ffffff"
                  fill-opacity="1"
                  d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </div>
            <div className="px-10 pt-4 pb-8 bg-white rounded-tr-4xl">
              <h1 className="text-2xl font-semibold text-gray-900">
                Welcome back!
              </h1>
              <form className="mt-12" action="" method="POST">
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    className="w-full h-10 text-gray-900 placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:border-primary-50"
                    placeholder="john@doe.com"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email address
                  </label>
                </div>
                <div className="relative mt-10">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    className="w-full h-10 text-gray-900 placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:border-primary-50"
                    placeholder="Password"
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>

                <input
                  type="sumbit"
                  value="Sign in"
                  className="block w-full px-4 py-2 mt-20 font-semibold text-center text-white rounded cursor-pointer bg-primary-50 hover:bg-primary-50focus:outline-none focus:ring focus:ring-offset-2 focus:ring-primary-50 focus:ring-opacity-80"
                />
              </form>
              <a
                href="#"
                className="block mt-4 text-sm font-medium text-center text-primary-50 hover:underline focus:outline-none focus:ring-2 focus:ring-primary-50"
              >
                {' '}
                Forgot your password?{' '}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
