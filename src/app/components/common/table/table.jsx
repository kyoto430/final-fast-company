import React from "react";
import PropTypes from "prop-types";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

const Table = ({ onSort, selectedSort, columns, data, children }) => {
    return (
        <div className="table-responsive-lg">
            <table className="table table-hover">
                {children || (
                    <>
                        <TableHeader {...{ onSort, selectedSort, columns }} />
                        <TableBody {...{ columns, data }} />
                    </>
                )}
            </table>
        </div>
    );
};
Table.propTypes = {
    onSort: PropTypes.func,
    selectedSort: PropTypes.object,
    columns: PropTypes.object,
    data: PropTypes.array,
    children: PropTypes.array
};

export default Table;
