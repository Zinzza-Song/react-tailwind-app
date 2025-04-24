import React from 'react'
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitch,
  FaTwitter
} from 'react-icons/fa'

const Footer = () => {
  return (
    <section className="w-full bg-slate-700 px-2 text-gray-300">
      <div className="mx-auto grid max-w-[1240px] grid-cols-2 border-b-2 border-gray-600 py-8 md:grid-cols-6">
        <div className="text-center">
          <h6 className="pt-2 font-bold uppercase">Solutions</h6>

          <ul>
            <li className="py-1">Marketing</li>
            <li className="py-1">Analytics</li>
            <li className="py-1">Commerce</li>
            <li className="py-1">Data</li>
          </ul>
        </div>

        <div className="text-center">
          <h6 className="pt-2 font-bold uppercase">Solutions</h6>

          <ul>
            <li className="py-1">Marketing</li>
            <li className="py-1">Analytics</li>
            <li className="py-1">Commerce</li>
            <li className="py-1">Data</li>
          </ul>
        </div>

        <div className="text-center">
          <h6 className="pt-2 font-bold uppercase">Solutions</h6>

          <ul>
            <li className="py-1">Marketing</li>
            <li className="py-1">Analytics</li>
            <li className="py-1">Commerce</li>
            <li className="py-1">Data</li>
          </ul>
        </div>

        <div className="text-center">
          <h6 className="pt-2 font-bold uppercase">Solutions</h6>

          <ul>
            <li className="py-1">Marketing</li>
            <li className="py-1">Analytics</li>
            <li className="py-1">Commerce</li>
            <li className="py-1">Data</li>
          </ul>
        </div>

        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">Subscribe to our newsletter</p>

          <p className="py-4">
            The latest news, articles, and rewources, sent to your inbox weekly
          </p>

          <form className="flex flex-col sm:flex-row">
            <input
              className="mr-4 mb-4 w-full rounded-md bg-white p-2 text-gray-900"
              type="email"
              placeholder="Enter email..."
            />

            <button className="mb-4 p-2">Subscrbe</button>
          </form>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1240px] flex-col justify-between px-2 py-4 text-center text-gray-500 sm:flex-row">
        <p className="py-4">2025 Chatty, mLLc. All rights reserved</p>

        <div className="flex justify-between pt-4 text-2xl sm:w-[300px]">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaTwitch />
          <FaGithub />
        </div>
      </div>
    </section>
  )
}

export default React.memo(Footer)
