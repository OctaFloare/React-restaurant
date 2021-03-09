import {Title} from "./details/title";
import {ShowDetails} from "./details/body";
import React from "react";
import {useSandwichContext} from "./hooks/use-sandwich-context";

export const useSetOptions = (data) => {
    const {selected, setSelected} = useSandwichContext();
    const options = {
        filterType: 'dropdown',
        viewColumns: false,
        filter: false,
        print: false,
        rowsSelected: selected,
        download: false,
        textLabels: {
            selectedRows: {
                text: "produs(e) selectat(e)"
            }
        },
        selectableRowsOnClick: true,
        selectableRowsHeader: false,
        onRowSelectionChange: (currentRowsSelected, allRowsSelected, rowsSelected) => setSelected(rowsSelected),
        expandableRows: true,
        customToolbarSelect: () =><div></div>,
        renderExpandableRow: (rowData, rowMeta) => <>
            <Title/>
            <ShowDetails value={data[rowMeta.dataIndex].ingredients}/>
        </>,
    };
    return options;
}