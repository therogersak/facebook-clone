import React from "react";
import Img1 from "../public/icons/users.png";
import Img2 from "../public/icons/user_groups.png";
import Img3 from "../public/icons/marketplace.png";
import Img4 from "../public/icons/play.png";
import Img5 from "../public/icons/reminder.png";
import Img6 from "../public/icons/bookmark.png";
import Img7 from "../public/icons/page.png";
import Image from "next/image";
import SideItem from "./SideItem";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
function Sidebar() {
  const { data: session } = useSession();
  return (
    <div className="space-y-3 w-[350px] hidden xl:block">
      <SideItem img={session?.user?.image} name={session?.user.name} main />
      <SideItem img={Img1} name="Find Frieinds" />
      <SideItem img={Img2} name="Group" />
      <SideItem img={Img3} name="Marketplace" />
      <SideItem img={Img4} name="Watch" />
      <SideItem img={Img5} name="Reminder" />
      <SideItem img={Img6} name="Saved" />
      <SideItem img={Img7} name="Page" />
      <SideItem Icon={ChevronDownIcon} name="More" />
    </div>
  );
}

export default Sidebar;
