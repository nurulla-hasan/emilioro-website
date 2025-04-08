"use client"

import { useState } from "react"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Underline from "@tiptap/extension-underline"
import TextAlign from "@tiptap/extension-text-align"
import {
  Bold,
  Italic,
  UnderlineIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  ImageIcon,
  ChevronDown,
} from "lucide-react"

const TiptapEditor = ({ bio }) => {
  const initialContent = bio;

  const [fontSize, setFontSize] = useState("12")
  const [showFontSizes, setShowFontSizes] = useState(false)

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
        alignments: ["left", "center", "right"],
      }),
    ],
    content: initialContent,
  })

  if (!editor) {
    return null
  }

  const fontSizes = ["8", "10", "12", "14", "16"]

  const applyFontSize = (size) => {
    editor.chain().focus().setFontSize(size).run()
    setFontSize(size)
    setShowFontSizes(false)
  }

  return (
    <div className="rounded-lg p-4">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-end gap-2 pb-2 mb-2">
        {/* Image Button */}
        <button className="p-1.5 cursor-pointer rounded hover:bg-gray-100 border border-gray-200">
          <ImageIcon size={16} className="text-gray-600" />
        </button>

        {/* Font Size Dropdown */}
        <div className="relative">
          <button
            className="flex items-center cursor-pointer gap-1 p-1.5 rounded hover:bg-gray-100 border border-gray-200"
            onClick={() => setShowFontSizes(!showFontSizes)}
          >
            <span className="text-sm">{fontSize}</span>
            <ChevronDown size={14} className="text-gray-600" />
          </button>

          {showFontSizes && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded shadow-lg z-10">
              {fontSizes.map((size) => (
                <button
                  key={size}
                  className="block cursor-pointer w-full text-left px-3 py-1.5 text-sm hover:bg-gray-100"
                  onClick={() => applyFontSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Text Formatting */}
        <div className="flex border border-gray-200 rounded overflow-hidden *:cursor-pointer">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`p-1.5 ${editor.isActive("bold") ? "bg-gray-200" : "hover:bg-gray-100"}`}
          >
            <Bold size={16} className="text-gray-600" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`p-1.5 ${editor.isActive("italic") ? "bg-gray-200" : "hover:bg-gray-100"}`}
          >
            <Italic size={16} className="text-gray-600" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={`p-1.5 ${editor.isActive("underline") ? "bg-gray-200" : "hover:bg-gray-100"}`}
          >
            <UnderlineIcon size={16} className="text-gray-600" />
          </button>
        </div>

        {/* Alignment */}
        <div className="flex border border-gray-200 rounded overflow-hidden *:cursor-pointer">
          <button
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
            className={`p-1.5 ${editor.isActive({ textAlign: "left" }) ? "bg-gray-200" : "hover:bg-gray-100"}`}
          >
            <AlignLeft size={16} className="text-gray-600" />
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
            className={`p-1.5 ${editor.isActive({ textAlign: "center" }) ? "bg-gray-200" : "hover:bg-gray-100"}`}
          >
            <AlignCenter size={16} className="text-gray-600" />
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign("right").run()}
            className={`p-1.5 ${editor.isActive({ textAlign: "right" }) ? "bg-gray-200" : "hover:bg-gray-100"}`}
          >
            <AlignRight size={16} className="text-gray-600" />
          </button>
        </div>

        {/* Lists */}
        <div className="flex border border-gray-200 rounded overflow-hidden *:cursor-pointer">
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`p-1.5 ${editor.isActive("bulletList") ? "bg-gray-200" : "hover:bg-gray-100"}`}
          >
            <List size={16} className="text-gray-600" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`p-1.5 ${editor.isActive("orderedList") ? "bg-gray-200" : "hover:bg-gray-100"}`}
          >
            <ListOrdered size={16} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Editor Content */}
      <EditorContent
        editor={editor}
        className="outline-none border-none text-sm text-gray-500"
      />

      {/* Button */}
      <div className="flex justify-center mt-4">
        <button className="bg-gradient-to-b cursor-pointer from-[#1C4587] to-[#3279EA] text-white text-sm px-4 py-2 rounded-sm hover:opacity-90 transition-opacity">
          Generate with AI
        </button>
      </div>
    </div>
  )
}

export default TiptapEditor

