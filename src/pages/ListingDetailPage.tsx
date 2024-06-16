import { SlLocationPin } from 'react-icons/sl';
import Slider from '@/components/Slider';
import logo from '@/assets/logo.png';
import hero from '@/assets/hero.png';
import ListingDetailAside from '../features/listing/ListingDetailAside';
import { useAppSelector } from '@/store/hooks';

const ListingDetailPage = () => {
  const { user } = useAppSelector((state) => state.auth);
  return (
    <div className="container mx-auto my-3 flex flex-col md:flex-row">
      <div className=" md:w-8/12 px-2 md:px-0 h-full">
        <div className="flex-[3] md:flex-none mb-10">
          <Slider images={[logo, hero]} />
          <div className="info mt-10">
            <div className="top flex md:flex-row justify-between px-1 sm:flex-col sm:gap-4">
              <div className="post flex flex-col gap-4">
                <h1 className="text-sm">Title</h1>
                <div className="flex items-center text-gray-600 text-sm">
                  <SlLocationPin className="w-4 h-4" />

                  <address className="text-xs">Address</address>
                </div>
                <div className="text-sm bg-gray-100 w-fit p-0.5 px-1 rounded">$ 1200</div>
              </div>
              <div className="user flex flex-col items-center justify-center p-0 lg:py-4 lg:px-10 bg-gray-100  rounded-md font-semibold">
                <img src={user.profilePhoto} alt="" className="w-12 h-12 rounded-full object-cover" />
                <span>{user.username}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ListingDetailAside />
    </div>
  );
};

export default ListingDetailPage;
