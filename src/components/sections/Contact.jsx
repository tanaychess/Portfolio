import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Linkedin, Github, Send, CheckCircle2 } from 'lucide-react'
import { profile } from '../../data/portfolioData'
import SectionHeading from '../common/SectionHeading'
import RevealOnScroll from '../common/RevealOnScroll'
import Card from '../common/Card'
import { PaperPlane, Sparkle } from '../common/Doodles'

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: 'Location',
    value: profile.location,
    href: null,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: profile.linkedinHandle,
    href: profile.linkedin,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: profile.githubHandle,
    href: profile.github,
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState('idle')

  function handleChange(e) {
    setForm((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (!form.name || !form.email || !form.message) return

    setStatus('sent')

    setTimeout(() => {
      setStatus('idle')

      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, 2800)
  }

  return (
    <section
      id="contact"
      className="relative py-20 lg:py-28 bg-surface overflow-hidden"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute top-10 right-0 w-[360px] h-[360px] rounded-full bg-gold-400/8 glow-orb" />

      {/* Decorative sparkle */}
      <Sparkle
        className="hidden lg:block absolute bottom-24 left-1/3 w-6 h-6 text-gold-400/40"
        delay={0.5}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">

        <div className="grid lg:grid-cols-2 gap-14">

          {/* =====================================================
              LEFT — CONTACT INFORMATION
          ====================================================== */}
          <div>

            <SectionHeading
              title="Let's"
              highlight="Connect"
              description="Have a project in mind or just want to say hi? I'd love to hear from you!"
            />

            <div className="mt-10 space-y-5">

              {CONTACT_INFO.map(
                ({ icon: Icon, label, value, href }, i) => (

                  <RevealOnScroll
                    key={label}
                    delay={i * 0.08}
                  >

                    <div className="flex items-start gap-4">

                      {/* Icon */}
                      <div
                        className="
                          w-11
                          h-11
                          shrink-0
                          rounded-xl
                          bg-gold-gradient
                          grid
                          place-items-center
                          shadow-glow-gold-sm
                        "
                      >
                        <Icon
                          className="w-5 h-5 text-noir"
                          strokeWidth={2.2}
                        />
                      </div>

                      {/* Text */}
                      <div>

                        <p
                          className="
                            text-xs
                            uppercase
                            tracking-wide
                            text-muted
                            font-mono
                          "
                        >
                          {label}
                        </p>

                        {href ? (
                          <a
                            href={href}
                            target={
                              href.startsWith('http')
                                ? '_blank'
                                : undefined
                            }
                            rel="noreferrer"
                            className="
                              text-main
                              font-medium
                              hover:text-gold-400
                              transition-colors
                            "
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-main font-medium">
                            {value}
                          </p>
                        )}

                      </div>

                    </div>

                  </RevealOnScroll>
                ),
              )}

            </div>

            {/* Decorative paper plane */}
            <RevealOnScroll delay={0.3}>
              <PaperPlane
                className="
                  hidden
                  sm:block
                  mt-12
                  w-16
                  h-16
                  text-gold-400/40
                  animate-float
                "
              />
            </RevealOnScroll>

          </div>

          {/* =====================================================
              RIGHT — CONTACT FORM
          ====================================================== */}
          <RevealOnScroll delay={0.15}>

            <Card
              className="p-6 sm:p-8"
              hover={false}
            >

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* Name */}
                <div>

                  <label
                    htmlFor="name"
                    className="
                      block
                      text-xs
                      uppercase
                      tracking-wide
                      text-muted
                      font-mono
                      mb-2
                    "
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-line
                      bg-surface
                      px-4
                      py-3
                      text-sm
                      text-main
                      placeholder:text-muted/70
                      outline-none
                      transition-colors
                      focus:border-gold-400
                    "
                  />

                </div>

                {/* Email */}
                <div>

                  <label
                    htmlFor="email"
                    className="
                      block
                      text-xs
                      uppercase
                      tracking-wide
                      text-muted
                      font-mono
                      mb-2
                    "
                  >
                    Your Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-line
                      bg-surface
                      px-4
                      py-3
                      text-sm
                      text-main
                      placeholder:text-muted/70
                      outline-none
                      transition-colors
                      focus:border-gold-400
                    "
                  />

                </div>

                {/* Message */}
                <div>

                  <label
                    htmlFor="message"
                    className="
                      block
                      text-xs
                      uppercase
                      tracking-wide
                      text-muted
                      font-mono
                      mb-2
                    "
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    className="
                      w-full
                      rounded-xl
                      border
                      border-line
                      bg-surface
                      px-4
                      py-3
                      text-sm
                      text-main
                      placeholder:text-muted/70
                      outline-none
                      transition-colors
                      focus:border-gold-400
                      resize-none
                    "
                  />

                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.97 }}
                  className="btn-gold w-full"
                  disabled={status === 'sent'}
                >

                  {status === 'sent' ? (
                    <>
                      Message Sent
                      <CheckCircle2 className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}

                </motion.button>

              </form>

            </Card>

          </RevealOnScroll>

        </div>

      </div>

    </section>
  )
}
