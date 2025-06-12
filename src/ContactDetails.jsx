import React, { useState } from 'react';
import Instagram from "../src/assets/location-svgrepo-com.svg";
import LinkedIn from "../src/assets/linkedIn.svg";
import EmailIcon from "../src/assets/gmail-svgrepo-com.svg";
import GitHub from "../src/assets/github-svgrepo-com.svg";
import Phone from "../src/assets/phone-calling-rounded-svgrepo-com.svg";

const ContactDetails = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxMsp13pDnKrWa6ZPzZ16IL2iz1ybKEyD_6luiMlaIFgS5wkuqIbb-vT07Dqc6KssSd/exec';
    const formData = new FormData(form);

    fetch(scriptURL, {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        setMessage('Message sent successfully!');
        setTimeout(() => setMessage(''), 3000);
        form.reset();
      })
      .catch((error) => {
        setMessage('Error! Please try again later.');
        console.error('Error!', error.message);
      });
  };

  return (
     <section id="contact" className="relative z-10 py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Contact Me
          </h2>
          <p className="text-xl text-gray-600">
            Ready to start your project? Let's get in touch and bring your ideas to life!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center gap-4 p-6 bg-white border border-gray-300 rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center">
                <img src={EmailIcon} alt="Email" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Email</h3>
                <p className="text-gray-600">ankit2914978@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-white border border-gray-300 rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <img src={Phone} alt="Phone" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Phone</h3>
                <p className="text-gray-600">+91 87075 38123</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-white border border-gray-300 rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-xl flex items-center justify-center">
                <img src={Instagram} alt="Location" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Location</h3>
                <p className="text-gray-600">Kanpur, Uttar Pradesh, India</p>
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <a href="https://www.linkedin.com/in/ankit1141/" target="_blank" rel="noopener noreferrer">
                <img src={LinkedIn} alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a href="https://github.com/Ankit1141192" target="_blank" rel="noopener noreferrer">
                <img src={GitHub} alt="GitHub" className="w-6 h-6" />
              </a>
              <a href="mailto:ankit2914978@gmail.com">
                <img src={EmailIcon} alt="Email" className="w-6 h-6" />
              </a>
            </div>
          </div>

          <form
            name="submit-to-google-sheet"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Your Name</label>
              <input
                type="text"
                name="Name"
                required
                className="w-full p-4 bg-white border border-gray-300 rounded-xl focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                placeholder="Write Your Name..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Your Email</label>
              <input
                type="email"
                name="Email"
                required
                className="w-full p-4 bg-white border border-gray-300 rounded-xl focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                placeholder="Write Your Email..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Your Number</label>
              <input
                type="number"
                name="Number"
                required
                className="w-full p-4 bg-white border border-gray-300 rounded-xl focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                placeholder="Write Your Number..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Your Message</label>
              <textarea
                name="Message"
                required
                rows="5"
                className="w-full p-4 bg-white border border-gray-300 rounded-xl focus:border-cyan-400 focus:outline-none transition-colors duration-300 resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white p-4 rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
            <span className="text-green-600 block pt-4 text-sm">{message}</span>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;