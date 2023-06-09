import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { ArrowDown } from '@/components/ArrowDown'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'


export function Hero() {
  return (
    <Container className="">
      <div className="pb-16 lg:pb-0 pt-20 text-center lg:pt-0 relative z-10 custom-height">
        <div className="flex items-center justify-center h-full flex-col px-4 mb-8">
          <h1
            className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-tight leading-tight sm:text-7xl hyphens-manual lg:break-words z-10 relative text-white">
            A new era of water
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-white font-medium z-10 relative">
          SmartBottlingplant™ - designed to address your hotel&apos;s water needs.
          </p>
          <div className="mt-10 flex justify-center gap-x-6 z-10 relative">
            <Button href="mailto:sumit@nia.me" target="_blank" >Contact sales</Button>
            <Button className="hidden" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" variant="outline">
              <svg aria-hidden="true" className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current">
                <path
                  d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
              </svg>
              <span className="ml-3">Watch video</span>
            </Button>
          </div>
        </div>

        <div className="absolute w-full h-full top-0 bg-black overflow-hidden">
        <video className="object-cover w-full h-full opacity-70" autoPlay loop muted playsInline>
          <source src="videos/bottling-video-web.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <ArrowDown
          onClick={() => {
            document.querySelector('#smartbottling').scrollIntoView({ behavior: 'smooth' });
          }}
          className="bottom-12 md:bottom-10 absolute left-1/2 -translate-x-1/2 animate-bounce"
        />

        </div>
      </div>
    </Container>
  )
}
