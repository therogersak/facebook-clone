import {
  HomeIcon,
  UserCircleIcon,
  PlayIcon,
  UserGroupIcon,
  CollectionIcon,
  SearchIcon,
  BellIcon,
  ChatIcon,
  ViewGridAddIcon,
  MenuIcon
} from "@heroicons/react/outline";
import Image from "next/image";
function Header() {
  return (
    <>
      <div className="bg-white shadow-md sticky top-0 left-0 z-50">
        <div className="flex items-center justify-between mx-3 py-2">
          {/* Header left */}
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 overflow-hidden rounded-full">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
                alt="facebook"
                width={90}
                height={90}
              />
            </div>
            <div className="flex items-cetner space-x-2 pl-2 bg-gray-100 w-fit py-2 rounded-full">
              <SearchIcon className="h-6" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent border-none outline-none"
              />
            </div>
          </div>
          {/* Header Middle */}
          <div className="hidden items-center space-x-3 md:flex">
            <HomeIcon className="navBtn" />
            <UserCircleIcon className="navBtn" />
            <PlayIcon className="navBtn" />
            <CollectionIcon className="navBtn" />
            <UserGroupIcon className="navBtn" />
          </div>
          {/* Header Right */}
          <div className="flex items-center space-x-2">
            <div className="space-x-2 hidden lg:flex ">
              <ViewGridAddIcon className="navBtn2" />
              <ChatIcon className="navBtn2" />
              <BellIcon className="navBtn2" />
            </div>
            <MenuIcon className="md:hidden block h-8" />
            <img
              src="https://cdn.sharechat.com/cartoonimgs.._a0c117c_1603509293864_sc_cmprsd_40.jpg"
              className="w-11 h-11 border p-[1px] rounded-full"
              alt="lion"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
