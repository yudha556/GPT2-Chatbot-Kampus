import { Bot, PanelRight, SquarePen, MessageSquare } from 'lucide-react'

function Sidebar({ isOpen, setIsOpen }) {
  const contoh = [
    { name: 'Contoh 1' },
    { name: 'Contoh 2' },
    { name: 'Contoh 3' },
    { name: 'Contoh 4' },
  ]

  return (
    <div
      className={`h-full overflow-hidden py-4 px-2 bg-[#1a1818] text-white ${
        isOpen ? 'w-64' : 'w-20'
      } transition-all duration-300 ease-in-out`}
    >
      {/* Header */}
      <div className="flex items-center justify-between w-full px-1 mb-4">
        <div
          onClick={!isOpen ? () => setIsOpen(true) : undefined}
          className="cursor-pointer"
        >
          <Bot size={25} />
        </div>

        {isOpen && (
          <PanelRight
            size={25}
            onClick={() => setIsOpen(false)}
            className="cursor-pointer"
          />
        )}
      </div>

      <div className="flex items-center gap-3 py-3 px-2 hover:bg-gray-500 rounded-xl cursor-pointer">
        <SquarePen size={20} />
        {isOpen && <span className="text-sm font-semibold">Panel</span>}
      </div>

      {isOpen && <h4 className="px-2 text-sm text-gray-500 mt-4">Obrolan</h4>}
      <div className="space-y-1 mt-2">
        {contoh.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 py-2 px-2 rounded-lg hover:bg-gray-700 cursor-pointer transition-colors"
          >
            <MessageSquare size={16} />
            {isOpen && <span className="text-sm">{item.name}</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
