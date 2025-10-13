'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:abramovichroman19@gmail.com?subject=${encodeURIComponent(formData.subject || 'Contact from Portfolio')}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <div className="space-y-6">
      {/* Header section */}
      <header>
        <div className="flex items-center gap-2 md:gap-14">
          {/* Page title */}
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-none">contact me</h1>
        </div>

      </header>

      <hr className="w-full border-gray-200 dark:border-white-200 border-2.5 -mt-3"/>

      {/* Contact Form + Alternative Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Left: Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 transition-all"
              placeholder="your name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 transition-all"
              placeholder="you@example.com"
            />
          </div>

          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 transition-all"
              placeholder="what's this about?"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 transition-all resize-y"
              placeholder="tell me about your project, idea, or just say hi..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 text-base font-semibold bg-gray-900 dark:bg-gray-100 text-white dark:text-black rounded-lg hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors"
          >
            send message
          </button>
        </form>

        {/* Right: Alternative Contact Methods */}
        <div className="flex flex-col mt-7">
          <h3 className="text-lg font-semibold mb-4">or reach out directly @ my links</h3>
          <div className="flex flex-col gap-3">
            <a 
              href="mailto:abramovichroman19@gmail.com" 
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
              <span className="text-sm text-gray-500 dark:text-gray-500">email</span>
              <br />
              <span className="underline">abramovichroman19@gmail.com</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/roman-abramovich-a49bb92a5/" 
              target="_blank" 
              rel="noopener"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              <span className="text-sm text-gray-500 dark:text-gray-500">linkedin</span>
              <br />
              <span className="underline">Roman Abramovich</span>
            </a>
            <a 
              href="https://github.com/Romanabramovich" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              <span className="text-sm text-gray-500 dark:text-gray-500">github</span>
              <br/>
              <span className="underline">@romanabramovich</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

