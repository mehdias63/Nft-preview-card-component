import React from "react";

export default function Nftcard() {
  return (
    <div
      className="w-[20.4375rem] h-[33.9375rem] p-6 rounded-lg md:w-[21.875rem] md:h-[37.25rem] "
      style={{ backgroundColor: "var(--very-dark-blue-card-bg, #15263F)" }}
    >
      <div className=" md:ml-3">
        <div className="count cursor-pointer w-[18rem]">
        <img src="../images/Rectangle.png" />
        </div>
        <h1 className="font-bold mt-4 text-[1.375rem] hover:text-[#00FFF8] cursor-pointer">Equilibrium #3429</h1>
        <p className="text-[#8BACD9] text-lg mt-2 mb-4">
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className="flex">
          <img className="mr-2" src="../images/icon-ethereum.svg" />
          <span className="text-[#00FFF8] text-[0.9375rem] font-semibold">
            0.041 ETH
          </span>
          <img className="ml-[5rem] mr-2" src="../images/icon-clock.svg" />
          <span className="text-[#8BACD9] text-[0.9375rem]">3 days left</span>
        </div>
        <div
          className="w-[17.375rem] h-[0.0625rem] rounded-2xl mt-4"
          style={{ backgroundColor: "#8BACD9" }}
        ></div>
        <div className="flex mt-4">
          <img src="../images/Oval.svg" />
          <p className="ml-4 text-[#8BACD9] text-[0.9375rem]">
            Creation of<span className="ml-2 text-white hover:text-[#00FFF8] cursor-pointer">Jules Wyvern</span>
          </p>
        </div>
      </div>
    </div>
  );
}
