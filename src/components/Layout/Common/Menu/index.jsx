import Link from "next/link";
const Menu = (props) => {
  return (
    <>
      <div
        className={`sticky top-0 z-50 flex justify-center bg-bebecook gap-4 p-2 ${props.className}`}
      >
        {menuItems.map((menuItem, index) => (
          <Link key={index} href={`/category`}>
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
  { slug: "mon-phu", label: "Món phụ", icon: "" },
  { slug: "gao", label: "Gạo", icon: "" },
  { slug: "do-an-nhe", label: "Đồ ăn nhẹ", icon: "" },
];
