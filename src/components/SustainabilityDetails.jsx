import React from 'react';
import Image from 'next/image';
import feature1 from '@/images/background1.jpg'
import bottlePlant from '@/images/bottle-plant.jpg'
import { Recycle } from '@/components/Recycle'
import { Recycle2 } from '@/components/Recycle2'
import { Recycle3 } from '@/components/Recycle3'
import { Recycle4 } from '@/components/Recycle4'

export function SustainabilityDetails() {
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
    <section className="py-40">
        <div className="p-0">
            <div className="flex flex-col items-center justify-center">
                <div className="max-w-6xl lg:pb-6">
                    <h2 className="text-left text-8xl font-bold break-words">Sustainability <br /> Defined</h2>
                    <p className="text-left text-2xl max-w-2xl mt-4 font-medium text-gray-500">Stand at the vanguard of the green revolution. With SmartBottlingplant™, you're not just reducing plastic waste. You're actively shaping a sustainable future, embodying the ethos of eco-luxury.</p>
                </div>
                <div className="max-w-screen-md pt-20">
                    <div className="flex">
                    <Recycle className="h-auto" />
                    </div>
                </div>
            </div>
      <div className="mt-4 hidden">
        <Image src={bottlePlant} alt="A water bottling plant for hotels" className="w-full" />
      </div>
      {features.map((feature, index) => (
        <div key={index} className="flex mt-4">
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
