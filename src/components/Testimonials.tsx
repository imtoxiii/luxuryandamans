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
    <section className="py-24 bg-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900 via-blue-900/95 to-blue-800" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[128px] opacity-20" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500 rounded-full blur-[128px] opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 mb-6">
            <Star className="w-4 h-4 fill-blue-200" />
            <span className="text-sm font-bold tracking-wide uppercase">Guest Reviews</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display tracking-tight">
            Stories of Paradise
          </h2>
          <p className="text-blue-100/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            Read authentic reviews from our valued guests who have experienced 
            the magic of the Andaman Islands with us.
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
          pagination={{ 
            clickable: true,
            bulletActiveClass: 'swiper-pagination-bullet-active bg-white',
            bulletClass: 'swiper-pagination-bullet bg-white/30'
          }}
          autoplay={{ delay: 5000 }}
          className="pb-16"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-md rounded-[2rem] p-8 border border-white/10 hover:bg-white/15 transition-all duration-300 group h-full"
              >
                <Quote className="w-12 h-12 text-blue-400/30 mb-6 group-hover:text-blue-400/50 transition-colors" />
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/20">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-blue-900">
                      <Quote className="w-3 h-3 text-white fill-current" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-blue-200">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1"
                    />
                  ))}
                </div>

                <p className="text-blue-50/90 italic leading-relaxed">"{testimonial.comment}"</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;