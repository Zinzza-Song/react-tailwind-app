import React from 'react'

const Contact = () => {
  return (
    <section
      name="contact"
      className="h-screen w-full p-4">
      <div className="mx-auto flex h-full max-w-screen-lg flex-col justify-center p-4">
        <div className="text-center">
          <h2 className="text-5xl font-bold">Contact</h2>

          <p className="py-6 text-3xl text-gray-500">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
        </div>

        <div className="mt-10 flex items-center justify-center">
          <form className="flex w-full flex-col md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="rounded-md p-2 outline-2 outline-gray-400 focus-within:outline-blue-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="mt-4 rounded-md p-2 outline-2 outline-gray-400 focus-within:outline-blue-400"
            />

            <textarea
              name="message"
              placeholder="Enter your message"
              className="mt-4 rounded-md p-2 outline-2 outline-gray-400 focus-within:outline-blue-400"
              rows="10"></textarea>

            <button className="mx-auto my-8 bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 duration-300 hover:scale-110">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default React.memo(Contact)
