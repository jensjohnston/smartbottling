import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'

export function Hero() {
  return (
    <Container className="">
      <div className="pb-16 lg:pb-0 pt-20 text-center lg:pt-32 relative z-10">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl break-words z-10">
        Introducing SmartBottlingplant™
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700 font-medium z-10">
          Most bookkeeping software is accurate, but hard to use. We make the
          opposite trade-off, and hope you don’t get audited.
        </p>
        <div className="mt-10 flex justify-center gap-x-6 z-10">
          <Button href="/register">Let&apos;s talk</Button>
          <Button
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            variant="outline"
          >
            <svg
              aria-hidden="true"
              className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current"
            >
              <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
            </svg>
            <span className="ml-3">Watch video</span>
          </Button>
        </div>

          <div className="absolute w-full h-screen top-0">
          <video className="w-full" autoPlay loop muted>
            <source src="videos/bottling-video-web.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </Container>
  )
}
