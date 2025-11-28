import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselSlide {
  src: string;
  alt: string;
  title: string;
  description: string;
}

interface CarouselProps {
  slides: CarouselSlide[];
  autoPlayInterval?: number;
}

export const Carousel: React.FC<CarouselProps> = ({ slides, autoPlayInterval = 4000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused && slides.length > 1) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, autoPlayInterval);

      return () => clearInterval(timer);
    }
  }, [currentSlide, isPaused, slides.length, autoPlayInterval]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  if (slides.length === 0) return null;

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <div className="relative">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 absolute inset-0'
            }`}
          >
            <div className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px]">
              <div className="absolute inset-0">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
              </div>
              <div className="relative container mx-auto px-4 sm:px-6 h-full flex items-center">
                <div className="max-w-2xl text-white">
                  <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-3 sm:mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-200">
                    {slide.description}
                  </p>
                  {index === currentSlide && (
                    <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 animate-fadeIn">
                      <a
                        href="/shop"
                        className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition flex items-center justify-center gap-2 text-sm sm:text-base"
                      >
                        Shop Now
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                      <a
                        href="/shop"
                        className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition text-sm sm:text-base text-center"
                      >
                        Explore Categories
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 p-1.5 sm:p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 p-1.5 sm:p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </>
      )}

      {/* Dots Navigation */}
      {slides.length > 1 && (
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-1.5 sm:gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 sm:h-3 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-white w-6 sm:w-8'
                  : 'bg-white/50 hover:bg-white/75 w-2 sm:w-3'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
