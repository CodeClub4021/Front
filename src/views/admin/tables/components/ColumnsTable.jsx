import CardMenu from "../../../../components/ManagerPanel/card/CardMenu";
import Card from "../../../../components/ManagerPanel/card/index";
import React, {useEffect, useMemo, useState} from "react";
import {
    useGlobalFilter,
    usePagination,
    useSortBy,
    useTable,
} from "react-table";
import {faX} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import DeleteMember from "./deleteMember.jsx";
import login from "../../../../pages/login/login.jsx";

const ColumnsTable = (props) => {
    const {columnsData, tableData} = props;
    const [render, setRender] = useState(false);  // then need a useEffect to fetch data

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

    useEffect(() => {
        // fetching data
        setRender(false);
    }, [render]);

    return (
        <Card extra={"w-full pb-10 p-4 h-full"}>
            <header className="relative flex items-center justify-between">
                <div className="text-2xl text- font-bold text-gray-900 dark:text-white">
                    Members
                </div>
                {/*<CardMenu />*/}
            </header>

            <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
                <table {...getTableProps()} className="w-full">
                    <thead>
                    {headerGroups.map((headerGroup, index) => (
                        <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                            {headerGroup.headers.map((column, index) => {
                                if (column.Header !== "ID"){
                                    return (
                                        <th
                                            {...column.getHeaderProps(column.getSortByToggleProps())}
                                            key={index}
                                            className="border-b border-gray-200 pr-14 pb-[10px] text-start dark:!border-navy-700"
                                        >
                                            <div
                                                className="flex w-full justify-between pr-10 text-lg tracking-wide text-gray-900">
                                                {column.render("Header")}
                                            </div>
                                        </th>
                                    )
                                }
                            })}
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
                                            <p className="text-sm font-bold text-gray-900 dark:text-white">
                                                {cell.value}
                                            </p>
                                        );
                                    } else if (cell.column.Header === "PROGRESS") {
                                        data = (
                                            <p className="mr-[10px] text-sm font-semibold text-gray-900 dark:text-white">
                                                {cell.value}%
                                            </p>
                                        );
                                    } else if (cell.column.Header === "AGE") {
                                        data = (
                                            <p className="text-sm font-bold text-gray-900 dark:text-white">
                                                {cell.value}
                                            </p>
                                        );
                                    } else if (cell.column.Header === "DATE OF SIGN UP") {
                                        data = (
                                            <p className="text-sm font-bold text-gray-900 dark:text-white">
                                                {cell.value}
                                            </p>
                                        );
                                    } else if (cell.column.Header === "DELETE") {
                                        data = (
                                            <DeleteMember userId={cell.row.original.id} url={""} setRender={setRender}/>
                                        )
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
