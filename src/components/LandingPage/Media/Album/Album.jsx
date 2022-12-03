import { Text } from "@chakra-ui/react";
import React from "react";

export const Album = ({ title = "Baby's Moments", children }) => {
  return (
    <div className="flex flex-col gap-4">
      <Text fontSize={"3xl"} className="text-center text-pink-salmon-600">
        {title}
      </Text>
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
};
