import { Icons } from "#/icon/icons";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
function Navbar() {
  const [date, setDate] = useState("2021-08-12");
  const notifications = 6;
  const user = {
    full_name: "Saidov Saidahror",
    role: "Direktor",
    image: "/img/current-user.jpg",
  };

  return (
    <div className="inset-0 bottom-auto z-[1000] h-[68px] w-full bg-white">
      <div className="flex h-full items-center justify-between overflow-hidden px-10">
        {/* NAVBAR-LEFT */}
        <input
          type="date"
          className="rounded-md border border-gray-300 p-2"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        {/* NAVBAR-RIGHT */}
        <div className="flex h-full items-center gap-x-10">
          {/* notification-button */}
          <Link href="/natification">
          <button className="relative rounded-full border border-gray-200 p-2 hover:bg-gray-100">
            <Icons.Bell400 className="w-5 fill-none stroke-slate-500" />
            <h5
              className={`absolute right-0 top-0 flex aspect-square h-[14px] -translate-y-1/4 translate-x-1/4 items-center justify-center rounded-full bg-primary p-1 text-[8px] leading-[0] text-white duration-300 ${notifications === 0 && "collapse opacity-0"}`}
            >
              {notifications}
            </h5>
          </button>
          </Link>

          {/* user-account */}
          <button className="flex h-full select-none items-center gap-x-3 px-3 hover:bg-gray-100">
            {/* user-name */}
            <div className="flex flex-col items-end justify-center gap-y-2">
              <h4 className="text-[14px] leading-[1] text-sky-950">
                {user.full_name}
              </h4>
              <p className="text-[12px] leading-[1] text-slate-500">
                {user.role}
              </p>
            </div>

            {/* user-image */}
            <div className="aspect-square w-11 overflow-hidden rounded-full border-[3px] border-gray-200">
              <Image
                src={user.image}
                alt=""
                draggable="false"
                height={1000}
                width={1000}
                className="h-full w-full object-cover"
              />
            </div>

            {/* dropdown-icon */}
            <Icons.Arrow700 className="w-[18px] fill-slate-500" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
