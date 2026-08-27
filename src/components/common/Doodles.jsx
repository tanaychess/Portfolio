import { motion } from 'framer-motion'

export function SquiggleUnderline({ className = '' }) {
  return (
    <svg viewBox="0 0 120 14" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 10C15 3 28 3 40 8C52 13 65 4 78 5C91 6 100 11 118 6"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Sparkle({ className = '', delay = 0 }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      animate={{ opacity: [0.3, 1, 0.3], scale: [0.85, 1.1, 0.85], rotate: [0, 15, 0] }}
      transition={{ duration: 3, repeat: Infinity, delay, ease: 'easeInOut' }}
    >
      <path
        d="M12 2L14 9.5L21.5 12L14 14.5L12 22L10 14.5L2.5 12L10 9.5L12 2Z"
        fill="currentColor"
      />
    </motion.svg>
  )
}

export function DashedArrow({ className = '' }) {
  return (
    <svg viewBox="0 0 90 70" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 6C10 32 30 58 60 60"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="6 6"
        strokeLinecap="round"
      />
      <path
        d="M52 52L61 61L67 50"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CurvedConnector({ className = '' }) {
  return (
    <svg viewBox="0 0 220 130" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 8C60 8 8 70 70 78C132 86 96 20 160 16C190 14 200 40 214 60"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="5 7"
        strokeLinecap="round"
      />
      <circle cx="214" cy="60" r="4" fill="currentColor" />
    </svg>
  )
}

export function CodeBrackets({ className = '' }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22 10C14 10 12 14 12 22C12 28 8 30 8 30C8 30 12 32 12 38C12 46 14 50 22 50"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38 10C46 10 48 14 48 22C48 28 52 30 52 30C52 30 48 32 48 38C48 46 46 50 38 50"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function BulbIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 4C13 4 8 9 8 16C8 21 11 24 13 27C14 28.5 14.5 29.5 14.5 31H25.5C25.5 29.5 26 28.5 27 27C29 24 32 21 32 16C32 9 27 4 20 4Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M15 35H25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M17 31V35" stroke="currentColor" strokeWidth="2" />
      <path d="M23 31V35" stroke="currentColor" strokeWidth="2" />
      <path d="M20 11V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 15L24 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function BrowserFrame({ className = '' }) {
  return (
    <svg viewBox="0 0 90 70" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="86" height="66" rx="6" stroke="currentColor" strokeWidth="2" />
      <line x1="2" y1="16" x2="88" y2="16" stroke="currentColor" strokeWidth="2" />
      <circle cx="9" cy="9" r="1.6" fill="currentColor" />
      <circle cx="15" cy="9" r="1.6" fill="currentColor" />
      <circle cx="21" cy="9" r="1.6" fill="currentColor" />
      <line x1="12" y1="26" x2="60" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="12" y1="35" x2="76" y2="35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <line x1="12" y1="44" x2="50" y2="44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <rect x="12" y="52" width="24" height="10" rx="3" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

export function ChatBubble({ className = '' }) {
  return (
    <svg viewBox="0 0 50 44" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 6C4 3.8 5.8 2 8 2H42C44.2 2 46 3.8 46 6V28C46 30.2 44.2 32 42 32H16L6 42V32H8C5.8 32 4 30.2 4 28V6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="17" r="2" fill="currentColor" />
      <circle cx="25" cy="17" r="2" fill="currentColor" />
      <circle cx="34" cy="17" r="2" fill="currentColor" />
    </svg>
  )
}

export function TrophyIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 44 44" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 6H30V16C30 20.4 26.4 24 22 24C17.6 24 14 20.4 14 16V6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M14 9H8V13C8 16 10.5 18 14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M30 9H36V13C36 16 33.5 18 30 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M22 24V30" stroke="currentColor" strokeWidth="2" />
      <path d="M15 38H29L27 30H17L15 38Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  )
}

export function PaperPlane({ className = '' }) {
  return (
    <svg viewBox="0 0 46 46" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M42 4L4 20L20 24L24 40L42 4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M42 4L20 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function PlantDoodle({ className = '' }) {
  return (
    <svg viewBox="0 0 60 80" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M30 78V38" stroke="currentColor" strokeWidth="2" />
      <path d="M30 44C30 44 12 40 12 24C12 24 30 24 30 44Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M30 38C30 38 48 34 48 18C48 18 30 18 30 38Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M30 30C30 30 16 24 20 8C20 8 34 12 30 30Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M14 78H46L42 62H18L14 78Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  )
}
