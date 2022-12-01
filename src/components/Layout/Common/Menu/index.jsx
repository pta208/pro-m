import Link from "next/link";
import { useMouseWheel } from "react-use";
const Menu = ({ className }) => {
  const mouseWheel = useMouseWheel();
  console.log(mouseWheel);
  return (
    <>
      <div
        className={`sticky top-0 z-50 flex justify-center bg-blaze-orange-600 gap-8 p-2 transition-colors ease-in-out ${className} ${
          mouseWheel > -1 ? "bg-blaze-orange-400" : ""
        }`}
      >
        {menuItems.map((menuItem, index) => (
          <Link key={index} href={`${menuItem.link}`}>
            <div
              key={menuItem.slug}
              className="text-white text-xl font-semibold cursor-pointer hover:text-forth"
            >
              {menuItem.label}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Menu;

const menuItems = [
  {
    slug: "bebecook",
    label: "Bebecook",
    icon: "",
    link: "/category/?brand=bebecook",
  },
  { slug: "pro-m", label: "Pro-M", icon: "", link: "/category/?brand=pro-m" },
  { slug: "about-us", label: "Về chúng tôi", icon: "", link: "/about-us" },
];
