import React from 'react';

const sermons = [
  {
    title: 'THE SEEING EYES - Accessing the Gift of Sight',
    date: 'July 6, 2025',
    video: 'https://www.youtube.com/embed/sRUnQreDv1g',
    desc: 'Apostle Joshua Selman teaches on the spiritual gift of sight and how to access it.'
  },
  {
    title: 'THERE SHALL BE NO LOSS (Prophetic Service)',
    date: 'June 29, 2025',
    video: 'https://www.youtube.com/embed/C4KGpeigI0k',
    desc: 'A prophetic message by Apostle Joshua Selman on divine preservation and restoration.'
  },
  {
    title: 'NEW MONTH APRIL 2025 PROPHETIC PRAYERS TO PROSPER',
    date: 'June 22, 2025',
    video: 'https://www.youtube.com/embed/Y8GGIFXwzBE',
    desc: 'Prophetic prayers for prosperity and breakthrough by Apostle Joshua Selman.'
  },
  {
    title: 'WHEN WE PRAY (The Wonders of Consistent Prayer)',
    date: 'June 15, 2025',
    video: 'https://www.youtube.com/embed/EVf7FqiiaPk',
    desc: 'Apostle Joshua Selman reveals the power and wonders of consistent prayer.'
  },
  {
    title: 'The Secret about Prayer',
    date: 'June 8, 2025',
    video: 'https://www.youtube.com/embed/TeN-5RqWv3A',
    desc: 'Apostle Joshua Selman shares deep secrets about prayer with his spiritual sons and daughters.'
  },
];

const Sermons = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="font-header text-3xl md:text-4xl text-primary font-bold mb-8 text-center" data-aos="fade-up">Sermons</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {sermons.map((sermon, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col" data-aos="zoom-in">
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <iframe
                src={sermon.video}
                title={sermon.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-48 rounded"
              />
            </div>
            <h2 className="font-header text-xl text-primary font-bold mb-1">{sermon.title}</h2>
            <div className="text-gold font-semibold mb-2">{sermon.date}</div>
            <p className="font-body text-gray-700 mb-2">{sermon.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sermons; 