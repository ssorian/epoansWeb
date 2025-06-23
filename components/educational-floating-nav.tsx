"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"
import { NAV_ITEMS } from "@/constants/images"

export function EducationalFloatingNav() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    if (isMobile) {
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Fixed top navigation bar */}
      <motion.div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        {/* Background with blur effect */}
        <div className="absolute inset-0 bg-zinc-900/80 backdrop-blur-md border-b border-zinc-700/50"></div>

        {/* Navigation content */}
        <div className="relative">
          <div className="container mx-auto px-4 py-3">
            {isMobile ? (
              /* Mobile Navigation */
              <div className="flex items-center justify-between">
                <div className="font-bold text-lg">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                    Espacio
                  </span>
                  <span className="text-white"> Colaborativo</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-zinc-400 hover:text-white hover:bg-zinc-700/50 transition-colors"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </div>
            ) : (
              /* Desktop Navigation */
              <div className="flex items-center justify-center">
                {/* Brand on the left */}
                <div className="absolute left-4 font-bold text-lg">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                    Espacio
                  </span>
                  <span className="text-white"> Colaborativo</span>
                </div>

                {/* Centered navigation links */}
                <div className="flex items-center gap-1 bg-zinc-800/60 backdrop-blur-sm rounded-full px-6 py-2 border border-zinc-700/50">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur opacity-50"></div>
                  <div className="relative flex items-center gap-1">
                    {NAV_ITEMS.map((item, index) => (
                      <button
                        key={item.name}
                        onClick={() => handleNavClick(item.href)}
                        className="px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-700/50 rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Mobile menu overlay */}
      {isMobile && (
        <motion.div
          className={`fixed inset-0 z-40 ${isOpen ? "block" : "hidden"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setIsOpen(false)} />

          {/* Menu content */}
          <div className="relative flex flex-col items-center justify-center h-full">
            <div className="bg-zinc-800/90 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700/50 max-w-sm w-full mx-4">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur opacity-50"></div>
              <div className="relative space-y-4">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full px-6 py-3 text-lg font-medium text-white hover:text-purple-400 hover:bg-zinc-700/50 rounded-lg transition-all duration-200 cursor-pointer text-center"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}
