import Image from "next/image";
import Link from "next/link";
export const Header = () => {
  return (
    <div className="flex justify-center bg-white ">
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
              />
            </Link>
          </div>
          <div>
            <Link href="/">
              <Image
                src="/bebecook.png"
                width={200}
                height={75}
                layout="fixed"
                className="cursor-pointer"
              />
            </Link>
          </div>
          <div>
            <Link href="/">
              <Image
                src="/pro-m.jpg"
                width={100}
                height={100}
                layout="fixed"
                className="cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
