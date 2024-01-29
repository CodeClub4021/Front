import CardMenu from "../../../../components/ManagerPanel/card/CardMenu";
import Card from "../../../../components/ManagerPanel/card/index";
import { DiApple } from "react-icons/di";
import { DiAndroid } from "react-icons/di";
import { DiWindows } from "react-icons/di";

import React, { useMemo } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import Progress from "../../../../components/ManagerPanel/progress";

const DevelopmentTable = (props) => {
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
  initialState.pageSize = 11;

  return (
    <Card extra={"w-full h-full p-4"}>
      <div className="relative flex items-center justify-between">
        <div className="text-navy-700 text-xl font-bold dark:text-white">
          Development Table
        </div>
        <CardMenu />
      </div>

      <div className="h-full overflow-x-scroll xl:overflow-x-hidden">
        <table
          {...getTableProps()}
          className="mt-8 h-max w-full"
          variant="simple"
          color="gray-500"
          mb="24px"
        >
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="dark:!border-navy-700 border-b border-gray-200 pb-[10px] pr-32 text-start "
                    key={index}
                  >
                    <div className="text-xs font-bold tracking-wide text-gray-600">
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
                    let data = "";
                    if (cell.column.Header === "NAME") {
                      data = (
                        <p className="text-navy-700 text-sm font-bold dark:text-white">
                          {cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "TECH") {
                      data = (
                        <div className="flex items-center gap-2">
                          {cell.value.map((item, key) => {
                            if (item === "apple") {
                              return (
                                <div
                                  key={key}
                                  className="text-[22px] text-gray-600 dark:text-white"
                                >
                                  <DiApple />
                                </div>
                              );
                            } else if (item === "android") {
                              return (
                                <div
                                  key={key}
                                  className="text-[21px] text-gray-600 dark:text-white"
                                >
                                  <DiAndroid />
                                </div>
                              );
                            } else if (item === "windows") {
                              return (
                                <div
                                  key={key}
                                  className="text-xl text-gray-600 dark:text-white"
                                >
                                  <DiWindows />
                                </div>
                              );
                            } else return null;
                          })}
                        </div>
                      );
                    } else if (cell.column.Header === "DATE") {
                      data = (
                        <p className="text-navy-700 text-sm font-bold dark:text-white">
                          {cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "PROGRESS") {
                      data = (
                        <div className="flex items-center gap-3">
                          <p className="text-navy-700 text-sm font-bold dark:text-white">
                            {cell.value}%
                          </p>
                          <Progress width="w-[68px]" value={cell.value} />
                        </div>
                      );
                    }
                    return (
                      <td
                        {...cell.getCellProps()}
                        key={index}
                        className="pb-3 pt-[14px] text-[14px]"
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

export default DevelopmentTable;
