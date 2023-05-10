import Head from 'next/head'

export default function Landing() {
  return (
    <div className="min-h-screen bg-tertiary">
      <Head>
        <title>Landing Page | My Personal Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container py-16">
        <h1 className="text-5xl font-bold text-center text-gray-800">
          Projects
        </h1>
        <p className="mt-8 text-xl text-center text-gray-700">
          Here you'll find information about me, my skills, and my projects.
        </p>
        </main>

        <main className="container py-16 justify-center items-center">
        <div class="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <a href="#" class="relative flex items-end justify-center py-4 px-2 bg-cover bg-center bg-gray-800 text-white">
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black"></div>
            <span class="font-bold text-lg">Project 1</span>
          </a>
          <a href="#" class="relative flex items-end justify-center py-4 px-2 bg-cover bg-center bg-gray-800 text-white">
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black"></div>
            <span class="font-bold text-lg">Project 2</span>
          </a>
          <a href="#" class="relative flex items-end justify-center py-4 px-2 bg-cover bg-center bg-gray-800 text-white">
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black"></div>
            <span class="font-bold text-lg">Project 3</span>
          </a>
        </div> 
        </main>  
    </div>
  )
}
