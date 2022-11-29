import Image from "next/image";
import Link from "next/link";
export const Header = () => {
  return (
    <div className="flex justify-center px-4 pt-1 bg-white ">
      <div className="flex items-center justify-center">
        <Link href="/">
          <Image
            src="https://admin.bebecook.com/images/common/PC_bebecook_logo.png?ver=20220708"
            width={300}
            height={75}
            layout="fixed"
            className="cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
};
