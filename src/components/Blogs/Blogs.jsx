import React from 'react';
import blogImage1 from '../../assets/Images/Hotel1.jpeg';
import blogImage2 from '../../assets/Images/Hotel2.jpg';
import blogImage3 from '../../assets/Images/Hotel3.avif';

const blogData = [
  {
    image: blogImage1,
    title: 'Discover the Beauty of Modern Hotels',
    author: 'Admin',
    date: 'June 7, 2024',
    content: `Step into a world of luxury and comfort as we explore some of the most beautiful modern hotels around the globe. From breathtaking architecture to world-class amenities, these hotels redefine the meaning of hospitality. Whether you are planning a vacation or a business trip, discover how the right hotel can transform your experience into something truly memorable.\n\nOur featured hotel this week offers stunning views, exquisite dining, and unparalleled service. Dive into our review to find out why it stands out among the rest!`,
  },
  {
    image: blogImage2,
    title: 'A Guide to Boutique Hotel Experiences',
    author: 'Jane Doe',
    date: 'May 28, 2024',
    content: `Boutique hotels offer a unique and personalized experience for travelers seeking something different from the usual hotel chains. With their distinct character, intimate settings, and exceptional service, boutique hotels are perfect for those who value individuality and charm.\n\nExplore our top picks for boutique stays that promise unforgettable memories and a touch of luxury.`,
  },
  {
    image: blogImage3,
    title: 'Eco-Friendly Hotels: Travel Green',
    author: 'John Smith',
    date: 'May 15, 2024',
    content: `Sustainability is becoming a top priority for travelers and hoteliers alike. Eco-friendly hotels are leading the way in reducing their environmental impact while providing guests with a comfortable and responsible stay.\n\nDiscover how these hotels are making a difference and how you can contribute to a greener planet during your travels.`,
  },
];

const Blogs = () => {
  return (
    <div className="w-full bg-gray-50 min-h-screen py-10">
      <div className="flex flex-row flex-nowrap justify-start items-stretch max-w-6xl mx-auto overflow-x-auto scrollbar-thin space-x-8 px-4">
        {blogData.map((blog, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg max-w-xs w-full flex flex-col m-2 min-w-[320px]"
          >
            <img
              src={blog.image}
              alt="Blog"
              className="w-full h-56 object-cover rounded-t-2xl"
            />
            <div className="p-6 flex flex-col flex-1">
              <h1 className="text-xl font-bold mb-3 text-gray-800">
                {blog.title}
              </h1>
              <div className="text-gray-500 text-sm mb-4">
                By <span className="text-blue-500 font-medium">{blog.author}</span> | {blog.date}
              </div>
              <p className="text-gray-600 text-base leading-relaxed whitespace-pre-line flex-1">
                {blog.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;