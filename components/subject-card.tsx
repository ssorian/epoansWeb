"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface SubjectCardProps {
  title: string
  description: string
  icon: ReactNode
  onClick: () => void
}

export function SubjectCard({ title, description, icon, onClick }: SubjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group"
    >
      <div
        className="relative h-full overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 group-hover:border-purple-500/50 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

        <div className="relative h-full flex flex-col items-center text-center">
          <div className={`mb-4 transition-transform duration-300 ${isHovered ? "scale-110" : "scale-100"}`}>
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center">
              {icon}
            </div>
          </div>

          <h3 className="text-xl font-bold mb-2 group-hover:text-purple-300 transition-colors">{title}</h3>

          <p className="text-zinc-400 text-sm group-hover:text-zinc-300 transition-colors">{description}</p>

          <div className="absolute top-3 right-3">
            <div
              className={`w-2 h-2 rounded-full ${isHovered ? "bg-green-500" : "bg-zinc-500"} transition-colors duration-300`}
            ></div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
