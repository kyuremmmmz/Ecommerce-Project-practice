import React from 'react'
import { FaSearch } from 'react-icons/fa'

export default function Search() {
  return (
      <div className=" relative">
          <FaSearch className=" absolute mt-3 ml-3" />
          <input className="
          placeholder:italic placeholder:text-slate-400 block
          bg-white w-auto border border-slate-300 rounded-xl
          py-2 pl-10 pr-3 shadow-sm
          focus:outline-none focus:ring-0 focus:ring-cyan-400  focus:border-cyan-300
          hover:border-cyan-300  transition-all duration-300 ease-in-out"
              placeholder="What are you looking for?"
              type="text"
              name="search" />
      </div>
  )
}
