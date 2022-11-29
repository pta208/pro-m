import React from "react";
import { List } from "@chakra-ui/react";
import { menuItems } from "./config";
import MenuItem from "./MenuItem";
const DashboardMenu = ({ className }) => {
  return (
    <div className={className}>
      <List spacing={4}>
        {menuItems.map((menuItem) => (
          <div className="flex flex-col gap-2 text-xl px-2" key={menuItem.name}>
            <div className="font-bold">{menuItem.name}</div>
            {menuItem.items.map((item, index) => (
              <MenuItem
                key={`${menuItem.name}-${index}`}
                href={item.href}
                name={item.name}
                className="px-4 py-2 rounded-md"
              />
            ))}
          </div>
        ))}
      </List>
    </div>
  );
};

export default DashboardMenu;
