import React, { useState } from 'react';

const AuthForm = () => {
  // State pour déterminer si on est sur le formulaire de connexion ou de création de compte
  const [isLogin, setIsLogin] = useState(true);
  
  // State pour stocker les informations du formulaire
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  // Fonction de gestion des changements d'input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Logique pour la connexion
      console.log("Logging in with:", formData.email, formData.password);
    } else {
      // Logique pour la création de compte
      console.log("Creating account with:", formData.fullName, formData.email, formData.password);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          {isLogin ? 'Login' : 'Create Account'}
        </h2>
        <p className="text-center text-gray-600 mb-6">
          {isLogin ? 'Please login to book appointment' : 'Please sign up to book appointment'}
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Champ "Full Name" visible uniquement pour la création de compte */}
          {!isLogin && (
            <div>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          )}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            {isLogin ? 'Login' : 'Create account'}
          </button>
        </form>
        
        <p className="text-center text-gray-600 mt-4">
          {isLogin ? (
            <>
              Don’t have an account?{' '}
              <button
                onClick={() => setIsLogin(false)}
                className="text-blue-500 hover:underline"
              >
                Create one
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                onClick={() => setIsLogin(true)}
                className="text-blue-500 hover:underline"
              >
                Login here
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
