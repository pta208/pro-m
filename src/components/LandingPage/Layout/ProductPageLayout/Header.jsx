import Image from "next/image";
import React from "react";
import { MdLocationOn } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="bg-blaze-orange-50">
      <div className="flex justify-center items-center py-2 max-w-screen-lg mx-auto lg:justify-between">
        <Link href="/">
          <div className="lg:flex-auto cursor-pointer">
            <Image src="/bvn.png" width={100} height={100} layout="fixed" />
          </div>
        </Link>
        <div className="lg:flex flex-auto items-center gap-8 hidden">
          <div className="flex gap-4 items-center">
            <div className="text-6xl text-bebecook">
              <MdLocationOn />
            </div>
            <div className="w-40 text-left">
              Số 2, ngõ 9, đường Tả Thanh Oai, Thanh Trì, Hà Nội
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="text-6xl text-bebecook">
              <FaEnvelope />
            </div>
            <div>
              <a href="bebecookvn@gmail.com">bebecookvn@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
