// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import { useEffect } from 'react'
import { Header } from './modules/Header.jsx'
import { SearchPanel } from './modules/SearchPanel.jsx'

function App() {
  // const [selectedRows, setSelectedRows] = useState([])

  // const handleDataGridClick = rows => {
  //   console.log('handleClick en DataGrid ha sido ejecutado', rows);
  //   setSelectedRows(rows)

  //   console.log('selectedRows', selectedRows)
  // }

  return (
    <>
      <Header />
      <main id="main" className='main'>
        <SearchPanel />
      </main>      
    </>
  )
}

export default App
