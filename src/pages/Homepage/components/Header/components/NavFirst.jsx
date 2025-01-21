import React from "react";
import { FaEnvelope, FaLinkedin, FaRegClock, FaYoutube } from "react-icons/fa";
import fb from "../../../../../assets/facebook.png";
import instagram from "../../../../../assets/instagram.png";
import twitter from '../../../../../assets/twitter.png'
const NavFirst = () => {
  return (
    <nav className="bg-[#22487F] text-white hidden lg:block h-10 w-full">
      <div className="md:w-[95%] lg:w-[85%] mx-auto flex justify-between items-center ">
        {/* <ul className='mx-auto w-full h-full border-box  flex justify-between gap-x-3 items-center'> */}
        <div className=" lg:w-[70%] hidden lg:flex  items-center justify-start gap-6 ">
          <li className="flex justify-center gap-2 text-base 2xl:text-lg">
            <a
              className="flex justify-center gap-2 text-base 2xl:text-lg"
              href="mailto:info@flyawayparking.co.uk"
            >
              <span>
                {" "}
                <FaEnvelope className="mt-1 2xl:mt-2" />{" "}
              </span>{" "}
              <span> info@flyawayparking.co.uk </span>
            </a>
          </li>

          <span className="text-2xl"> | </span>
          <li className="flex justify-center gap-2 text-base 2xl:text-lg">
            <span>
              {" "}
              <FaRegClock className="mt-1 2xl:mt-2 text-base 2xl:text-lg" />{" "}
            </span>{" "}
            <span> Mon - Fri 9:00 A.M - 5:00 P.M </span>
          </li>
        </div>
        <div className="flex items-center  justify-center lg:justify-end gap-5 w-full lg:w-[30%]  mx-auto">
          <h4 className="text-base mt-2">Follow On </h4>
          <li className="flex justify-center gap-2 text-lg ">
            <a
              className="flex justify-center gap-2  text-sm lg:text-lg"
              href="/"
            >
              <span>
                {" "}
                <img
                  src={fb}
                  alt="facebook flyaway"
                  className="mt-2 h-[20px] w-[20px]"
                />{" "}
              </span>{" "}
            </a>
          </li>
          <span className="text-2xl mt-1 lg:mt-0"> | </span>
          <li className="flex justify-center gap-0 text-lg">
            <a
              className="flex justify-center gap-0  text-sm lg:text-lg"
              href="/"
            >
              <span>
                {" "}
                <img
                  src={twitter}
                  alt="facebook flyaway"
                  className="mt-2 h-[18px] w-[20px] rounded-sm bg-white"
                />
                {" "}
              </span>{" "}
            </a>
          </li>
          <span className="text-2xl mt-1 lg:mt-0"> | </span>
          <li className="flex justify-center gap-2 text-lg">
            <a
              className="flex justify-center gap-2  text-sm lg:text-lg"
              href="/"
            >
              <span>
                {" "}
                <img
                  src={instagram}
                  alt="facebook flyaway"
                  className="mt-2 h-[20px] w-[20px]"
                />{" "}
              </span>{" "}
            </a>
          </li>
          <span className="text-2xl mt-1 lg:mt-0"> | </span>
          <li className="flex justify-center gap-2">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0A66C2] rounded-base p-1 mt-2"
            >
              <FaLinkedin className="text-white text-base " />
            </a>

          </li>
          <span className="text-2xl mt-1 lg:mt-0"> | </span>
          <li className="flex justify-center gap-2">
            
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF0000] rounded-base px-[3px] py-[2px] mt-2"
            >
              <FaYoutube className="text-white text-base " />
            </a>
          </li>



        </div>
      </div>
    </nav>
  );
};

export default NavFirst;
