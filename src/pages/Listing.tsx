import Search from '@/features/listing/Search';
import { CiBookmark } from 'react-icons/ci';
import { BsChatLeftDots } from 'react-icons/bs';
import { useState } from 'react';
import logo from '@/assets/hero.png';
import { IoBedOutline } from 'react-icons/io5';
import { FaShower } from 'react-icons/fa';
import { MdOutlineLocationOn } from 'react-icons/md';
import Map from '@/lib/Map';
const Listing = () => {
  const [saved, setSaved] = useState(false);
  return (
    <div className="container mx-auto my-3 flex flex-col md:flex-row h-screen w-screen gap-3 ">
      <div className="md:w-8/12 px-2 md:px-0 h-full">
        <Search />
        <div className="flex h-32 gap-3">
          <img src={logo} alt="" className=" w-40 object-cover rounded-md" />
          <div className="flex flex-col justify-between w-full">
            <div>
              <h1 className=" font-medium tracking-tight mb-2">An Apartment</h1>
              <address className="text-xs text-gray-500 mb-2 inline-flex items-center gap-1">
                <MdOutlineLocationOn />
                456 Avenue, London
              </address>
              <p className="text-xs mb-1 bg-indigo-500 w-fit px-1 rounded-sm text-white">$1000</p>
            </div>
            <div className="flex justify-between items-center text-xs ">
              <div className="flex items-center gap-3">
                <p className="px-1 bg-gray-100 w-fit rounded-sm inline-flex items-center gap-2">
                  <IoBedOutline />
                  <span> 3 bedroom</span>
                </p>
                <p className="px-1 bg-gray-100 w-fit rounded-sm inline-flex items-center gap-2">
                  <FaShower />
                  <span> 1 bathroom</span>
                </p>
              </div>
              <div className="flex gap-2 p-1">
                <span
                  onClick={() => setSaved((prev) => !prev)}
                  className={`${
                    saved ? 'bg-indigo-500 text-white border-indigo-500 scale-110' : ''
                  } border border-gray-300 hover:border-indigo-500 p-0.5 cursor-pointer rounded-sm hover:bg-indigo-500  hover:text-white transition ease-in-out duration-300`}
                >
                  <CiBookmark className="w-4 h-3 " />
                </span>
                <span className="border border-gray-300 hover:border-indigo-500 p-0.5 cursor-pointer rounded-sm hover:bg-indigo-500  hover:text-white transition ease-in-out duration-300">
                  <BsChatLeftDots className="w-4 h-3 " />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto   md:w-1/3  flex-2 ">
        <div className="w-full h-full ">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Listing;
