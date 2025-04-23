import React from 'react'
import { FaCheck } from 'react-icons/fa'

const Feature = () => {
  return (
    <section
      name="feature"
      className="my-32 w-full">
      <div className="mx-auto max-w-[1240px] px-2">
        <h2 className="text-center text-5xl font-bold">Features</h2>

        <p className="py-8 text-center text-2xl text-gray-500">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>

        <div className="grid gap-4 pt-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex">
            <FaCheck className="mt-1 mr-3 w-7 text-blue-600" />

            <div>
              <h3 className="text-lg font-bold">Real-Time</h3>

              <p className="pt-2 pb-4 text-lg">
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested.
              </p>
            </div>
          </div>

          <div className="flex">
            <FaCheck className="mt-1 mr-3 w-7 text-blue-600" />

            <div>
              <h3 className="text-lg font-bold">Real-Time</h3>

              <p className="pt-2 pb-4 text-lg">
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested.
              </p>
            </div>
          </div>

          <div className="flex">
            <FaCheck className="mt-1 mr-3 w-7 text-blue-600" />

            <div>
              <h3 className="text-lg font-bold">Real-Time</h3>

              <p className="pt-2 pb-4 text-lg">
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested.
              </p>
            </div>
          </div>

          <div className="flex">
            <FaCheck className="mt-1 mr-3 w-7 text-blue-600" />

            <div>
              <h3 className="text-lg font-bold">Real-Time</h3>

              <p className="pt-2 pb-4 text-lg">
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(Feature)
