import React from 'react'
import styled from 'styled-components'
import { useTable } from 'react-table'

import makeData from './makeData'

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid blue;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid blue;
      border-right: 1px solid blue;

      :last-child {
        border-right: 0;
      }
    }
  }
`

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

function TestTable() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'id_ENSA',
        accessor: 'id_ENSA', // accessor is the "key" in the data
      },
      {
        Header: 'CAP',
        accessor: 'CAP',
      },
      {
        Header: 'label',
        accessor: 'label',
      },
      {
        Header: 'L1_position',
        accessor: 'L1_position',
      },
      {
        Header: 'id_name',
        accessor: 'id_name',
      },
      {
        Header: 'owner',
        accessor: 'owner',
      }
    ],
    []
  )

  //const data = React.useMemo(() => makeData(20), [])
  /*const data = React.useMemo(
    () => [
      {
        id_ENSA:     'EC61132',
        CAP:         'HHH',
        label:       'pZmUBI',
        L1_position: 'P',
        id_name:     'EC61132 pL0M-P-pZmUBI-intron1-61132',
        owner:       'Thiago'
      },
      {
        id_ENSA:     'EC61133',
        CAP:         'HHH',
        label:       'pAtUbi',
        L1_position: 'P',
        id_name:     'EC61133 pL0M-P-pAtUbi10-61133',
        owner:       'Thiago'
      },
      {
        id_ENSA:     'EC61134',
        CAP:         'HHH',
        label:       'pLjUBI1',
        L1_position: 'P',
        id_name:     'EC61134 pL0M-P-pLjUBI1-61134',
        owner:       'Thiago'
      },
      {
        id_ENSA:    'EC15455',
        CAP:         null,
        label:       'pZmUBI',
        L1_position: 'PU',
        id_name:     'EC15455 pL0M-PU-pZmUBI-intron1-15455',
        owner:       'Ben Miller'
      },
      {
        id_ENSA:     'EC15062 ',
        CAP:         null,
        label:       'pAtUbi',
        L1_position: 'PU',
        id_name:     'EC15062 pL0M-PU-pAtUbi10-15062',
        owner:       'Ben Miller'
      },
      {
        id_ENSA:     'EC15251 ',
        CAP:         null,
        label:       'pLjUBI1',
        L1_position: 'PU',
        id_name:     'EC15251 pL0M-PU-pLjUBI1-15251',
        owner:       'Ben Miller'
      }
    ],
    []
  )*/

  const data = makeData()

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  )
}

export default TestTable
