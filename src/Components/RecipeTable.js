import React, {useMemo} from 'react'
import { useTable } from 'react-table'
import { render } from 'react-dom'
import { aggregateRecipes, getRecipesByName } from '../Services/recipe.service'
import {
    DataTable,
    DataTableCell,
    DataTableHeadCell,
    DataTableRow,
    DataTableBody,
    DataTableContent,
    DataTableHead,
  } from '@rmwc/data-table'

import '@material/data-table/dist/mdc.data-table.css'
import '@rmwc/data-table/data-table.css'
import '@rmwc/icon/icon.css'
import { EditableCell } from './EditableCell'
import { useRecipes, RecipesContext } from '../Hooks/recipesHook'


export const RecipeTable = () => {

    const {state:recipes, dispatch} = useRecipes()
    
    const data = useMemo(
        () => {
            return aggregateRecipes(recipes)
        },
        [recipes]
        )
        
    const columns = React.useMemo(
        () => [
            {
                Header: 'Ingredient',
                accessor: 'ingredient', // accessor is the "key" in the data
            },
            {
                Header: 'Quantity',
                accessor: 'quantity',
                Cell: EditableCell
            },
            {
                Header: "Quantity Range",
                accessor: 'quantityRange'
            },
            {
                Header: 'Use Rate',
                accessor: 'useRate',
            },
            
        ],
        []
        )
            
    const updateCellValue = (rowIndex, columnId, value) => {
        // We also turn on the flag to not reset the page
        console.log(rowIndex, columnId, value)
    }
    const tableInstance = useTable( {columns, data, updateCellValue} )
            
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance
    return (
        // apply the table props
        <>
        <DataTable {...getTableProps()}>
            <DataTableContent>
                <DataTableHead>
                    {headerGroups.map(headerGroup => (
                        <DataTableRow {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(header => (
                                <DataTableHeadCell {...header.getHeaderProps()}>
                                    {header.render('Header')}
                                </DataTableHeadCell>
                            ))}
                        </DataTableRow>
                    ))}
                </DataTableHead>
                <DataTableBody>
                        {rows.map((row,i) => {
                            prepareRow(row)
                            return (
                                <DataTableRow {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return (
                                            <DataTableCell {...cell.getCellProps()}>
                                                {cell.render('Cell')}
                                            </DataTableCell>
                                        )
                                    })}
                                </DataTableRow>
                            )
                        })}
                </DataTableBody>
            </DataTableContent>
        </DataTable>
    </>
            
    )
}