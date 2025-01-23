import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function RegisterForm() {
  const [error, setError] = useState('');

  const notify = () => {
    toast("App is under construction");
  };

  return (
    <div className="flex w-[100vw] relative justify-center items-center min-h-screen bg-transparent py-10">
      <form className="p-8 rounded-lg shadow-xl w-full max-w-lg">
        <h2 className="text-3xl font-extrabold text-center text-cyan-400 mb-6">Register for Robo Rumble 2.0</h2>

        {error && <div className="bg-red-500 text-white text-center py-2 rounded-md mb-4">{error}</div>}

        <button 
          type="button" 
          className="w-full py-3 bg-cyan-500 text-white rounded-lg text-lg font-semibold hover:bg-cyan-400 transition" 
          onClick={notify}
        >
          Register
        </button>
        
        <ToastContainer />
      </form>
    </div>
  );
}

export default RegisterForm;