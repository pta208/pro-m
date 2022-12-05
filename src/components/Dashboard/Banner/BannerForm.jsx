import React, { useCallback, useEffect, useMemo } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { BannerInput } from "./BannerInput";
import { Button, FormControl, FormLabel, Text } from "@chakra-ui/react";
export const BannerForm = ({ banners }) => {
  const { control, register, handleSubmit, setValue, getValues, formState } =
    useForm({
      defaultValues: {
        banners: [],
      },
    });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "banners",
  });
  useEffect(() => {
    if (banners) setValue("banners", banners);
  }, [banners]);
  const onSubmit = (values) => {
    renderPreview();
    console.log(values);
  };
  const renderPreview = () => {
    const bannersPreview = getValues("banners");
    return (
      <div className="flex flex-col justify-center gap-4">
        <Text fontWeight="bold" textAlign={"center"}>
          Preview (slide chạy từ trái qua phải)
        </Text>
        <div className="flex gap-2 flex-wrap">
          {bannersPreview?.map((banner) => (
            <img src={banner?.url} className="w-[320px] h-[190px] rounded-md" />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-8">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex justify-between">
          <Text fontSize={"3xl"}>Banners:</Text>
          <Button
            type="button"
            colorScheme={"blue"}
            onClick={() => append()}
            className="w-[150px] "
          >
            Add
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          {fields.map((field, index) => (
            <BannerInput
              key={field.id}
              {...register(`banners.${index}`)}
              register={register}
              index={index}
              onRemove={() => remove(index)}
              getValues={getValues}
            />
          ))}
        </div>

        <Button type="submit" colorScheme={"teal"}>
          Submit
        </Button>
      </form>
      {renderPreview()}
    </div>
  );
};
