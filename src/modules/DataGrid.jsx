import PropTypes from 'prop-types'
import { SelectionPanel } from '/src/modules/SelectionPanel'
import { useState } from 'react'

export function DataGrid({ showSelectionPanel }) {
  const [selectedRows, setSelectedRows] = useState([])

  function handleRowClick(event) {
    const selectedRow = event.target.parentElement
    const rowData = Array.from(selectedRow.children).map(cell => cell.textContent)

    setSelectedRows(prevSelectedRows => [...prevSelectedRows, rowData])

    console.log('handleRowClick', selectedRows)
  }

  return (
    <>
      <div id="data-container" className="data-container">
        <small>Haga clic en una fila para seleccionar</small>
        <table className="data-grid">
          <thead>
            <tr>
              <th>No.</th>
              <th>Nombre</th>
              <th>Apellido paterno</th>
              <th>Apellido materno</th>
              <th>Voz</th>
            </tr>
          </thead>
          <tbody>
            <tr onClick={handleRowClick}>
              <td>1</td>
              <td>Ismari</td>
              <td>Zamora</td>
              <td>Tapia</td>
              <td>Soprano</td>
            </tr>
            <tr onClick={handleRowClick}>
              <td>2</td>
              <td>Yera</td>
              <td>Martínez</td>
              <td>Cortés</td>
              <td>Soprano</td>
            </tr>
          </tbody>
        </table>
      </div>
      <SelectionPanel showPanel={showSelectionPanel} selectedRows={selectedRows} />
    </>
  )
}

DataGrid.propTypes = {
  showSelectionPanel: PropTypes.bool.isRequired,
}