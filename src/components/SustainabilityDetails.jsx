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
    <section className="py-20 lg:pb-96 pt-0 lg:pt-20">
        <div className="p-0">
            <div className="flex flex-col items-center justify-center">
                <div className="max-w-6xl lg:pb-6 px-4">
                    <h2 className="text-left text-4xl leading-tight md:leading-none md:text-8xl font-bold break-words">Sustainability <br /> Defined</h2>
                    <p className="text-left text-2xl max-w-2xl mt-4 font-medium text-gray-500">Stand at the vanguard of the <span className="text-gray-900">green revolution</span>. With SmartBottlingplant™, you're not just reducing plastic waste. You're actively shaping a <span className="text-gray-900">sustainable future</span>, embodying the ethos of <span className="text-gray-900">eco-luxury</span>.</p>
                </div>
                <div className="max-w-screen-md pt-8 lg:pt-20 relative">
                    <div className="flex px-4">
                    <Recycle className="h-auto w-full" />
                    </div>
                    <div className="absolute -right-1/4 sm:-right-2/4 transform top-1/2 -translate-y-1/2 -mt-96 hidden md:block">
                        <Image src={mineral} className="w-40 lg:w-80" alt="" />
                    </div>
                    <div className="absolute transform top-1/2 -translate-y-1/2 -left-12/20 waterbottle hidden md:block">
                        <Image src={deliciousWater} className="w-32 lg:w-72 rotate-45 opacity-90" alt="" />
                    </div>
                    <div className="absolute transform -bottom-2/4 -right-40  -translate-y-1/2  mt-96 hidden md:block">
                        <Image src={deliciousIce} className="w-32 lg:w-72 -rotate-45" alt="" />
                    </div>
                </div>
            </div>
      <div className="mt-4">
      </div>
    </div>
    </section>
  );
}
