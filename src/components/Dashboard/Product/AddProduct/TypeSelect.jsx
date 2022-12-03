import React from "react";
import { Select } from "@chakra-ui/react";
export const TypeSelect = ({ types, ...props }) => {
  return (
    <Select _selected={""} {...props}>
      {types.map((type) => (
        <option key={type.id} value={type.id}>
          {type.name}
        </option>
      ))}
    </Select>
  );
};
