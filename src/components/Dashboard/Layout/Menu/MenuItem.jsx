import React from "react";
import Link from "next/link";
import { ListItem, ListIcon } from "@chakra-ui/react";

const MenuItem = ({ icon, name, href, status, className }) => {
  return (
    <Link href={href}>
      <ListItem
        className={`hover:bg-jacarta-500 hover:text-white transition-all cursor-pointer ${className}`}
      >
        {name}
      </ListItem>
    </Link>
  );
};

export default MenuItem;
