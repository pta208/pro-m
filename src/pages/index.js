import {
  useGetAlbumImage,
  useGetAlbumVideo,
  useGetProduct,
} from "../hooks/swr";
import { LandingPage } from "../components/template/LandingPage/LandingPage";

export default function Home() {
  const { products } = useGetProduct();
  const { images } = useGetAlbumImage();
  const { videos } = useGetAlbumVideo();
  return <LandingPage products={products} images={images} videos={videos} />;
}
