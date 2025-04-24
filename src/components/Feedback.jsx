import React from 'react'

const Feedback = () => {
  const image = 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc'

  return (
    <section
      name="testimonials"
      className="my-24 w-full bg-slate-700 text-white">
      <div className="max-x-6xl mx-auto px-5 py-12 text-center">
        <h2 className="text-4xl font-bold">Testimonials</h2>

        <p className="py-8 text-2xl">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit...
        </p>

        <div className="mt-24 flex flex-col md:flex-row md:space-x-6">
          <div className="flex flex-col items-center space-y-6 rounded-lg bg-gray-100/30 p-6 md:w-1/3">
            <img
              src={image}
              className="-mt-14 w-16 rounded-full"
              alt="person"
            />

            <h5 className="text-lg font-bold">person</h5>

            <p className="text-sm">
              There is no one who loves pain itself, who seeks after it and
              wants to have it, simply because it is pain...
            </p>
          </div>

          <div className="hidden md:flex flex-col items-center space-y-6 rounded-lg bg-gray-100/30 p-6 md:w-1/3">
            <img
              src={image}
              className="-mt-14 w-16 rounded-full"
              alt="person"
            />

            <h5 className="text-lg font-bold">person</h5>

            <p className="text-sm">
              There is no one who loves pain itself, who seeks after it and
              wants to have it, simply because it is pain...
            </p>
          </div>

          <div className="hidden md:flex flex-col items-center space-y-6 rounded-lg bg-gray-100/30 p-6 md:w-1/3">
            <img
              src={image}
              className="-mt-14 w-16 rounded-full"
              alt="person"
            />

            <h5 className="text-lg font-bold">person</h5>

            <p className="text-sm">
              There is no one who loves pain itself, who seeks after it and
              wants to have it, simply because it is pain...
            </p>
          </div>
        </div>

        <button className="my-8 bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 duration-300 hover:scale-110">
          Get Started
        </button>
      </div>
    </section>
  )
}

export default React.memo(Feedback)
