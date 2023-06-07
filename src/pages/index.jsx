import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { ProductDetails } from '@/components/ProductDetails'
import { SustainabilityDetails } from '@/components/SustainabilityDetails'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { TheScience } from '@/components/TheScience'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bluewater - A new era of water</title>
        <meta
          name="description"
          content="Revolutionize hydration with SmartBottlingplant™ for hotels."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <ProductDetails />
        <SustainabilityDetails />
        <SecondaryFeatures />
        <TheScience />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
