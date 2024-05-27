import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Inputs from "@/components/Inputs";
import Dropdown from "@/UI/Dropdown";
import { Buttons } from "@/UI/Buttons";
import { appApi } from "@/util/service";
import UploadWidget from "@/components/UploadWidget";
const schema = z.object({
  title: z.string(),
  address: z.string(),
  desc: z.string(),
  city: z.string(),
  latitude: z.string(),
  longitude: z.string(),
  school: z.number().optional(),
  bus: z.number().optional(),
  restaurant: z.number().optional(),
  price: z.number(),
  size: z.number(),
  bedroom: z.number(),
  bathroom: z.number(),
  type: z.enum(["rent", "buy"]),
  property: z.enum(["apartment", "house", "condo", "land"]).optional(),
  income: z.enum(["Allowed", "Not Allowed"]).optional(),
  pet: z.enum(["Allowed", "Not Allowed"]).optional(),
  utilities: z
    .enum(["Owner is responsible", "Owner is not responsible"])
    .optional(),
});
type formFields = z.infer<typeof schema>;
const NewPost = () => {
  const [images, setImages] = useState<string[]>([]);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    setError,
    control,
    // formState: { errors, isSubmitting },
  } = useForm<formFields>({
    defaultValues: {
      title: "",
      address: "",
      desc: "",
      city: "",
      price: 0,
      latitude: "",
      longitude: "",
      bedroom: 0,
      bathroom: 0,
      size: 0,
      school: 0,
      bus: 0,
      restaurant: 0,
      type: "rent",
      property: "apartment",
      income: "Allowed",
      pet: "Allowed",
      utilities: "Owner is responsible",
    },
  });
  const onSubmit: SubmitHandler<formFields> = async (data) => {
    console.log(data);
    const {
      pet,
      utilities,
      price,
      property,
      bathroom,
      bedroom,
      bus,
      income,
      restaurant,
      school,
      size,
      type,
      city,
      latitude,
      longitude,
      title,
      desc,
      address,
    } = data;
    const convertedPrice = +price;
    const convertedSize = +size;
    const convertedBedroom = +bedroom;
    const convertedBathroom = +bathroom;
    const convertedRestaurant = restaurant && +restaurant;
    const convertedBus = bus && +bus;
    const convertedSchool = school && +school;

    try {
      const response = await appApi.post("/posts", {
        postData: {
          title,
          address,
          city,
          latitude,
          longitude,
          price: convertedPrice,
          bedroom: convertedBedroom,
          bathroom: convertedBathroom,
          type,
          property,
          images,
        },
        postDetail: {
          desc,
          income,
          pet,
          utilities,
          restaurant: convertedRestaurant,
          school: convertedSchool,
          bus: convertedBus,
          size: convertedSize,
        },
      });
      console.log(response.data);
      // dispatch(authAction.login(response.data));
      reset();
      navigate("/profile");
    } catch (err: any) {
      setError("root", {
        message:
          err?.response?.data?.message || "An error occurred during login.",
      });
    }
  };
  return (
    <div className="container mx-auto flex gap-5">
      <div className="w-2/3 mt-5 ">
        <h1 className="mb-5">Add new Post</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" flex gap-5">
            <Inputs name="title" label="Title" register={register} labelSm />
            <Inputs
              name="price"
              label="Price"
              register={register}
              labelSm
              type="number"
              min={0}
            />
            <Inputs
              name="address"
              label="Address"
              register={register}
              labelSm
            />
          </div>

          <div className="my-5 h-72">
            <Controller
              name="desc"
              control={control}
              render={({ field }) => (
                <ReactQuill
                  {...field}
                  theme="snow"
                  placeholder={"Write Description"}
                  className=" h-4/5"
                  onChange={(text) => {
                    field.onChange(text);
                  }}
                />
              )}
            />
          </div>

          <div className=" flex gap-5 mt-5">
            <Inputs name="city" label="City" register={register} labelSm />
            <Inputs
              name="bedroom"
              label="Bedroom"
              register={register}
              type="number"
              min={0}
              labelSm
            />
            <Inputs
              name="bathroom"
              label="Bathroom"
              register={register}
              type="number"
              min={0}
              labelSm
            />
            <Inputs
              name="longitude"
              label="Longitude"
              register={register}
              labelSm
            />
            <Inputs
              name="latitude"
              label="Latitude"
              register={register}
              labelSm
            />
          </div>
          <div className=" flex gap-5 mt-5">
            <Controller
              name="type"
              control={control}
              render={({ field }) => (
                <Dropdown {...field} title="Type" options={["rent", "buy"]} />
              )}
            />
            <Controller
              name="property"
              control={control}
              render={({ field }) => (
                <Dropdown
                  {...field}
                  title="Property"
                  options={["apartment", "house", "condo", "land"]}
                />
              )}
            />
            <Controller
              name="income"
              control={control}
              render={({ field }) => (
                <Dropdown
                  {...field}
                  title="Income Policy"
                  options={["Allowed", "Not Allowed"]}
                />
              )}
            />
            <Controller
              name="pet"
              control={control}
              render={({ field }) => (
                <Dropdown
                  {...field}
                  title="Pet Policy"
                  options={["Allowed", "Not Allowed"]}
                />
              )}
            />
            <Controller
              name="utilities"
              control={control}
              render={({ field }) => (
                <Dropdown
                  {...field}
                  title="Utility Policy"
                  options={["Owner is responsible", "Owner is not responsible"]}
                />
              )}
            />
          </div>
          <div className=" flex gap-5 mt-5 items-center">
            <Inputs
              name="school"
              label="School"
              register={register}
              labelSm
              min={0}
              type="number"
            />
            <Inputs
              name="bus"
              label="Bus"
              register={register}
              labelSm
              type="number"
            />
            <Inputs
              name="restaurant"
              label="Restaurant"
              register={register}
              type="number"
              min={0}
              labelSm
            />
            <Inputs
              name="size"
              label="Total Size (sqft)"
              register={register}
              type="number"
              labelSm
            />
            <Buttons className=" w-36">Update</Buttons>
          </div>
        </form>
      </div>
      <div className=" w-2/6 bg-gray-200">
        <div className="w-full flex flex-col gap-5 justify-center items-center mt-5">
          {images?.map((img, id) => (
            <img src={img} key={id} className=" w-44" />
          ))}
          <UploadWidget
            uwConfig={{
              multiple: true,
              cloudName: process.env.CLOUD_NAME,
              uploadPreset: "estate",
              folder: "post",
            }}
            setState={setImages}
          />
        </div>
      </div>
    </div>
  );
};

export default NewPost;
