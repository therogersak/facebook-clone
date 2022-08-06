import React, { useEffect, useState } from "react";
import {
  VideoCameraIcon,
  DotsHorizontalIcon,
  SearchIcon,
  PlusIcon,
} from "@heroicons/react/outline";
import { faker } from "@faker-js/faker";
import WidgetItem from "./WidgetItem";
function Widgets() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fakerData = [...Array(9)].map((_, i) => ({
      id: i,
      avatar: faker.image.avatar(),
      name: faker.name.findName(),
    }));

    setUsers(fakerData);
  }, [faker]);

  console.log(users);
  return (
    <>
      <div className="hidden lg:block w-[370px]">
        <div className="flex px-3 items-center">
          <h3 className="flex-1 text-[18px]">Contacts</h3>
          <div className="flex items-center space-x-3">
            <VideoCameraIcon className="btn" />
            <SearchIcon className="btn" />
            <DotsHorizontalIcon className="btn" />
          </div>
        </div>
        <div className="mt-1">
          {users &&
            users.map((data) => (
              <WidgetItem
                avatar={data.avatar}
                name={data.name}
                key={data.id}
                id={data.id}
              />
            ))}
        </div>

        <div className="border-t-2 px-3 pt-2">
          <div className="text-gray-600">Group Conversations</div>
          <div className="flex items-center space-x-3 mt-4">
            <PlusIcon className="cursor-pointer h-9 bg-gray-200 p-2 rounded-full" />
            <p>Crate new group</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Widgets;
