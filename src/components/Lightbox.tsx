import { useState, useCallback, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: { src: string; alt: string }[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export function Lightbox({ images, initialIndex, isOpen, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrevious();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, goToNext, goToPrevious]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 text-white/80 hover:text-white transition-colors"
        aria-label="Sluiten"
      >
        <X className="w-8 h-8" />
      </button>

      {/* Previous button */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 z-10 p-2 text-white/80 hover:text-white transition-colors"
        aria-label="Vorige foto"
      >
        <ChevronLeft className="w-10 h-10" />
      </button>

      {/* Image */}
      <div className="max-w-5xl max-h-[80vh] px-16">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="max-w-full max-h-[80vh] object-contain"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://production-bha.b-cdn.net//uploads/page_section/photo/1216/slideshow_2x_Diner_op_een_boot_in_Amsterdam.jpg';
          }}
        />
        <div className="text-center mt-4 text-white/80">
          <p>{images[currentIndex].alt}</p>
          <p className="text-sm text-white/60 mt-1">
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      </div>

      {/* Next button */}
      <button
        onClick={goToNext}
        className="absolute right-4 z-10 p-2 text-white/80 hover:text-white transition-colors"
        aria-label="Volgende foto"
      >
        <ChevronRight className="w-10 h-10" />
      </button>

      {/* Thumbnails */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-6' : 'bg-white/40'
            }`}
            aria-label={`Ga naar foto ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
