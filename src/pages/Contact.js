import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="font-header text-3xl md:text-4xl text-primary font-bold mb-8 text-center" data-aos="fade-up">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form className="bg-white rounded-lg shadow p-6 flex flex-col space-y-4" data-aos="fade-right">
          <label className="font-header text-primary">Name
            <input type="text" className="mt-1 px-3 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-gold" placeholder="Your Name" />
          </label>
          <label className="font-header text-primary">Email
            <input type="email" className="mt-1 px-3 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-gold" placeholder="Your Email" />
          </label>
          <label className="font-header text-primary">Message
            <textarea className="mt-1 px-3 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-gold" rows="5" placeholder="Your Message"></textarea>
          </label>
          <button type="submit" className="bg-gold text-primary font-bold px-4 py-2 rounded hover:bg-yellow-400 transition">Send Message</button>
        </form>
        {/* Map and Contact Info */}
        <div className="flex flex-col space-y-6 justify-between" data-aos="fade-left">
          {/* Embedded Map (replace src with real map if available) */}
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
            <div className="mb-2 font-header text-primary font-bold">Phone:</div>
            <div className="font-body mb-4">+234 123 456 7890</div>
            <div className="mb-2 font-header text-primary font-bold">Email:</div>
            <div className="font-body mb-4">info@sosbchurch.org</div>
            <div className="mb-2 font-header text-primary font-bold">Address:</div>
            <div className="font-body">123 Brotherhood Avenue, Abuja, Nigeria</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 