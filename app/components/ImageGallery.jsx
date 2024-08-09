"use client";
import Image from 'next/image';
import { useState } from 'react';

export default function Gallery() {
  const images = [
    { src: '/dozer.png', alt: 'Yellow Dozer' },
    { src: '/excavator.png', alt: 'Yellow Excavator' },
    { src: '/jcb1.jpg', alt: 'Yellow Excavator' },
    { src: '/loader2.png', alt: 'Yellow Excavator' },
    { src: '/articulatruck1.jpeg-removebg-preview.png', alt: 'Yellow Excavator' },
  ];

  // Initialize with the src of the first image
  const [selectedImage, setSelectedImage] = useState(images[0].src);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="relative w-full max-w-4xl h-96">
        <Image
          src={selectedImage}
          alt="Selected Image"
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>

      <div className="flex mt-4 space-x-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image.src)}
            className={`w-10 h-10 border-2 ${
              selectedImage === image.src ? 'border-green-500' : 'border-gray-300'
            }`}
          >
            <Image src={image.src} alt={image.alt} width={40} height={40} className="rounded" />
          </button>
        ))}
      </div>
    </div>
  );
}
