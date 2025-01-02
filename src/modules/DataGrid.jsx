import PropTypes from "prop-types";
import { SelectionPanel } from "/src/modules/SelectionPanel";
import { useState, useEffect } from "react";
import { getRequest } from "../api/api";

export function DataGrid({ showSelectionPanel }) {
  const [selectedRows, setSelectedRows] = useState([]);
  const [data, setData] = useState([]);
  // let gridRows = [];
  // const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    getRequest("https://jonaxdev.com/sample-data/persons.json", {})
      .then((data) => {
        // console.log('data', data)
        setData(data);
        // gridRows = data
      })
      .catch((error) => console.error(error));
  }, []);

  function handleRowClick(event) {
    const selectedRow = event.target.parentElement;
    const rowData = {
      id: selectedRow.querySelector("[data-id]").textContent,
      name: selectedRow.querySelector("[data-name]").textContent,
      last_name: selectedRow.querySelector("[data-last-name]").textContent,
      second_last_name: selectedRow.querySelector("[data-second_last-name]")
        .textContent,
      voice: selectedRow.querySelector("[data-voice]").textContent,
    };

    // console.log('rowData', rowData)

    if (selectedRow.classList.contains("selected-row")) {
      // Si la fila ya está seleccionada, la quitamos de selectedRows
      setSelectedRows((prevSelectedRows) =>
        prevSelectedRows.filter((row) => row.id !== rowData.id)
      );
    } else {
      // Si la fila no está seleccionada, la agregamos a selectedRows
      setSelectedRows((prevSelectedRows) => [...prevSelectedRows, rowData]);
    }

    selectedRow.classList.toggle("selected-row");

    // console.log('handleRowClick', selectedRows)
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
            <RowDataGrid data={data} handleRowClick={handleRowClick} />
          </tbody>
        </table>
      </div>
      <SelectionPanel
        showPanel={showSelectionPanel}
        selectedRows={selectedRows}
      />
    </>
  );
}

DataGrid.propTypes = {
  showSelectionPanel: PropTypes.bool.isRequired,
  filteredData: PropTypes.arrayOf(PropTypes.object),
};

function RowDataGrid({ data, handleRowClick }) {
  return (
    <>
      {data.map((row) => (
        <tr key={row.id} onClick={handleRowClick}>
          <td data-id={row.id}>{row.id}</td>
          <td data-name={row.name}>{row.name}</td>
          <td data-last-name={row.last_name}>{row.last_name}</td>
          <td data-second_last-name={row.second_last_name}>
            {row.second_last_name}
          </td>
          <td data-voice={row.voice}>{row.voice}</td>
        </tr>
      ))}
    </>
  );
}

RowDataGrid.propTypes = {
  data: PropTypes.array.isRequired,
  handleRowClick: PropTypes.func.isRequired,
};
