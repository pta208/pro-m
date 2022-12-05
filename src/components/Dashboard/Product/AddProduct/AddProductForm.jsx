import React from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { PRODUCT_TYPE } from "../../../../const/product-type";
import { PRODUCT_ATTRIBUTE } from "../../../../const/product-attribute";
import { ImageInput } from "./ImageInput";
import { TypeSelect } from "./TypeSelect";
import { AttributeInput } from "./AttributeInput";
import { ReactQuillEditor } from "../../lib/ReactQuillEditor";
export const AddProductForm = () => {
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
    const { images, product, attributes } = values;
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
        <FormLabel>Tên sản phẩm:</FormLabel>
        <Input {...register("product.name")} type="text" />
      </FormControl>

      <FormControl>
        <FormLabel>Ảnh sản phẩm: (Ảnh đầu là thumbnail)</FormLabel>
        <ImageInput
          register={{ ...register("images") }}
          setValue={setValue}
          name={"images"}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Loại sản phẩm:</FormLabel>
        <Controller
          name="product.product_type_id"
          control={control}
          render={({ field }) => <TypeSelect {...field} types={PRODUCT_TYPE} />}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Các thuộc tính:</FormLabel>
        <div className="flex flex-col gap-4">
          {fields.map((field, index) => (
            <AttributeInput
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

      <FormControl>
        <FormLabel>Mô tả</FormLabel>
        <Controller
          render={({ field }) => <ReactQuillEditor {...field} />}
          name="product.description"
          control={control}
        />
      </FormControl>

      <Button type="submit" colorScheme={"teal"}>
        Submit
      </Button>
    </form>
  );
};
