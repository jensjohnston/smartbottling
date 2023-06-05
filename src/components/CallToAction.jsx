import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-gray-100 py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center px-4">
        <h2 className="text-left leading-tight md:leading-none text-3xl md:text-8xl font-bold break-words text-center">Let&apos;s talk</h2>
        <p className="text-left text-2xl max-w-2xl mt-4 font-medium text-gray-500 text-center">Bluewater&apos;s SmartBottlingplant™ is the most advanced purification system on the market. <span className="text-gray-900">Find out why.</span></p>
          <Button href="https://sd573ixhwxd.typeform.com/to/gZX7RZNm" target="_blank" color="blue" className="mt-10">
            Contact sales
          </Button>
        </div>
      </Container>
    </section>
  )
}
