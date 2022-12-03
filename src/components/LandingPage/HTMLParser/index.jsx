import React from "react";
import parse from "html-react-parser";
const HTMLParser = ({ content }) => {
  const children = parse(content);
  return <>{children}</>;
};

export default HTMLParser;
