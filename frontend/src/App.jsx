import './App.css'
import { useState } from 'react'
import Sidebar from './components/sideBar.jsx'
import TopBar from './components/topBar.jsx'
import InputText from './components/inputText.jsx'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative flex w-screen h-screen overflow-hidden bg-[#121212]">
      <div
        className={`
          ${isOpen ? 'w-64' : 'w-20'}
          md:static md:flex
          absolute z-50 h-full
          ${isOpen ? 'block' : 'hidden'} md:block
          transition-all duration-300
        `}
      >
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
        />
      )}

      <div className="flex-1 flex flex-col text-white overflow-hidden">
        <TopBar toggleSidebar={() => setIsOpen((prev) => !prev)} />

        <div className="flex-1 overflow-y-auto px-4 md:px-20 py-3 space-y-4">
          <h1>ini adalah konten</h1>
        </div>

        <div className="px-4 md:px-20 py-3">
          <InputText />
        </div>
      </div>
    </div>
  )
}

export default App
