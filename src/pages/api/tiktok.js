import axiosClient from "../../api/axiosClient";
const options = {
  method: "GET",
  url: "https://tiktok82.p.rapidapi.com/getUserVideos",
  params: {
    user_id: "7108624806848857089",
    secUid:
      "MS4wLjABAAAAhWPqpojCPp6CCvodvcmfH_OVBqSRk-rn1vEutrStE4EDB0Lh_mMW3DaB-GiZ-ekK",
  },
  headers: {
    "X-RapidAPI-Key": process.env.RAPID_API_KEY,
    "X-RapidAPI-Host": process.env.RAPID_API_HOST,
  },
};
const tempData = [
  "7160618328778640667",
  "7158772612372516122",
  "7158768768322211073",
  "7156160343482338562",
  "7156149547490643201",
  "7155515536674311450",
];
// Extract IDs: tempData.data.itemList.map((item) => item.id)
export default function handler(req, res) {
  // const result = await axiosClient.request(options);
  res.status(200).json(tempData);
}
