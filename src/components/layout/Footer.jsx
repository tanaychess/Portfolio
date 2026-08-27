import { Code2, Github, Linkedin, Twitter } from 'lucide-react'
import { profile, skillGroups } from '../../data/portfolioData'
import { PlantDoodle } from '../common/Doodles'

const quickLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
]

const techList = ['React', 'Spring Boot', 'Java', 'PostgreSQL', 'Docker']

const socials = [
  { icon: Linkedin, href: profile.linkedin, label: 'LinkedIn' },
  { icon: Github, href: profile.github, label: 'GitHub' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
]

export default function Footer() {
  function goTo(e, id) {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 84
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative border-t border-line bg-surface-soft overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <a href="#home" onClick={(e) => goTo(e, 'home')} className="flex items-center gap-1.5 font-display font-bold text-lg text-main">
              <Code2 className="w-5 h-5 text-gold-400" strokeWidth={2.4} />
              <span>Tanay<span className="text-gold-400">.</span></span>
            </a>
            <p className="mt-3 text-sm text-muted max-w-xs leading-relaxed">
              Building the web, one line of code at a time.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-main mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={(e) => goTo(e, l.id)}
                    className="text-sm text-muted hover:text-gold-400 transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-main mb-4">Technologies</h4>
            <ul className="space-y-2.5">
              {techList.map((t) => (
                <li key={t} className="text-sm text-muted">
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-main mb-4">Connect</h4>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-9 h-9 grid place-items-center rounded-full border border-line bg-card text-muted hover:text-gold-400 hover:border-gold-400/60 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <PlantDoodle className="w-14 h-auto mt-6 text-gold-400/50 hidden sm:block" />
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted">
          <p>© 2026 {profile.name}. All rights reserved.</p>
          <p className="font-mono">
            {skillGroups.length} skill areas · built with React &amp; Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}
