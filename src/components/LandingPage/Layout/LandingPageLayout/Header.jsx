import Image from "next/image";
import Link from "next/link";
export const Header = () => {
  return (
    <div className="flex justify-center  bg-blaze-orange-50">
      <div className="flex items-center justify-center">
        <div className="flex gap-8 justify-between items-center">
          <div>
            <Link href="/">
              <Image
                src="/bvn.png"
                width={100}
                height={100}
                layout="fixed"
                className="cursor-pointer"
                quality={100}
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <Link href="/">
              <Image
                src="/bebecook.png"
                width={270}
                height={135}
                layout="fixed"
                className="cursor-pointer"
                quality={100}
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <Link href="/">
              <Image
                src="/pro-m.jpg"
                width={100}
                height={100}
                layout="fixed"
                className="cursor-pointer"
                quality={100}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
