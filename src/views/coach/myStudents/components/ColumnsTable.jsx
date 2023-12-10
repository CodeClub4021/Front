import CardMenu from "../../../../components/ManagerPanel/card/CardMenu";
import Card from "../../../../components/ManagerPanel/card/index";
import React, { useMemo } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

const ColumnsTable = (props) => {
  const { columnsData, tableData } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 5;

  return (
    <Card extra={"w-full pb-10 p-4 h-full"}>
      <header className="relative flex items-center justify-between">
        <div className="text-3xl text- font-bold text-gray-900 ">
          Students
        </div>
        <CardMenu />
      </header>

      <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
        <table {...getTableProps()} className="w-full">
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={index}
                    className="border-b border-gray-900 pr-14 pb-[10px] text-start dark:!border-grtext-gray-900"
                  >
                    <div className="flex w-full justify-between  ml-[50px] text-xl text-center tracking-wide text-gray-900">
                      {column.render("Header")}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell, index) => {
                    let data;
                    if (cell.column.Header === "NAME") {
                      data = (
                        <p className="mr-[10px] text-center text-base font-bold text-gray-900 ">
                          {cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "BMI") {
                      data = (
                        <p className="mr-[10px] text-center text-base font-semibold text-gray-900 ">
                          {cell.value}
                        </p>
                      );
                    } 
                    else if (cell.column.Header === "WEIGHT (KG)") {
                      data = (
                        <p className="mr-[10px] text-center text-base font-semibold text-gray-900 ">
                          {cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "HEIGHT (CM)") {
                      data = (
                        <p className="mr-[10px] text-center text-base font-semibold text-gray-900 ">
                          {cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "AGE") {
                      data = (
                        <p className="text-center text-base font-bold text-gray-900 ">
                          {cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "DATE OF SIGN UP") {
                      data = (
                        <p className="text-center text-base font-bold text-gray-900 ">
                          {cell.value}
                        </p>
                      );
                    }
                    return (
                      <td
                        className="pt-[14px] pb-[20px] sm:text-[14px]"
                        {...cell.getCellProps()}
                        key={index}
                      >
                        {data}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default ColumnsTable;
