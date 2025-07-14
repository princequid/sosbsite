import React from 'react';
// import heroImg from '../assets/hero.jpg'; // Placeholder for hero image

const events = [
  { title: 'Sunday Worship', date: 'July 20, 2025', time: '9:00 AM', desc: 'Join us for our weekly worship service.' },
  { title: 'Bible Study', date: 'July 22, 2025', time: '6:30 PM', desc: 'Deepen your faith with our Tuesday Bible Study.' },
  { title: 'Youth Fellowship', date: 'July 25, 2025', time: '4:00 PM', desc: 'A gathering for the youth to connect and grow.' },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary to-olive" data-aos="fade-up">
        {/* <img src={heroImg} alt="Church" className="absolute inset-0 w-full h-full object-cover opacity-60" /> */}
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 text-center text-white flex flex-col items-center">
          {/* <img src={logo} alt="Church Logo" className="h-20 mb-4" /> */}
          <h1 className="font-header text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg">SACRED ORDER OF SILENT BROTHERHOOD</h1>
          <p className="text-lg md:text-2xl mb-6 font-body">Welcome to a place of peace, faith, and fellowship.</p>
          <div className="flex space-x-4 justify-center">
            <a href="#" className="bg-gold text-primary font-bold px-6 py-3 rounded shadow hover:bg-yellow-400 transition">Join Our Fellowship</a>
            <a href="#" className="bg-white text-primary font-bold px-6 py-3 rounded shadow hover:bg-gray-200 transition">Watch Sermons</a>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-12 bg-white text-center" data-aos="fade-right">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center mb-4">
            <span className="inline-block bg-gold rounded-full p-3">
              {/* Icon: Heart or similar spiritual icon */}
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21C12 21 4 13.5 4 8.5C4 5.5 6.5 3 9.5 3C11.04 3 12.5 4 13 5.09C13.5 4 14.96 3 16.5 3C19.5 3 22 5.5 22 8.5C22 13.5 12 21 12 21Z"/></svg>
            </span>
          </div>
          <h2 className="font-header text-2xl md:text-3xl mb-2">Our Mission</h2>
          <p className="font-body text-lg text-gray-700">To foster spiritual growth, unity, and service through the teachings of Christ and the power of silent brotherhood.</p>
        </div>
      </section>

      {/* About the Brotherhood */}
      <section className="py-12 bg-gray-50" data-aos="fade-left">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            {/* <img src={aboutImg} alt="About Brotherhood" className="rounded-lg shadow-lg w-full" /> */}
            <div className="bg-olive h-48 w-full rounded-lg shadow-lg flex items-center justify-center text-white font-header text-2xl">[Image]</div>
          </div>
          <div className="flex-1">
            <h3 className="font-header text-xl md:text-2xl mb-2 text-primary">About the Brotherhood</h3>
            <p className="font-body text-gray-700">The Sacred Order of Silent Brotherhood is a community rooted in faith, compassion, and the pursuit of spiritual enlightenment. We welcome all who seek peace and purpose in Christ.</p>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-12 bg-white text-center" data-aos="fade-up">
        <h3 className="font-header text-xl md:text-2xl mb-4 text-primary">Service Times</h3>
        <div className="flex flex-col md:flex-row justify-center gap-8 font-body text-lg">
          <div>
            <span className="block font-bold text-gold">Sunday</span>
            9:00 AM
          </div>
          <div>
            <span className="block font-bold text-gold">Tuesday Bible Study</span>
            6:30 PM
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-header text-xl md:text-2xl text-primary">Upcoming Events</h3>
            <a href="/events" className="text-gold font-bold hover:underline">View All</a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {events.slice(0, 3).map((event, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col" data-aos="zoom-in">
                <h4 className="font-header text-lg text-primary mb-2">{event.title}</h4>
                <div className="text-gold font-semibold mb-1">{event.date} &bull; {event.time}</div>
                <p className="font-body text-gray-700 mb-4">{event.desc}</p>
                <a href="/events" className="mt-auto text-primary font-bold hover:text-gold">Learn More</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 