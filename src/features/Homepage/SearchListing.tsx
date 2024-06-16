import Inputs from '@/components/Inputs';
import { Buttons } from '@/UI/Buttons';

type SearchListingProps = {};

const SearchListing = () => {
  return (
    <div className="md:px-10 md:w-2/3">
      <Buttons variant="outline" className="w-14 md:w-20 md:mb-1 rounded-none">
        Rent
      </Buttons>
      <Buttons variant="outline" className="w-14 md:w-20 md:mb-1 rounded-none">
        Buy
      </Buttons>
      <form className="flex flex-row items-center ">
        <Inputs className="flex flex-row items-center">
          <Inputs.Input placeholder="Location" />
          <Inputs.Input placeholder="Min" type="number" min={0} />
          <Inputs.Input placeholder="Max" type="number" min={0} />
        </Inputs>
        <Buttons className="mb-4 h-10 rounded-none w-1/3">Search</Buttons>
      </form>
    </div>
  );
};

export default SearchListing;
