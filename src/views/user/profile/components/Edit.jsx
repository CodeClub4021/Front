import Card from "../../../../components/UserPanel/card";
import React from "react";
import { FaUserEdit } from "react-icons/fa";

const EditInfo = () => {
  return (
    <Card extra={"w-full h-full p-3"}>
      {/* Edit Profile */}
      <div>
        <p className="flex  items-center gap-2 pl-4 text-2xl font-bold text-gray-800 hover:text-gray-500 dark:text-white">
          <span>
            <FaUserEdit />
          </span>
          Change photo
        </p>
      </div>
    </Card>
  );
};

export default EditInfo;
