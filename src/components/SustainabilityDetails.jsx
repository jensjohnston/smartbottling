import React from 'react';
import Image from 'next/image';
import feature1 from '@/images/background1.jpg'
import mineral from '@/images/mineral.png'
import deliciousWater from '@/images/delicious-bluewater-water.png'
import bottlePlant from '@/images/bottle-plant.jpg'
import deliciousIce from '@/images/delicious-blueberries.png'
import { Recycle } from '@/components/Recycle'


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
    <section className="py-20 lg:pb-96">
        <div className="p-0">
            <div className="flex flex-col items-center justify-center">
                <div className="max-w-6xl lg:pb-6">
                    <h2 className="text-left text-8xl font-bold break-words">Sustainability <br /> Defined</h2>
                    <p className="text-left text-2xl max-w-2xl mt-4 font-medium text-gray-500">Stand at the vanguard of the green revolution. With SmartBottlingplant™, you&apos;re not just reducing plastic waste. You&apos;re actively shaping a sustainable future, embodying the ethos of eco-luxury.</p>
                </div>
                <div className="max-w-screen-md pt-20 relative">
                    <div className="flex">
                    <Recycle className="h-auto" />
                    </div>
                    <div className="absolute -right-1/4 sm:-right-2/4 transform top-1/2 -translate-y-1/2 -mt-96">
                        <Image src={mineral} className="w-80" alt="" />
                    </div>
                    <div className="absolute transform top-1/2 -translate-y-1/2 -left-12/20 waterbottle">
                        <Image src={deliciousWater} className="w-72 rotate-45 opacity-90" alt="" />
                    </div>
                    <div className="absolute transform -bottom-2/4 -right-40  -translate-y-1/2  mt-96">
                        <Image src={deliciousIce} className="w-72 -rotate-45" alt="" />
                    </div>
                </div>
            </div>
      <div className="mt-4">
      </div>
    </div>
    </section>
  );
}
