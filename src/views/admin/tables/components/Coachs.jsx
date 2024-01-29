import Card from "../../../../components/ManagerPanel/card";
import Progress from "../../../../components/ManagerPanel/progress";
import React, {useEffect, useMemo, useState} from "react";
import AddCoachCard from "../../../../components/ManagerPanel/card/AddCoachCard.jsx";
import ShowStars from "../../../../components/ManagerPanel/ShowStars/ShowStars";
import {
    useGlobalFilter,
    usePagination,
    useSortBy,
    useTable,
} from "react-table";
import DeleteMember from "./deleteMember.jsx";

function Coachs(props) {
    const {columnsData, tableData} = props;
    const [render, setRender] = useState(false);

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

    const {getTableProps, getTableBodyProps, headerGroups, page, prepareRow} =
        tableInstance;

    useEffect(() => {
        setRender(false);
    }, [render]);

    return (
        <Card extra={"h-[300px] w-full"}>
            {/* Top Creator Header */}
            <div
                className="dark:!bg-navy-700 flex h-fit w-full items-center justify-between rounded-t-2xl px-4 pb-[20px]  pt-4 dark:shadow-none">
                <h4 className="text-gray-900 text-2xl font-bold dark:text-white">
                    Coachs
                </h4>
                <AddCoachCard url={""}/>
            </div>

            {/* Top Creator Heading */}
            <div className="w-full overflow-x-scroll px-4 md:overflow-x-hidden">
                <table
                    {...getTableProps()}
                    className="w-full min-w-[500px] overflow-x-scroll"
                >
                    <thead>
                    {headerGroups.map((headerGroup, index) => (
                        <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                            {headerGroup.headers.map((column, index) => {
                                if (column.Header !== "Id") {
                                    return (<th
                                        {...column.getHeaderProps(column.getSortByToggleProps())}
                                        key={index}
                                    >
                                        <div
                                            className="flex items-center justify-between pb-2 pt-4 text-start text-lg uppercase tracking-wide text-gray-900">
                                            {column.render("Header")}
                                        </div>
                                    </th>)
                                }
                            })}
                        </tr>
                    ))}
                    </thead>

                    <tbody {...getTableBodyProps()} className="px-4">
                    {page.map((row, index) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} key={index}>
                                {row.cells.map((cell, index) => {
                                    let data = "";
                                    console.log(cell.column.Header)
                                    if (cell.column.Header === "Name") {
                                        data = (
                                            <div className="flex items-center gap-2">
                                                <div className="h-[50px] w-[50px] rounded-full">
                                                    <img
                                                        src={cell.value[1]}
                                                        className="h-full w-full rounded-full"
                                                        alt=""
                                                    />
                                                </div>
                                                <a href="http://localhost:5173/coach/profile"
                                                   className="text-xl font-medium text-gray-900 dark:text-white">
                                                    {cell.value[0]}
                                                </a>
                                            </div>
                                        );
                                    } else if (cell.column.Header === "Rating") {
                                        data = (
                                            <div className="mx-2 flex font-bold">
                                                <ShowStars StarsNumbers="3"/>
                                            </div>
                                        );
                                    } else if (cell.column.Header === "Delete") {
                                        data = (
                                            <DeleteMember setRender={setRender} url={""} userId={cell.row.original.id}/>
                                        )
                                    }
                                    return (
                                        <td
                                            className="py-3 text-sm"
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
}

export default Coachs;
