import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Bengaluru, India",
    rating: 5,
    comment: "Our trip to the Andaman Islands was truly unforgettable! The pristine beaches and crystal-clear waters were breathtaking. We highly recommend Luxury Andamans for their exceptional service and seamless arrangements.",
    image: "https://plus.unsplash.com/premium_photo-1682089781034-a214f5768d58?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Amit & Deepa",
    location: "Delhi, India",
    rating: 5,
    comment: "Luxury Andamans crafted the perfect romantic getaway for us. From the serene sunsets to thrilling water sports, every moment was magical. The team was incredibly helpful and ensured we had a worry-free vacation.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&q=80&w=1470&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Sneha & Rahul",
    location: "Mumbai, India",
    rating: 5,
    comment: "An amazing adventure for our family! The kids absolutely loved the snorkeling and glass-bottom boat rides. Luxury Andamans made sure our trip was comfortable and filled with joyous memories. We can't wait to visit again!",
    image: "https://images.unsplash.com/photo-1648037011755-ff3f1b62364c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-turquoise/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-coral text-sm font-semibold uppercase tracking-wider">
            Guest Reviews
          </span>
          <h2 className="text-4xl font-bold text-turquoise mt-2 mb-4">
            What Our Guests Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read authentic reviews from our valued guests who have experienced 
            the magic of the Andaman Islands with us
          </p>
        </motion.div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl p-6 shadow-lg relative"
              >
                <Quote className="absolute top-6 right-6 w-12 h-12 text-coral/10" />
                
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-coral fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-600 italic">"{testimonial.comment}"</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;