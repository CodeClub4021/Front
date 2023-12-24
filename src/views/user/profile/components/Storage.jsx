import Card from "../../../../components/ManagerPanel/card/index";
import CardMenu from "../../../../components/ManagerPanel/card/CardMenu";
import React from "react";
import { BsCloudCheck } from "react-icons/bs";
const Storage = () => {
  return (
    <Card extra={"w-full h-full p-4"}>
      <div className="ml-auto">
        <CardMenu />
      </div>
      {/* Your storage */}
      <div className="mb-auto flex flex-col items-center justify-center">
      
        
      </div>

      {/* Progress bar */}

      <div className="flex flex-col">
        <div className="flex justify-between">
          <p className="text-sm font-medium text-gray-600">25.6 GB</p>
          <p className="text-sm font-medium text-gray-600">50 GB</p>
        </div>
        <div className="mt-2 flex h-3 w-full items-center rounded-full bg-lightPrimary dark:!bg-navy-700">
          <span className="h-full w-1/2 rounded-full bg-brand-500 dark:!bg-white" />
        </div>
      </div>
    </Card>
  );
};

export default Storage;
