import React from 'react';
import Image from 'next/image';
import { motion, useTransform } from 'framer-motion';
import { useScroll } from 'framer-motion';

import feature1 from '@/images/background1.jpg'
import mineral from '@/images/mineral.png'
import deliciousWater from '@/images/delicious-bluewater-water.png'
import bottlePlant from '@/images/bottle-plant.jpg'
import deliciousIce from '@/images/delicious-blueberries.png'
import { Recycle } from '@/components/Recycle'


export function SustainabilityDetails() {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section className="py-20 lg:pb-96 pt-0 lg:pt-20">
        <div className="p-0">
            <div className="flex flex-col items-center justify-center">
                <div className="max-w-6xl lg:pb-6 px-4">
                    <h2 className="text-left text-4xl leading-tight md:leading-none md:text-8xl font-bold break-words lg:text-center">Sustainability <br /> Defined</h2>
                    <p className="text-left text-2xl max-w-2xl mt-4 font-medium text-gray-500 lg:text-center z-20 relative">Stand at the vanguard of the <span className="text-gray-900">green revolution</span>. With SmartBottlingplant™, you&apos;re not just reducing plastic waste. You&apos;re actively shaping a <span className="text-gray-900">sustainable future</span>, embodying the ethos of <span className="text-gray-900">eco-luxury</span>.</p>
                </div>
                <div className="max-w-screen-md pt-8 lg:pt-20 relative">
                    <div className="flex px-4 max-w-screen-md mx-auto justify-center">
                      <motion.div
                        className="h-auto lg:w-full max-w-screen-md overflow-hidden w-13/20"
                        style={{ rotate }}
                        transition={{ duration: 0.5 }}
                      >
                        <Recycle />
                      </motion.div>
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
