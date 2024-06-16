import Inputs from '@/components/Inputs';
import { Buttons } from '@/UI/Buttons';
import Dropdown from '@/UI/Dropdown';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { CiSearch } from 'react-icons/ci';
import { z } from 'zod';

const schema = z.object({
  minPrice: z.number().optional(),
  maxPrice: z.number().optional(),
  bedroom: z.number().optional(),
  type: z.enum(['rent', 'buy']),
  property: z.enum(['apartment', 'house', 'condo', 'land']).optional(),
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
      type: 'rent',
      property: 'apartment',
    },
  });
  const onSubmit: SubmitHandler<formFields> = async (data) => {
    console.log(data);
  };
  return (
    <>
      <Inputs>
        <Inputs.Input name="search" register={register} placeholder="Location" type="text" />
      </Inputs>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row items-center gap-2 lg:gap-5 w-full">
        <Inputs className="flex items-center gap-2 lg:gap-5">
          <div>
            <Inputs.Label label="Min" htmlFor="minPrice" />
            <Inputs.Input name="minPrice" id="minPrice" register={register} type="number" min={0} inputSize="sm" />
          </div>
          <div>
            <Inputs.Label label="Max" htmlFor="maxPrice" />
            <Inputs.Input name="maxPrice" id="maxPrice" register={register} type="number" min={0} inputSize="sm" />
          </div>
          <div>
            <Inputs.Label label="Bed" htmlFor="bedroom" />
            <Inputs.Input name="bedroom" id="bedroom" register={register} type="number" min={1} inputSize="sm" />
          </div>
        </Inputs>

        <Controller name="type" control={control} render={({ field }) => <Dropdown {...field} title="Type" options={['rent', 'buy']} />} />

        <Controller
          name="property"
          control={control}
          render={({ field }) => <Dropdown {...field} title="Property" options={['apartment', 'house', 'condo', 'land']} />}
        />
        <Buttons className="w-full">
          <CiSearch className="w-6 h-6" />
        </Buttons>
      </form>
    </>
  );
};

export default Search;
