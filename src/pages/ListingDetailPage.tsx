import { SlLocationPin } from "react-icons/sl";
import Slider from "@/components/Slider";
import logo from "@/assets/logo.png";
import hero from "@/assets/hero.png";
import ListingDetailAside from "./ListingDetailAside";

const ListingDetailPage = () => {
  return (
    <div className="container mx-auto my-3 flex flex-col md:flex-row overflow-scroll">
      <div className=" w-8/12 h-full">
        <div className="flex-[3] md:flex-none mb-10 overflow-y-scroll">
          <div className=" pr-10 md:pr-0">
            <Slider images={[logo, hero]} />
            <div className="info mt-10">
              <div className="top flex md:flex-row justify-between sm:flex-col sm:gap-4">
                <div className="post flex flex-col gap-4">
                  <h1>Title</h1>
                  <div className="flex items-center text-gray-600 text-sm">
                    <SlLocationPin className="w-4 h-4" />

                    <address>Address</address>
                  </div>
                  <div className="price">price</div>
                </div>
                <div className="user flex flex-col items-center justify-center p-0 lg:py-4 lg:px-10 bg-gray-100 rounded-md font-semibold">
                  <img
                    src={hero}
                    alt=""
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <span>username</span>
                </div>
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
