import { social } from "@/types/main";
import Link from "next/link";
import React from "react";
import * as Fa from "react-icons/fa";

export default function Footer({
  socials,
  name,
}: {
  socials: social[];
  name: string;
}) {
  return (
    <footer className="bg-white dark:bg-grey-800 py-6 mt-12 border-t border-gray-200 dark:border-grey-700">
      <div className="w-full lg:w-5/6 2xl:w-3/4 mx-auto flex items-center justify-between">

        {/* Empty space for balance */}
        <div className="w-24"></div>

        {/* Center Text */}
        <p className="text-center text-lg md:text-xl font-medium">
          Made with ❤️ by{" "}
          <span className="text-violet-600 font-semibold">
            {name}
          </span>
        </p>

        {/* Right Icons */}
        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <Link
              key={s.icon}
              href={s.link}
              target="_blank"
              rel="noreferrer"
              className="
                w-10 h-10
                rounded-full
                bg-violet-100
                text-violet-600
                hover:bg-violet-600
                hover:text-white
                transition-all
                flex
                items-center
                justify-center
              "
            >
              {
                // @ts-ignore
                React.createElement(Fa[s.icon])
              }
            </Link>
          ))}
        </div>

      </div>
    </footer>
  );
}