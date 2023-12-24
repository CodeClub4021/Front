import Coachs from "./components/Coachs";
import GymGallery from "./components/GymGallery";
import GymInfo from "./components/GymInfo";

import {
  columnsDataDevelopment,
  columnsDataCheck,
  columnsDataColumns,
  columnsDataComplex,
} from "./variables/columnsData";
import tableDataColumns from "./variables/tableDataColumns.json";
import ColumnsTable from "./components/ColumnsTable";
import tableDataCoachs from "./variables/tableDataCoachs.json"
import { tableColumnsCoachs } from "./variables/tableColumnsCoachs"

const Tables = () => {
  return (
    <div>
      <div className="mt-8 col-span-5 lg:col-span-6 lg:mb-0 3xl:col-span-4">
          <GymGallery />
      </div>

      <div className="mt-5 col-span-5 lg:col-span-12 lg:mb-0 3xl:col-span-2">
          <GymInfo />
      </div>

      {/* <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        <DevelopmentTable
          columnsData={columnsDataDevelopment}
          tableData={tableDataDevelopment}
        />
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
      </div> */}

      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        <ColumnsTable
          columnsData={columnsDataColumns}
          tableData={tableDataColumns}
        />

        {/* <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        /> */}
        <Coachs
        extra="mb-5"
        tableData={tableDataCoachs}
        columnsData={tableColumnsCoachs}
        />
      </div>
      
    </div>
  );
};

export default Tables;
