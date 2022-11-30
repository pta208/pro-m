import React from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { PropertyAttributeInput } from "./PropertyAttributeInput";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { PropertyTypeSelect } from "./PropertyTypeSelect";
import { PRODUCT_TYPE } from "../../../const/product-type";
import { PRODUCT_ATTRIBUTE } from "../../../const/product-attribute";
import { ImageInput } from "./ImageInput";
export const AddPropertyForm = () => {
  const { control, register, handleSubmit, setValue } = useForm({
    defaultValues: {
      product: {
        name: "",
        description: "",
        product_type_id: PRODUCT_TYPE[0].id,
      },
      attributes: [],
      images: [],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "attributes",
  });
  const onSubmit = async (values) => {
    const { images, property, attributes } = values;
    // Post property_infos
    console.log(values);
    // Post images
    // const formData = new FormData();
    // for (let i = 0; i < images.length; i++) {
    //   formData.append(`image`, images[i], images[i].name);
    // }
    // const imageRes = imageApi.post(formData, property_id);
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel>Tên tài sản:</FormLabel>
        <Input {...register("property.name")} type="text" />
      </FormControl>
      <FormControl>
        <FormLabel>Địa chỉ:</FormLabel>
        <Textarea {...register("property.address")} />
      </FormControl>
      <FormControl>
        <FormLabel>Ảnh tài sản:</FormLabel>
        <ImageInput
          register={{ ...register("images") }}
          setValue={setValue}
          name={"images"}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Loại tài sản:</FormLabel>
        <Controller
          name="property.property_type_id"
          control={control}
          render={({ field }) => (
            <PropertyTypeSelect {...field} propertyTypes={PRODUCT_TYPE} />
          )}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Các thuộc tính:</FormLabel>
        <div className="flex flex-col gap-4">
          {fields.map((field, index) => (
            <PropertyAttributeInput
              key={field.id}
              {...register(`attributes.${index}`)}
              register={register}
              index={index}
              onRemove={() => remove(index)}
              attributes={PRODUCT_ATTRIBUTE}
            />
          ))}
          <Button
            type="button"
            variant={"outline"}
            colorScheme="blue"
            onClick={() =>
              append({
                attribute_id: "1",
                value: "",
              })
            }
          >
            Thêm thuộc tính
          </Button>
        </div>
      </FormControl>
      <Button type="submit" colorScheme={"teal"}>
        Submit
      </Button>
    </form>
  );
};
