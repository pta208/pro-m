import { banners } from "../../const";
export default function handler(req, res) {
  res.status(200).json(banners);
}
