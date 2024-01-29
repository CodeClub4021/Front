import { MdFileUpload } from "react-icons/md";
import Card from "../../../../components/ManagerPanel/card/";
import React, { useRef } from "react";

const Upload = () => {
  const fileInputRef = useRef(null);

  const handleFileUpload = () => {
    // Trigger the file input click event
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    // Handle the selected file
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // Perform actions with the selected file, e.g., upload it
      console.log("Selected File:", selectedFile);
    }
  };
  return (
    <Card className="grid h-full w-full grid-cols-1 gap-3 rounded-[20px] bg-amber-300 bg-clip-border p-3 font-dm shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none 2xl:grid-cols-11">
      
      
      <div className="col-span-5  rounded-xl bg-lightPrimary dark:!bg-navy-700 2xl:col-span-12">
        <button className="flex h-full w-full flex-col items-center justify-center rounded-xl border-[2px] border-dashed border-gray-900 py-3 dark:!border-navy-700 lg:pb-0" onClick={handleFileUpload}>
          <MdFileUpload className="text-[80px] text-gray-900 dark:text-white" />
          <h4 className="text-xl font-bold text-gray-900 dark:text-white">
            Upload File To Change Your Image
          </h4>
          <p className="mt-2 text-sm font-medium text-gray-900">
            PNG and JPG files are allowed
          </p>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            accept=".jpg, .jpeg, .png"
            onChange={handleFileChange}
          />
        </button>
      </div>

        {/* <div className="col-span-5 flex h-full w-full flex-col justify-center overflow-hidden rounded-xl bg-white pl-3 pb-4 dark:!bg-navy-800">
          <h5 className="text-left text-xl font-bold leading-9 text-navy-700 dark:text-white">
            Complete Your Profile
          </h5>
          <p className="leading-1 mt-2 text-base font-normal text-gray-600">
            Stay on the pulse of distributed projects with an anline whiteboard to
            plan, coordinate and discuss
          </p>
          <button
            href=" "
            className="linear mt-4 flex items-center justify-center rounded-xl bg-brand-500 px-2 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
          >
            Publish now
          </button>
        </div> */}
    </Card>
  );
};

export default Upload;
