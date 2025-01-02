import PropTypes from 'prop-types'

export function SelectionPanel({ showPanel, selectedRows }) {
  const hidePanelClass = !showPanel ? 'hide' : 'selection-panel'

  return (
    <div className={hidePanelClass}>
      <h3>Filas seleccionadas</h3>
      <ul>
        {selectedRows.map((row, index) => (
          <li key={index}>{row.name} {row.last_name} {row.second_last_name}</li>
        ))}
      </ul>
    </div>
  )
}

SelectionPanel.propTypes = {
  showPanel: PropTypes.bool.isRequired,
  selectedRows: PropTypes.arrayOf(PropTypes.object).isRequired,
}