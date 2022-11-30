import React from "react";
import Link from "next/link";
import Image from "next/image";
export const ProductCard = ({
  imgSrc,
  title,
  className,
  href = "#",
  titlePlacement = "bottom",
}) => {
  return (
    <Link href={href}>
      <div
        className={`card flex-auto bg-white cursor-pointer shadow-lg border  hover:text-blaze-orange-500 hover:border-blaze-orange-500 brightness-100 hover:brightness-100 ${className}`}
      >
        <div className="card-body p-4">
          <div className="flex flex-col flex-1 items-center ">
            {titlePlacement === "top" && (
              <div className="font-bold text-lg text-center md:min-h-[50px] md:max-h-[50px]">
                {title}
              </div>
            )}
            <div className="w-full">
              <Image
                layout="responsive"
                width={1}
                height={1}
                src={imgSrc}
                className="object-contain"
              />
            </div>
            {titlePlacement === "bottom" && (
              <div className="font-bold text-lg text-center">{title}</div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};
