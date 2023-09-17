import React from 'react';
import CustomButton from '../components/CustomButton';

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl mb-4">Next.js with MUI and Tailwind CSS</h1>
        <CustomButton onClick={() => alert('Clicked!')}>Click Me</CustomButton>
      </div>
    </div>
  );
}
