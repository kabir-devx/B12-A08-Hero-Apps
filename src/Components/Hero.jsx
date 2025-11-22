import React from "react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div>
      <div className="hero pt-20 bg-[#f5f5f5]">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-7xl text-[#001931] font-bold">
              We Build{" "}
              <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                <br />
                Productive{" "}
              </span>{" "}
              Apps
            </h1>
            <p className="py-6 text-[#627382] ">
              At HERO.IO , we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting. <br /> Our goal is to
              turn your ideas into digital experiences that truly make an
              impact.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                to={"https://play.google.com/store/apps?hl=en_GB"}
                className="flex btn w-[200px] items-center justify-center h-14 rounded-sm bg-white transition"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/16076/16076057.png"
                  alt="Google Play"
                  className="w-8"
                />
                <span className="text-xl font-bold">Google Play</span>
              </Link>
              <Link
                to={"https://apps.apple.com/us/iphone/apps"}
                className="flex items-center btn w-[200px] h-14 justify-center rounded-sm bg-white transition"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/16566/16566128.png"
                  alt="App Store"
                  className="w-8"
                />
                <span className="text-xl font-bold">App Store</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-[#f5f5f5] ">
        <img className="" src="/src/assets/hero.png" alt="" />
      </div>
      <div className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] w-full h-[410px] flex gap-10 text-center flex-col justify-center text-white">
        <h1 className="text-5xl font-bold">
          Trusted by Millions, Built for You
        </h1>
        <div className="flex justify-center gap-4">
          <div className="flex flex-col gap-4 h-36 w-80">
            <p>Total Downloads</p>
            <h1 className="font-bold text-6xl">29.6M</h1>
            <p>21% more than last month</p>
          </div>
          <div className="flex flex-col gap-4 h-36 w-80">
            <p>Total Reviews</p>
            <h1 className="font-bold text-6xl">906K</h1>
            <p>46% more than last month</p>
          </div>
          <div className="flex flex-col gap-4 h-36 w-80">
            <p>Active Apps</p>
            <h1 className="font-bold text-6xl">132+</h1>
            <p>31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
