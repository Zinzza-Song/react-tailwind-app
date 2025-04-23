import React, { useState } from 'react'
import { FaAlignJustify, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  return (
    <nav className="fixed z-10 h-[80px] w-screen bg-zinc-200 drop-shadow-lg">
      <div className="flex h-full w-full items-center justify-between px-10">
        <div className="flex items-center">
          <h1 className="mr-4 text-3xl font-bold sm:text-4xl">Chatty</h1>

          <ul className="hidden md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Feature</li>
            <li>Feedback</li>
          </ul>
        </div>

        <div className="hidden pr-4 md:flex">
          <button className="mr-4 border-none bg-transparent text-slate-600">
            Sign In
          </button>

          <button className="px-8 py-3">Sign Up </button>
        </div>

        <div
          className="mr-4 cursor-pointer md:hidden"
          onClick={() => setNav(!nav)}>
          {nav ? <FaTimes /> : <FaAlignJustify />}
        </div>
      </div>

      <ul className={nav ? 'absolute w-full bg-zinc-200 px-8' : 'hidden'}>
        <li className="w-full border-b-2 border-zinc-300">Home</li>
        <li className="w-full border-b-2 border-zinc-300">About</li>
        <li className="w-full border-b-2 border-zinc-300">Support</li>
        <li className="w-full border-b-2 border-zinc-300">Feature</li>
        <li className="w-full border-b-2 border-zinc-300">Feedback</li>

        <div className="my-4 flex flex-col">
          <button className="mb-4 bg-transparent px-8 py-3 text-slate-600">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </nav>
  )
}

export default React.memo(Navbar)
