import { images } from "../../const";
export default function handler(req, res) {
  res.status(200).json(images);
}
