import { DataGrid } from "/src/modules/DataGrid.jsx";
// import { useEffect } from "react";

export function SearchPanel() {
  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    const rows = document.querySelectorAll(".data-grid tbody tr");
    rows.forEach((row) => {
      const columns = row.querySelectorAll("td");
      let found = false;
      columns.forEach((column) => {
        if (column.textContent.toLowerCase().includes(searchValue)) {
          found = true;
        }
      });
      if (found) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  };

  return (
    <>
      <div id="search" className="search-panel">
        <input
          type="search"
          name="input-search"
          id="input-search"
          placeholder="Escriba el nombre para filtrar"
          className="input-search"
          onInput={handleSearch}
        />
      </div>
      <DataGrid showSelectionPanel={true} />
    </>
  );
}
