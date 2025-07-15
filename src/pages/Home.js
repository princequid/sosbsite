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
      <section className="relative h-[80vh] flex items-center justify-center bg-center bg-cover bg-no-repeat" 
               style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80')" }}
               data-aos="fade-up">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-olive/80"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          {/* Decorative Icon */}
          <div className="mb-6" data-aos="fade-down" data-aos-delay="200">
            <div className="inline-block bg-gold/20 backdrop-blur-sm rounded-full p-4 border border-gold/30">
              <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21C12 21 4 13.5 4 8.5C4 5.5 6.5 3 9.5 3C11.04 3 12.5 4 13 5.09C13.5 4 14.96 3 16.5 3C19.5 3 22 5.5 22 8.5C22 13.5 12 21 12 21Z"/>
              </svg>
            </div>
          </div>
          
          {/* Main Headline */}
          <h1 className="font-header text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-2xl tracking-wide" 
              data-aos="fade-up" data-aos-delay="300">
            SACRED ORDER OF THE <span className="text-gold">SILENT BROTHERHOOD</span>
          </h1>
          
          {/* Subheadline */}
          <p className="font-body text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg" 
             data-aos="fade-up" data-aos-delay="400">
            Welcome to a place of peace, faith, and fellowship. Join our community in spiritual growth and service.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" data-aos="fade-up" data-aos-delay="500">
            <a href="#events" 
               className="font-header bg-gold text-primary font-bold px-8 py-4 rounded-full shadow-2xl hover:bg-yellow-400 transition-all duration-300 text-lg tracking-wide transform hover:scale-105">
              Join Our Fellowship
            </a>
            <a href="/sermons" 
               className="font-header bg-white/10 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-full shadow-2xl hover:bg-white/20 transition-all duration-300 text-lg tracking-wide border border-white/30 transform hover:scale-105">
              Watch Sermons
            </a>
          </div>
          
          {/* Social Proof */}
          <div className="mt-12 flex items-center justify-center space-x-8 text-sm" data-aos="fade-up" data-aos-delay="600">
            <div className="text-center">
              <div className="font-header text-2xl font-bold text-gold">500+</div>
              <div className="text-white/80">Active Members</div>
            </div>
            <div className="w-px h-8 bg-white/30"></div>
            <div className="text-center">
              <div className="font-header text-2xl font-bold text-gold">25+</div>
              <div className="text-white/80">Years of Service</div>
            </div>
            <div className="w-px h-8 bg-white/30"></div>
            <div className="text-center">
              <div className="font-header text-2xl font-bold text-gold">100%</div>
              <div className="text-white/80">Community Focused</div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" data-aos="fade-up" data-aos-delay="700">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </svg>
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
          <h2 className="font-header text-2xl md:text-3xl font-extrabold mb-2 text-primary tracking-wide">Our Mission</h2>
          <p className="font-body text-lg text-charcoal">To foster spiritual growth, unity, and service through the teachings of Christ and the power of silent brotherhood.</p>
        </div>
      </section>

      {/* About the Brotherhood */}
      <section className="py-12 bg-gray-50" data-aos="fade-left">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            {/* <img src={aboutImg} alt="About Brotherhood" className="rounded-lg shadow-lg w-full" /> */}
            <div className="bg-olive h-48 w-full rounded-lg shadow-lg flex items-center justify-center text-white font-header text-2xl font-extrabold tracking-wide">[Image]</div>
          </div>
          <div className="flex-1">
            <h3 className="font-header text-xl md:text-2xl font-extrabold mb-2 text-primary tracking-wide">About the Brotherhood</h3>
            <p className="font-body text-lg text-charcoal">The Sacred Order of Silent Brotherhood is a community rooted in faith, compassion, and the pursuit of spiritual enlightenment. We welcome all who seek peace and purpose in Christ.</p>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-12 bg-white text-center" data-aos="fade-up">
        <h3 className="font-header text-xl md:text-2xl font-extrabold mb-4 text-primary tracking-wide">Service Times</h3>
        <div className="flex flex-col md:flex-row justify-center gap-8 font-body text-lg">
          <div>
            <span className="block font-extrabold text-gold">Sunday</span>
            <span className="font-body text-charcoal">9:00 AM</span>
          </div>
          <div>
            <span className="block font-extrabold text-gold">Tuesday Bible Study</span>
            <span className="font-body text-charcoal">6:30 PM</span>
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-header text-xl md:text-2xl font-extrabold text-primary tracking-wide">Upcoming Events</h3>
            <a href="/events" className="font-header text-gold font-bold hover:underline tracking-wide">View All</a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {events.slice(0, 3).map((event, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col" data-aos="zoom-in">
                <h4 className="font-header text-lg font-extrabold text-primary mb-2 tracking-wide">{event.title}</h4>
                <div className="text-gold font-semibold mb-1 font-header">{event.date} &bull; {event.time}</div>
                <p className="font-body text-lg text-charcoal mb-4">{event.desc}</p>
                <a href="/events" className="mt-auto font-header text-primary font-bold hover:text-gold tracking-wide">Learn More</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 