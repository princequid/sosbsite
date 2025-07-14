import React from 'react';

const activities = [
  {
    title: 'Youth Fellowship',
    desc: 'Weekly gatherings for worship, Bible study, and fun activities.'
  },
  {
    title: 'Youth Bible Study',
    desc: 'A dedicated time for young people to explore the Bible, ask questions, and grow in their understanding of God’s Word.'
  },
  {
    title: 'Youth Choir',
    desc: 'Join our vibrant youth choir to develop your musical gifts and lead worship through song.'
  },
  {
    title: 'Community Service',
    desc: 'Opportunities to serve and make a difference in our local community.'
  },
  {
    title: 'Retreats & Camps',
    desc: 'Annual retreats and camps for spiritual growth and bonding.'
  },
  {
    title: 'Music & Drama',
    desc: 'Express your talents through music, drama, and creative arts.'
  },
];

const Youth = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-10 text-center" data-aos="fade-up">
        <h1 className="font-header text-3xl md:text-4xl text-primary font-bold mb-4">Youth Ministry</h1>
        <p className="font-body text-lg text-gray-700 mb-4">Empowering the next generation to grow in faith, leadership, and service.</p>
        <div className="flex justify-center mb-4">
          <span className="inline-block bg-gold rounded-full p-3">
            {/* Icon: Youth/energy */}
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/></svg>
          </span>
        </div>
      </section>
      {/* Activities */}
      <section className="mb-10" data-aos="fade-right">
        <h2 className="font-header text-2xl text-gold mb-6 text-center">Youth Activities</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {activities.map((activity, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center" data-aos="zoom-in">
              <h3 className="font-header text-xl text-primary font-bold mb-2">{activity.title}</h3>
              <p className="font-body text-gray-700">{activity.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Call to Action */}
      <section className="text-center mt-10" data-aos="fade-up">
        <h2 className="font-header text-xl text-primary font-bold mb-2">Join the Youth Group!</h2>
        <p className="font-body text-gray-700 mb-4">Are you a young person looking for a place to belong, grow, and make a difference? We’d love to have you join us!</p>
        <a href="/contact" className="bg-gold text-primary font-bold px-6 py-3 rounded shadow hover:bg-yellow-400 transition">Contact Us to Get Involved</a>
      </section>
    </div>
  );
};

export default Youth; 