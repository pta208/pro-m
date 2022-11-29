import { Avatar, Box, Flex } from "@chakra-ui/react";
import React from "react";

const DashboardHeader = ({ avatar, name, role }) => {
  return (
    <Flex justifyContent={"end"} alignItems="center" p="4">
      <Flex
        justifyContent={"center"}
        alignItems="center"
        gap="1rem"
        className="cursor-pointer"
      >
        <Avatar name={name} src={avatar} />
        <div>
          <div>{name}</div>
          <div>{role}</div>
        </div>
      </Flex>
    </Flex>
  );
};

export default DashboardHeader;
