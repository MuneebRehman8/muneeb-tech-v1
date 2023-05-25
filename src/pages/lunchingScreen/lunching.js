import React, { useState } from 'react';
import emailjs from 'emailjs-com';
const YOUR_SERVICE_ID = 'service_z2c12tb'; // Replace with your EmailJS service ID
const YOUR_TEMPLATE_ID = 'template_zjcyuyu'; // Replace with your EmailJS template ID
const YOUR_USER_ID = 'l9MLBexggicoPsawr'; // Replace with your EmailJS user ID

emailjs.init(YOUR_USER_ID);

const LaunchingSoon = () => {
  const [fromName, setFromName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: fromName,
      email,
      message,
    };

    emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateParams)
      .then((response) => {
        console.log('Email sent successfully!', response);
        // Reset the form
        setFromName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <div className=' bg-gray-700'>
    <div className="flex justify-center items-center min-h-screen">
    <form
      className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md"
      onSubmit={handleSubmit}
    >
    <div className="flex justify-center items-center p-10 font-extrabold from-neutral-700 font-mono text-3xl">
    lunching soon...
    </div>
      <h2 className="text-2xl font-bold mb-6">Write a Message</h2>
      <div className="mb-4">
        <label htmlFor="from_name" className="block text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="from_name"
          name="from_name"
          onChange={(e) => setFromName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          required
        ></textarea>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          onClick={handleSubmit}
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
  </div>
  );
};

export default LaunchingSoon;