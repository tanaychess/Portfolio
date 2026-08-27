import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Moon, Sun, Code2 } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'
import { useActiveSection } from '../../hooks/useActiveSection'
import { cn } from '../../utils/cn'

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const active = useActiveSection(NAV_ITEMS.map((n) => n.id))

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  function handleNavClick(e, id) {
    e.preventDefault()
    setOpen(false)
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 84
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled ? 'bg-surface/85 backdrop-blur-xl border-b border-line shadow-card' : 'bg-transparent',
      )}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 h-[72px]">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="flex items-center gap-1.5 font-display font-bold text-lg text-main shrink-0"
        >
          <Code2 className="w-5 h-5 text-gold-400" strokeWidth={2.4} />
          <span>Tanay<span className="text-gold-400">.</span></span>
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={cn('nav-link', active === item.id && 'active')}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="btn-gold !py-2.5 !px-5 text-sm">
            Let&apos;s Talk
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-10 h-10 grid place-items-center rounded-full border border-line bg-card text-main hover:border-gold-400/60 transition-colors duration-300"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="grid place-items-center"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>

        <div className="flex items-center gap-2.5 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-10 h-10 grid place-items-center rounded-full border border-line bg-card text-main"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="w-10 h-10 grid place-items-center rounded-full border border-line bg-card text-main"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-surface/97 backdrop-blur-xl border-b border-line"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={cn(
                      'block py-3 text-base font-medium border-b border-line/60 last:border-none',
                      active === item.id ? 'text-gold-400' : 'text-muted',
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="btn-gold w-full text-sm"
                >
                  Let&apos;s Talk
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
