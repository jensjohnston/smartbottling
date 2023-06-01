import React from 'react';
import Image from 'next/image';
import feature1 from '@/images/background1.jpg'
import bottlePlant from '@/images/bottle-plant.jpg'

export function ProductDetails() {
  // Replace this with your actual data
  const features = [
    {
      title: 'Sustainability Defined',
      description: "Squash plastic waste, be the change.",
      media: feature1,
      alignment: 'left'
    },
    {
      title: 'Efficiency, Redefined',
      description: "Curb expenses, boost operations",
      media: "/images/feature-image2.jpg", // Path to your image
      alignment: 'right'
    },
    // ... add more features here if needed
  ];

  return (
    <section className="py-20">
        <div className="p-0">
            <div className="flex flex-col items-center justify-center">
                <div className="max-w-6xl lg:pb-6">
                    <h2 className="text-left text-8xl font-bold break-words">SmartBottlingplant™ <br /> A Leap Ahead</h2>
                    <p className="text-left text-2xl max-w-2xl mt-4 font-medium text-gray-500">SmartBottlingplant™, by Bluewater, reimagines the way you serve water. Using <span className="text-gray-900">state-of-the-art technology</span>, our system transforms tap water into <span className="text-gray-900">premium, mineral-infused hydration</span>. It's not just about serving water, but a commitment to quality, sustainability, and an <span className="text-gray-900">elevated guest experience</span>.</p>
                </div>
            </div>
      <div className="mt-4">
        <Image src={bottlePlant} alt="A water bottling plant for hotels" className="w-full" />
      </div>
      {features.map((feature, index) => (
        <div key={index} className="flex mt-4 hidden">
          {feature.alignment === 'left' ? (
            <>
              <div className="w-1/2">
                <Image src={feature.media} alt={feature.title} width={500} height={300} />
              </div>
              <div className="w-1/2">
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-base text-white">{feature.description}</p>
              </div>
            </>
          ) : (
            <>
              <div className="w-1/2">
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-base text-white">{feature.description}</p>
              </div>
              <div className="w-1/2">
                <Image src={feature.media} alt={feature.title} width={500} height={300} />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
    </section>
  );
}