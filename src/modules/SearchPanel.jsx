import { DataGrid } from '/src/modules/DataGrid.jsx'


export function SearchPanel(){
    return (
        <>    
            <div id="search" className="search-panel">
                <input type="search" name="input-search" id="input-search" placeholder='Escriba el nombre para filtrar' className="input-search"/>
            </div>
            <DataGrid                 
                showSelectionPanel={true} 
            />
        </>
    )
}