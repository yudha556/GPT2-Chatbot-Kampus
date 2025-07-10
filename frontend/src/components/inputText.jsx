import { SendHorizontal } from 'lucide-react'
import { useState } from 'react'

export default function InputText() {
  const [input, setInput] = useState('')

  const handleInput = (e) => {
    const textarea = e.target
    textarea.style.height = 'auto' 
    textarea.style.height = `${textarea.scrollHeight}2px` 
    setInput(textarea.value)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleSend = () => {
    if (input.trim() === '') return
    console.log('User mengirim:', input)
    setInput('')
  }

  return (
    <div className="w-full min-h-16 max-h-40 rounded-2xl flex items-center justify-between bg-[#2c2c2c] text-white px-2 py-2 overflow-y-visible">
      <textarea
        value={input}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        placeholder="Tanyakan sesuatu..."
        className="w-full resize-none bg-transparent px-4 outline-none text-sm font-sans max-h-32 overflow-y-auto"
        rows={1}
      />
      <div
        onClick={handleSend}
        className="flex items-center justify-center w-10 h-10 rounded-full ml-2 hover:bg-gray-500 transition-colors cursor-pointer"
      >
        <SendHorizontal size={20} />
      </div>
    </div>
  )
}
