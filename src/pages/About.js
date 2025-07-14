import React from 'react';

const leaders = [
  { name: 'Jane Doe', role: 'Senior Pastor', img: 'https://via.placeholder.com/100' },
  { name: 'John Smith', role: 'Associate Pastor', img: 'https://via.placeholder.com/100' },
  { name: 'Mary Johnson', role: 'Music Director', img: 'https://via.placeholder.com/100' },
  { name: 'James Lee', role: 'Youth Leader', img: 'https://via.placeholder.com/100' },
];

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Introduction */}
      <section className="mb-12 text-center" data-aos="fade-up">
        <h1 className="font-header text-3xl md:text-4xl text-primary font-bold mb-4">About the Sacred Order of Silent Brotherhood</h1>
        <p className="font-body text-lg text-gray-700">We are a spiritual family dedicated to faith, unity, and service. Our doors are open to all who seek peace and purpose in Christ.</p>
      </section>

      {/* History */}
      <section className="mb-12" data-aos="fade-right">
        <h2 className="font-header text-2xl text-gold mb-2" data-aos="fade-up">Our History</h2>
        <p className="font-body text-gray-700">Founded in 1985, the Sacred Order of Silent Brotherhood has grown from a small gathering of believers into a vibrant community. Our journey is marked by a commitment to spiritual growth, outreach, and the power of silent fellowship.</p>
      </section>

      {/* Pastor's Message */}
      <section className="mb-12 flex flex-col md:flex-row items-center gap-8" data-aos="fade-left">
        <img src="https://via.placeholder.com/150" alt="Pastor" className="rounded-full shadow-lg w-36 h-36 object-cover" />
        <div>
          <h2 className="font-header text-2xl text-gold mb-2" data-aos="fade-up">Pastor's Message</h2>
          <p className="font-body text-gray-700">Welcome! I am honored to serve as the pastor of this loving and faithful congregation. Our mission is to walk together in Christ, support one another, and serve our community with compassion and grace. We invite you to join us on this journey of faith.</p>
          <div className="mt-2 font-header text-primary font-semibold">Rev. Jane Doe</div>
        </div>
      </section>

      {/* Leadership */}
      <section data-aos="fade-up">
        <h2 className="font-header text-2xl text-gold mb-6 text-center" data-aos="fade-up">Our Leadership</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {leaders.map((leader, idx) => (
            <div key={idx} className="flex flex-col items-center bg-white rounded-lg shadow p-4" data-aos="zoom-in">
              <img src={leader.img} alt={leader.name} className="rounded-full w-24 h-24 object-cover mb-3" />
              <div className="font-header text-lg text-primary font-bold">{leader.name}</div>
              <div className="font-body text-gold">{leader.role}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About; 