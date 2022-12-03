import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import ImageShowcase from "./ImageShowcase";
import RelatedProduct from "./RelatedProduct";
import parse from "html-react-parser";
export const ProductDetail = ({ product, relatedProducts }) => {
  const { name, images, attributes, description, info } = product;
  const html = `
  ${info}
  `;

  return (
    <div className={`flex flex-col gap-4 max-w-screen-xl p-4 mx-auto `}>
      {/* <div>Trang chủ / Bánh Bỏng bổ sung lợi khuẩn cho bé vị Dâu</div> */}
      <div className="flex flex-wrap gap-4">
        {/* Ảnh */}
        <div className="w-full lg:flex-1">
          <ImageShowcase images={images} />
        </div>
        {/* Thông tin sp */}
        <div className="w-full flex flex-col gap-8 lg:flex-1 p-4 lg:p-0">
          <div className="font-medium text-blaze-orange-600 text-3xl text-center lg:text-left">
            {name}
          </div>
          {/* Thông tin bổ sung */}
          <div className="flex flex-col gap-4">
            <div className="font-normal text-2xl">Thông tin bổ sung</div>
            {attributes.map((attribute, index, attributes) => {
              return (
                <>
                  <div className="flex items-center">
                    <div className="font-semibold w-32 ">{attribute.label}</div>
                    <div className="flex-1">{attribute.value}</div>
                  </div>

                  {index !== attributes.length - 1 && (
                    <div className="divider"></div>
                  )}
                </>
              );
            })}
          </div>

          <div className="text-pink-500">{description}</div>
        </div>
      </div>
      {/* Mô tả */}
      <div className="card bg-white p-4">
        <div className="text-2xl text-pink-600">Mô tả</div>
        <div className="divider" />
        {parse(html)}
      </div>
      <RelatedProduct
        products={relatedProducts}
        className="p-4 lg:p-0 lg:mt-8"
      />
    </div>
  );
};
