import React, { useState } from 'react'
import { FaAlignJustify, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  return (
    <nav className="fixed z-10 h-[80px] w-screen bg-zinc-200 drop-shadow-lg">
      <div className="flex h-full w-full items-center justify-between px-10">
        <div className="flex items-center">
          <h1 className="mr-4 text-3xl font-bold sm:text-4xl">Chatty</h1>

          <ul className="hidden md:flex">
            <li className="cursor-pointer">
              <Link
                to="home"
                smooth={true}
                duration={500}>
                Home
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to="about"
                smooth={true}
                duration={500}>
                About
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to="support"
                smooth={true}
                duration={500}>
                Support
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to="feature"
                smooth={true}
                duration={500}>
                Feature
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to="testimonials"
                smooth={true}
                duration={500}>
                Feedback
              </Link>
            </li>
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
        <li className="w-full cursor-pointer border-b-2 border-zinc-300">
          <Link
            onClick={() => setNav(false)}
            to="home"
            smooth={true}
            duration={500}>
            Home
          </Link>
        </li>
        <li className="w-full cursor-pointer border-b-2 border-zinc-300">
          <Link
            onClick={() => setNav(false)}
            to="about"
            smooth={true}
            duration={500}>
            About
          </Link>
        </li>
        <li className="w-full cursor-pointer border-b-2 border-zinc-300">
          <Link
            onClick={() => setNav(false)}
            to="support"
            smooth={true}
            duration={500}>
            Support
          </Link>
        </li>
        <li className="w-full cursor-pointer border-b-2 border-zinc-300">
          <Link
            onClick={() => setNav(false)}
            to="feature"
            smooth={true}
            duration={500}>
            Feature
          </Link>
        </li>
        <li className="w-full cursor-pointer border-b-2 border-zinc-300">
          <Link
            onClick={() => setNav(false)}
            to="testimonials"
            smooth={true}
            duration={500}>
            Feedback
          </Link>
        </li>

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
