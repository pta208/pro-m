import Link from "next/link";
import ContactItem from "./ContactItem";
import Copyright from "./Copyright";
import { footerItems } from "./footer.config";
export const Footer = () => {
  return (
    <div>
      {/* Icon các thứ */}
      <div className="bg-bay-of-many-300 p-4 mt-8 ">
        <div className="max-w-screen-xl  mx-auto flex flex-wrap gap-4 items-center lg:justify-between">
          {footerItems.map((footerItem, index) => (
            <div
              className="flex justify-between items-center gap-4"
              key={index}
            >
              <div className="w-16 h-16 bg-secondary rounded-full flex justify-center items-center text-4xl">
                {footerItem.icon}
              </div>
              <div>
                <div className="font-semibold">{footerItem.title}</div>
                <div className="text-sm text-gray-600">{footerItem.des}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Thông tin, sđt, địa chỉ , fanpage*/}
      <div className="flex justify-start gap-10 max-w-screen-xl  mx-auto flex-wrap p-4">
        <ContactItem
          title="Công ty TNHH Phân Phối BVN"
          className="w-full lg:w-auto"
          key={1}
        >
          <div className="flex gap-5 text-sm ">
            <div className="font-semibold  w-24">Số Điện Thoại:</div>
            <div className="text-gray-600 flex-1">
              0965 546 848 – 0392 261 912
            </div>
          </div>
          <div className="flex gap-5 ">
            <div className="font-semibold text-sm w-24">Email liên hệ:</div>
            <div className="text-gray-600 text-sm flex-1">
              bebecookvn@gmail.com
            </div>
          </div>
          <div className="flex gap-5 ">
            <div className="font-semibold text-sm w-24">Địa chỉ:</div>
            <div className="text-gray-600 text-sm flex-1">
              Số 2, ngõ 9, đường Tả Thanh Oai, Thanh Trì, Hà Nội
            </div>
          </div>
        </ContactItem>
        <ContactItem
          title="Liên kết nhanh "
          className="w-full lg:w-auto"
          key={2}
        >
          <div className="flex  text-sm">
            <div className="flex flex-col gap-2">
              <Link href="/">
                <div className="cursor-pointer">Trang chủ</div>
              </Link>
              <Link href="/">
                <div className="cursor-pointer">Giới thiệu</div>
              </Link>
            </div>
          </div>
        </ContactItem>
        <ContactItem title="Các dịch vụ" className="w-full lg:w-auto" key={3}>
          <Link href="/">
            <div className="flex text-sm cursor-pointer">Tất cả sản phẩm</div>
          </Link>
        </ContactItem>
        <ContactItem title="Fanpage" className="w-full " key={4}>
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/ProMVietNam&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=1326553517365456"
            // width="340"
            // height="130"
            style={{ border: "none", overflow: "hidden" }}
            className="w-full "
            scrolling="no"
            frameBorder="0"
            allowFullScreen={false}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </ContactItem>
      </div>
      <Copyright />
    </div>
  );
};
