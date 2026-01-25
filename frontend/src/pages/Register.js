import React from 'react';
import { motion } from 'framer-motion';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center justify-center min-h-screen"
    >
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Create Account</h1>
        <RegisterForm />
      </div>
    </motion.div>
  );
};

export default Register;