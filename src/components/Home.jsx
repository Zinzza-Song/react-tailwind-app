import React from 'react'
import apple from '@/assets/apple.svg'
import google from '@/assets/google.svg'

const Home = () => {
  return (
    <section
      name="home"
      className="flex h-screen w-full bg-zinc-200">
      <div className="m-auto grid max-w-[1240px] md:grid-cols-2">
        <div className="flex w-full flex-col justify-center px-2 py-8 md:items-start">
          <p className="text-2xl">Use our chat platform.</p>

          <h1 className="py-3 text-5xl font-bold md:text-7xl">
            Chat management
          </h1>

          <p className="text-2xl">Chatty is the best chat platform.</p>

          <button className="my-4 px-6 py-3 sm:w-[60%]">Get Started</button>
        </div>

        <div className="flex flex-col justify-center px-2">
          <h2 className="xs:text-[48px] xs:leading-[76.8px] w-full text-[40px] leading-[66.8px] font-semibold">
            Easli download app <br className="hidden sm:block" />
            Google & Apple
          </h2>

          <p className="mt-5 max-w-[470px] text-[18px] leading-[30.8px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <div className="mr-6 flex flex-row flex-wrap sm:mt-10">
            <img
              alt="apple_play"
              src={apple}
              className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
            />
            <img
              alt="google_play"
              src={google}
              className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(Home)
