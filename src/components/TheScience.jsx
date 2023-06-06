import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer'
import { useId } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import screenshotContacts from '@/images/screenshots/contacts.png'
import screenshotInventory from '@/images/screenshots/inventory.png'
import screenshotProfitLoss from '@/images/screenshots/profit-loss.png'

import { Dollar } from '@/components/dollar'
import { PlayIcon } from '@/components/PlayIcon'
import { Checkmark } from '@/components/Checkmark'

export function TheScience() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0.1, 1], [0.2, 2])

  const [ref, inView] = useInView({
    triggerOnce: true,
  })

  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pb-14 pt-0 sm:pb-20 sm:pt-0 lg:pb-32 sm:px-6 lg:px-8"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center px-4">
          <h2 className="text-4xl leading-tight md:leading-none md:text-8xl font-bold break-words text-left lg:text-center text-gray-950">Superior Hydration</h2>
          <p className="text-left text-2xl max-w-2xl mt-4 font-medium text-gray-500 lg:text-center">Delivering a <span className="text-gray-900">meticulously balanced blend</span> of essential minerals. Experience the vitality of <span className="text-gray-900">2 parts calcium to 1 part magnesium</span> – the foundation for optimal health and peak performance.</p>
        </div>
        <div ref={ref} className="flex items-center justify-center max-w-6xl mx-auto gap-6 h-64 lg:h-160 lg:mb-32">
          {inView && (
            <motion.p className={`text-75vw md:text-65vw font-bold ${inView ? 'blue-gradient' : ''}`} style={{ scale }} > 2:1 </motion.p> 
          )}
        </div>
      </Container>
    </section>
  )
}
