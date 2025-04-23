import React from 'react'
import supprotImg from '@/assets/support.jpeg'
import { FaArrowRight } from 'react-icons/fa'

const Support = () => {
  return (
    <section
      name="support"
      className="mt-24 w-full">
      <div className="absolute h-[700px] w-full bg-slate-900/90">
        <img
          src={supprotImg}
          className="h-full w-full object-cover mix-blend-overlay"
          alt="support"
        />
      </div>

      <div className="relative mx-auto max-w-[1240px] text-white">
        <div className="px-4 py-12">
          <h2 className="pt-8 text-center text-3xl text-slate-300 uppercase">
            Support
          </h2>

          <h3 className="py-6 text-center text-5xl font-bold">
            We support you
          </h3>

          <p className="py-4 text-3xl text-slate-300">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 px-4 pt-12 text-black sm:pt-20 lg:grid-cols-3">
          <div className="rounded-xl bg-white shadow-2xl">
            <div className="p-8">
              <h3 className="my-6 text-2xl font-bold">Support</h3>

              <p className="text-xl text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className="bg-slate-100 py-4 pl-8">
              <p className="flex items-center text-blue-600">
                More Info...
                <FaArrowRight className="ml-2 w-5" />
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-white shadow-2xl">
            <div className="p-8">
              <h3 className="my-6 text-2xl font-bold">Support</h3>

              <p className="text-xl text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className="bg-slate-100 py-4 pl-8">
              <p className="flex items-center text-blue-600">
                More Info...
                <FaArrowRight className="ml-2 w-5" />
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-white shadow-2xl">
            <div className="p-8">
              <h3 className="my-6 text-2xl font-bold">Support</h3>

              <p className="text-xl text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className="bg-slate-100 py-4 pl-8">
              <p className="flex items-center text-blue-600">
                More Info...
                <FaArrowRight className="ml-2 w-5" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(Support)
