import { testimonials } from "../assets/assets";
import StarRating from "./StarRating";
import {
  FaQuoteLeft,
  FaChevronRight,
  FaHotel,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaRegSmileBeam,
} from "react-icons/fa";
import { GiSuitcase } from "react-icons/gi";
import Title from "./Title";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

const Testimonials = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="relative overflow-hidden px-4 sm:px-6 md:px-16 lg:px-24 py-16 md:py-20 bg-white/80 backdrop-blur-sm">
      {/* Decorative elements */}
      {/* <div className="absolute top-20 left-4 sm:left-10 hidden lg:block animate-float">
        <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full shadow-lg border border-white/20"></div>
      </div>
      <div className="absolute bottom-20 right-4 sm:right-10 hidden lg:block animate-float-delay">
        <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full shadow-lg border border-white/20">
          <FaRegSmileBeam className="text-amber-400 text-xl" />
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto relative">
        {/* Title Section */}
        <div className={`text-center mb-12 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Title
            title="What our guests say"
            subTitle="What our guests are saying about their experience"
          />
        </div>

        {/* Testimonials Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`relative bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 md:duration-700 border border-white/20 transform hover:-translate-y-1 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? `${400 + index * 150}ms` : '0ms' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`relative flex-shrink-0 transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}>
                  <div className="relative">
                    <span className="profile-ring absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                    <img
                      className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full object-cover border-2 border-amber-400 shadow-md"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <div className="absolute -bottom-1 -right-1 bg-amber-500 rounded-full p-1">
                      <FaQuoteLeft className="text-white text-xs" />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-playfair text-lg sm:text-xl font-semibold text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm flex items-center">
                    <FaMapMarkerAlt className="mr-1 text-amber-500" />
                    {testimonial.address}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-4">
                <StarRating rating={testimonial.rating} />
                <span className="text-amber-500 ml-2 text-sm font-medium">
                  {testimonial.rating?.toFixed(1) || "5.0"}
                </span>
              </div>

              <div className="relative mb-6">
                <FaQuoteLeft className="absolute -top-2 -left-2 text-gray-200 text-3xl -z-10" />
                <p className="text-gray-600 italic relative z-10 text-sm sm:text-base">
                  "{testimonial.review}"
                </p>
              </div>

              {testimonial.roomType && (
                <div className="mt-4 pt-4 border-t border-gray-100 text-xs text-gray-500 flex flex-wrap gap-2">
                  <span className="flex items-center">
                    <FaHotel className="mr-1 text-amber-500" />
                    {testimonial.roomType}
                  </span>
                  <span className="flex items-center">
                    <GiSuitcase className="mr-1 text-amber-500" />
                    {testimonial.duration || "3 nights"}
                  </span>
                  <span className="flex items-center">
                    <FaCalendarAlt className="mr-1 text-amber-500" />
                    {testimonial.date || "Recently"}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className={`text-center mt-12 md:mt-16 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: isVisible ? '800ms' : '0ms' }}
        >
          <button onClick={() => navigate('/reviews')} className="my-4 group inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-xl mx-auto">
            Read More Reviews
            <FaChevronRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(-5px); }
          50% { transform: translateY(5px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 6s ease-in-out infinite 1s;
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }

        /* Profile ring and subtle pulse for avatar */
        .profile-ring {
          width: calc(100% + 16px);
          height: calc(100% + 16px);
          border-radius: 9999px;
          background: radial-gradient(closest-side, rgba(245,158,11,0.12), transparent);
          filter: blur(6px);
          opacity: 0.9;
          transform: translateZ(0);
          animation: ringPulse 3s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes ringPulse {
          0% { transform: scale(0.96); opacity: 0.9; }
          50% { transform: scale(1.08); opacity: 0.35; }
          100% { transform: scale(0.96); opacity: 0.9; }
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
