import React from "react";

const ProjectOne = () => {
  return (
    //top nav bar
    <>
      <div className=" min-w-full h-7">
        <div className="w-10/12 h-7 m-auto flex justify-between items-center">
          <p className=" text-slate-600 flex gap-4">
            {" "}
            <i class="fa-solid fa-location-dot"></i>Store Location: No.2A, Down
            Town Road No 7, Phum Kork Chambak,Phnom Penh
          </p>
          <div className="text-slate-600 flex justify-between space-x-4">
            <p>Eng</p>
            <p>Sign In</p>
            <p>Sing Up</p>
          </div>
        </div>

        <div className=" w-10/12 h-14 m-auto mt-10 flex justify-between items-center">
          <h1>LOOG</h1>
          <div className="flex items-center p-4 rounded-lg">
            <div className="relative">
              <i className="fa-solid fa-magnifying-glass text-slate-600 absolute left-3 top-1/2 transform -translate-y-1/2"></i>
              <input
                type="text"
                placeholder="Search"
                className="w-72 h-11 pl-10 pr-2 border-2 border-slate-600 rounded-l-lg focus:outline-none"
              />
            </div>
            <button className="bg-green-600 px-6 py-2 h-11 rounded-r-lg text-white font-serif hover:bg-green-700 transition-colors duration-300">
              Search
            </button>
          </div>

          <div className="flex space-x-6 items-center text-3xl">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-bag-shopping"></i>
            <p className="text-2xl">Shopping cart $0</p>
          </div>
        </div>
        <nav className="bg-slate-900 min-w-full h-11 mt-6 flex justify-between items-center">
          <nav className="w-10/12 flex justify-center m-auto items-center">
            <ul className="w-11/12 h-11 flex items-center text-white space-x-6 m-auto">
              <li className="hover:text-gray-400 cursor-pointer">Home</li>
              <li className="hover:text-gray-400 cursor-pointer">Shop</li>
              <li className="hover:text-gray-400 cursor-pointer">Blog</li>
              <li className="hover:text-gray-400 cursor-pointer">Pages</li>
              <li className="hover:text-gray-400 cursor-pointer">Contact</li>
            </ul>
            <h1 className="text-white font-semibold">(+855 112 013 98)</h1>
          </nav>
        </nav>
      </div>
    </>
  );
};

export default ProjectOne;
