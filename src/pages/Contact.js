import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('');
    
    try {
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="font-header text-3xl md:text-4xl text-primary font-extrabold mb-8 text-center tracking-wide" data-aos="fade-up">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 flex flex-col space-y-4" data-aos="fade-right">
          <div>
            <label className="font-header text-primary font-semibold block mb-2">
              Name *
            </label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gold font-body transition-colors ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Your Name"
              disabled={isSubmitting}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          
          <div>
            <label className="font-header text-primary font-semibold block mb-2">
              Email *
            </label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gold font-body transition-colors ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Your Email"
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          
          <div>
            <label className="font-header text-primary font-semibold block mb-2">
              Message *
            </label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5" 
              className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gold font-body transition-colors resize-none ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Your Message"
              disabled={isSubmitting}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          
          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`font-header font-bold px-4 py-2 rounded-full transition-all duration-200 text-lg tracking-wide ${
              isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-gold text-primary hover:bg-yellow-400 transform hover:scale-105'
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </button>
          
          {submitStatus === 'success' && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
              Thank you! Your message has been sent successfully. We'll get back to you soon.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              Sorry, there was an error sending your message. Please try again.
            </div>
          )}
        </form>
        
        {/* Map and Contact Info */}
        <div className="space-y-6" data-aos="fade-left">
          {/* Embedded Map */}
          <div className="w-full h-64 rounded-lg overflow-hidden shadow">
            <iframe
              title="Church Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.925964049438!2d-0.1869646845950196!3d5.614818395929095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b4d2b2b2b2b%3A0x2b2b2b2b2b2b2b2b!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1610000000000!5m2!1sen!2sgh"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
          {/* Contact Details */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-header text-xl font-extrabold text-primary mb-4 tracking-wide">Get in Touch</h3>
            <div className="space-y-4">
              <div>
                <div className="font-header text-primary font-extrabold tracking-wide mb-1">Phone:</div>
                <div className="font-body text-charcoal">+234 123 456 7890</div>
              </div>
              <div>
                <div className="font-header text-primary font-extrabold tracking-wide mb-1">Email:</div>
                <div className="font-body text-charcoal">info@sosbchurch.org</div>
              </div>
              <div>
                <div className="font-header text-primary font-extrabold tracking-wide mb-1">Address:</div>
                <div className="font-body text-charcoal">123 Brotherhood Avenue, Abuja, Nigeria</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 