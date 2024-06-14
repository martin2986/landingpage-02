import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { CiSearch } from "react-icons/ci";
import Inputs from "@/components/Inputs";
import Dropdown from "@/UI/Dropdown";
import { Buttons } from "@/UI/Buttons";
import DropDown from "@/components/DropDown";

const schema = z.object({
  minPrice: z.number().optional(),
  maxPrice: z.number().optional(),
  bedroom: z.number().optional(),
  type: z.enum(["rent", "buy"]),
  property: z.enum(["apartment", "house", "condo", "land"]).optional(),
});
type formFields = z.infer<typeof schema>;
const Search = () => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    control,
    // formState: { errors, isSubmitting },
  } = useForm<formFields>({
    defaultValues: {
      minPrice: 0,
      maxPrice: 0,
      bedroom: 0,
      type: "rent",
      property: "apartment",
    },
  });
  const onSubmit: SubmitHandler<formFields> = async (data) => {
    console.log(data);
  };
  return (
    <>
      <Inputs
        name="minPrice"
        register={register}
        placeholder="City"
        type="text"
        label="Location"
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-row items-center gap-5"
      >
        <Inputs
          name="minPrice"
          label="Min Price"
          register={register}
          type="number"
          sm
        />
        <Inputs
          name="maxPrice"
          label="Max Price"
          register={register}
          type="number"
          sm
        />
        <Inputs
          name="bedroom"
          label="Bedroom"
          register={register}
          type="number"
          sm
        />
        <Controller
          name="type"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              title="Type"
              options={["rent", "buy"]}
              className=" w-24"
            />
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
              className="w-24"
            />
          )}
        />
        <Buttons className="w-full">
          <CiSearch className="w-6 h-6" />
        </Buttons>
      </form>
    </>
  );
};

export default Search;
