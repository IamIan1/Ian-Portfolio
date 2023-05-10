import Head from 'next/head'
import Image from 'next/image';

export default function Landing() {
  return (
    <div className="min-h-screen bg-tertiary">
      <Head>
        <title>Landing Page | My Personal Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                I am Ian. Welcome to my site!
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Howdy, my name is Ian Sabolik.
                I am a Computer Science student at Texas A&M, 
                who has a particular interest in making cool things.
                This site demonstrates some of the cool things that I've made,
                and also showcases my knoweledge and experience.
              </p>
              <div className="mt-8 flex flex-col md:flex-row items-center justify-between">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-gray-900">Squirtle</p>
                  <p className="mt-3 text-base text-gray-500">
                    Here's an image of a Squritle:
                  </p>
                </div>
                <div className="mt-6 flex-none">
                  <Image
                    src="/images/Squirtle_Stand02.jpg"
                    alt="Picture of me doing something cool"
                    width={300}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
