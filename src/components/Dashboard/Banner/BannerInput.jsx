import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

export const BannerInput = ({ register, index, onRemove, getValues }) => {
  // const banner = getValues(`banners.${index}`);
  return (
    <FormControl>
      <div className="flex flex-col">
        <div className="flex gap-4 items-center">
          <FormLabel>Link:</FormLabel>
          <Input type={"text"} {...register(`banners.${index}.url`)} />

          <Button
            colorScheme={"red"}
            variant="solid"
            type="button"
            onClick={onRemove}
          >
            Remove
          </Button>
        </div>
        {/* {banner && <img src={banner.url} className="w-[320px] h-[180px]" />} */}
      </div>
    </FormControl>
  );
};
