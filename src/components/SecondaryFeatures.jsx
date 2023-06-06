import { useId } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import screenshotContacts from '@/images/screenshots/contacts.png'
import screenshotInventory from '@/images/screenshots/inventory.png'
import screenshotProfitLoss from '@/images/screenshots/profit-loss.png'
import before from '@/images/before.jpg'

import { Dollar } from '@/components/dollar'
import { PlayIcon } from '@/components/PlayIcon'
import { Checkmark } from '@/components/Checkmark'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const MagicHatAnimated = ({ className }) => {
  const [ref, inView] = useInView({
      triggerOnce: true, // Change it to false if you want the animation to trigger again whenever it comes into view
  });

  return (
      <svg
          ref={ref}
          className={className}
          width="180"
          height="180"
          viewBox="0 0 180 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
      >
          <g clipPath="url(#clip0_9416_7906)">
              <motion.path
                  d="M121.18 53.8346C121.18 51.4999 120.926 40.9725 112.691 32.61C102.885 22.6344 89.7256 23.823 87.2211 24.1201C72.0243 25.8605 57.3793 39.3169 57.5066 53.8346C57.634 71.8755 80.3443 82.3604 82.9762 83.549C96.8995 89.789 104.031 84.6527 112.691 92.0388C120.459 98.7034 124.322 111.014 121.18 121.753C116.808 136.568 100.38 143.827 87.2211 142.978C70.8781 141.917 56.2756 128.036 53.2617 109.019"
                  stroke="#3B82F6"
                  strokeWidth="12.7348"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: inView ? 1 : 0, opacity: inView ? 1 : 1 }}
                  transition={{ duration: 2 }}
              />
              <motion.path
                  d="M87.2266 11.3843V164.201"
                  stroke="#3B82F6"
                  strokeWidth="12.7348"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: inView ? 1 : 0, opacity: inView ? 1 : 1 }}
                  transition={{ duration: 2 }}
              />
          </g>
      </svg>
  );
};



const MagicHatAnimated3 = ({ className }) => {
  const [ref, inView] = useInView({
      triggerOnce: true, // Change it to false if you want the animation to trigger again whenever it comes into view
  });

  return (
      <svg
          ref={ref}
          className={className}
          width="180"
          height="76"
          viewBox="0 0 180 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
      >
          <g clipPath="url(#clip0_9416_7906)">
              <motion.path
                  d="M78.2566 52.0335C48.0228 95.981 5.05833 41.7918 30.4565 17.868C40.2861 8.60921 55.4584 8.08602 66.5404 15.8228C88.6885 31.2647 100.341 68.0778 132.16 64.7168C190.598 48.9578 130.702 -25.2551 100.452 23.4962"
                  stroke="#3B82F6"
                  strokeWidth="12.7348"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: inView ? 1 : 0 }}
                  transition={{ duration: 2 }}
              />
          </g>
      </svg>
  );
};

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pb-14 pt-0 sm:pb-20 sm:pt-0 lg:pb-32 sm:px-6 lg:px-8"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center px-4 md:px-0">
        <h2 className="text-left text-4xl leading-tight md:leading-none md:text-8xl font-bold break-words text-left md:text-center">Efficiency <br /> elevated</h2>
        <p className="text-left text-2xl max-w-2xl mt-4 font-medium text-gray-500 lg:text-center">Unleash the power of simplicity with Bluewater&apos;s SmartBottlingplant™. Experience <span className="text-gray-900">savings</span>, <span className="text-gray-900">streamlined operations</span> and effortless automation, all engineered for your convenience.</p>
        </div>
        <div className="grid grid-cols-2 max-w-6xl mx-auto mt-8 lg:mt-20 gap-6 px-4 md:px-0">
        <div className="col-span-2 md:col-span-2 bg-gray-50 p-10 rounded-4xl">
          <div className="h-full flex flex-col items-center">
            <div className="grid md:mt-20 mt-0">
              <h3 className="font-bold text-gray-900 text-3xl md:text-6xl text-center">Lower Costs, Higher Profits</h3>
            </div>
            <div className="relative w-full flex-grow flex justify-center items-center">
            <MagicHatAnimated className="h-full w-full lg:w-1/2 lg:mt-20 mt-4" />
            </div>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 bg-gray-50 rounded-4xl">
          <div className="h-full flex flex-col items-center">
            <div className="relative w-full h-full flex-grow flex items-center">
            <Image src={before} className="object-cover rounded-4xl" alt="" />
            </div>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 bg-gray-50 rounded-4xl h-120 md:h-full">
          <div className="h-full flex flex-col items-center relative">
            <div className="grid md:mt-0 mt-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <h3 className="font-bold text-gray-900 text-8xl md:text-9xl text-center z-20">After</h3>
            </div>
            <div className="relative w-full h-full flex-grow flex items-center">
            <video className="object-cover w-full h-full opacity-100 rounded-4xl" autoPlay loop muted playsInline>
              <source src="videos/bottling-video-web.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            </div>
          </div>
        </div>
        <div className="col-span-2 md:col-span-2 bg-gray-50 p-10 rounded-4xl">
          <div className="h-full flex flex-col items-center">
            <div className="grid md:mt-20 mt-0">
              <h3 className="font-bold text-gray-900 text-3xl md:text-6xl text-center md:text-center">Consistent, Trustworthy Performance</h3>
            </div>
            <div className="relative w-full flex-grow flex justify-center items-center">
            <MagicHatAnimated3 className="w-full lg:w-1/2  mt-4 lg:mt-20 h-64 lg:h-full lg:mb-20" />
            </div>
          </div>
        </div>
        </div>
      </Container>
    </section>
  )
}
