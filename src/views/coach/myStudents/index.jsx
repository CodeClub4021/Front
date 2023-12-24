

import {
  columnsDataColumns
} from "./variables/columnsData";
import tableDataColumns from "./variables/tableDataColumns.json";
import ColumnsTable from "./components/ColumnsTable";


const Tables = () => {
  return (
    <div>
      
    
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-1">
        <ColumnsTable
          columnsData={columnsDataColumns}
          tableData={tableDataColumns}
        />

        {/* <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        /> */}
       
      </div>
      
    </div>
  );
};

export default Tables;
