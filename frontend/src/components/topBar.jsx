export default function TopBar({ toggleSidebar }) {
  return (
    <div className="w-full h-16 flex flex-row items-center justify-between px-4 text-white">
      <div className="flex flex-row items-center justify-between w-full border-b-2 py-4 border-gray-600">
        <button
          onClick={toggleSidebar}
          className="md:hidden mr-4"
        >
          <span className="text-2xl font-bold">☰</span>
        </button>

        <h2 className="text-xl font-bold">clay AI</h2>

        <div className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full">
          <h2 className="text-sm font-bold">P</h2>
        </div>
      </div>
    </div>
  )
}
