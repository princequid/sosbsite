import React from 'react';

const events = [
  {
    title: 'Sunday Worship Service',
    date: 'July 20, 2025',
    time: '9:00 AM',
    location: 'Main Sanctuary',
    desc: 'Join us for a powerful time of worship, teaching, and fellowship.'
  },
  {
    title: 'Tuesday Bible Study',
    date: 'July 22, 2025',
    time: '6:30 PM',
    location: 'Fellowship Hall',
    desc: 'Deepen your understanding of the Word in our weekly Bible study.'
  },
  {
    title: 'Youth Fellowship',
    date: 'July 25, 2025',
    time: '4:00 PM',
    location: 'Youth Center',
    desc: 'A gathering for the youth to connect, grow, and have fun together.'
  },
  {
    title: 'Community Outreach',
    date: 'August 2, 2025',
    time: '10:00 AM',
    location: 'City Park',
    desc: 'Join us as we serve our community with love and practical help.'
  },
  {
    title: 'Annual Church Retreat',
    date: 'September 12-15, 2025',
    time: 'All Day',
    location: 'Mountain View Retreat Center',
    desc: 'A time of spiritual renewal, prayer, and fellowship away from the busyness of life.'
  },
  {
    title: 'Citywide Crusade',
    date: 'October 10, 2025',
    time: '5:00 PM',
    location: 'City Stadium',
    desc: 'Join us for a powerful crusade with guest ministers, worship, and miracles.'
  },
  {
    title: "Founder's Day Celebration",
    date: 'November 3, 2025',
    time: '11:00 AM',
    location: 'Main Sanctuary',
    desc: 'Celebrate the legacy and vision of our church founder with a special service and festivities.'
  },
];

const Events = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="font-header text-3xl md:text-4xl text-primary font-bold mb-8 text-center" data-aos="fade-up">Upcoming Events</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {events.map((event, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col" data-aos="zoom-in">
            <h2 className="font-header text-xl text-primary font-bold mb-2">{event.title}</h2>
            <div className="text-gold font-semibold mb-1">{event.date} &bull; {event.time}</div>
            <div className="font-body text-gray-700 mb-2">Location: {event.location}</div>
            <p className="font-body text-gray-700 mb-4">{event.desc}</p>
            <button className="mt-auto bg-gold text-primary font-bold px-4 py-2 rounded hover:bg-yellow-400 transition">RSVP</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events; 