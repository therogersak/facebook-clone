import React, { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import Story from "./Story";

function Stories() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const data = [...Array(25)].map((_, i) => ({
      id: i,
      name: faker.name.findName(),
      avatar: faker.image.avatar(),
    }));
    setUsers(data);
  }, [faker]);
  return (
    <>
      <div className="flex p-4 mx-auto space-x-2 overflow-scroll ">
        {users &&
          users.map((data) => (
            <Story
              avatar={data.avatar}
              name={data.name}
              key={data.id}
              id={data.id}
            />
          ))}
      </div>
    </>
  );
}

export default Stories;
