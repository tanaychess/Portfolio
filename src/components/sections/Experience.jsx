import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Crown, MapPin } from 'lucide-react'
import { timeline } from '../../data/portfolioData'
import SectionHeading from '../common/SectionHeading'
import RevealOnScroll from '../common/RevealOnScroll'
import Card from '../common/Card'
import { TrophyIcon, CurvedConnector } from '../common/Doodles'

const TYPE_ICON = {
  work: Briefcase,
  education: GraduationCap,
  chess: Crown,
}

const TYPE_LABEL = {
  work: 'Experience',
  education: 'Education',
  chess: 'Beyond Code',
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-20 lg:py-28 bg-surface overflow-hidden"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute top-0 left-0 w-[340px] h-[340px] rounded-full bg-gold-400/8 glow-orb" />

      <TrophyIcon
        className="hidden xl:block absolute top-24 right-16 w-11 h-11 text-gold-400/30 animate-float"
      />

      <CurvedConnector
        className="hidden xl:block absolute bottom-16 right-8 w-52 h-32 text-gold-400/20"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">

        {/* Section heading */}
        <SectionHeading
          title="Experience"
          highlight=""
          description="My professional journey, academic path, and the discipline I bring from the chessboard."
        />

        {/* Timeline */}
        <div className="mt-12 sm:mt-14 relative">

          {/* Vertical timeline line */}
          <div
            className="
              absolute
              left-[19px]
              sm:left-6
              top-2
              bottom-2
              w-px
              bg-line
            "
          />

          <div className="space-y-8 sm:space-y-10">

            {timeline.map((item, i) => {
              const Icon = TYPE_ICON[item.type]

              return (
                <RevealOnScroll
                  key={`${item.title}-${i}`}
                  delay={i * 0.08}
                >
                  <div
                    className="
                      relative
                      pl-12
                      sm:pl-20
                      min-w-0
                    "
                  >

                    {/* Timeline icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{
                        once: true,
                        amount: 0.6,
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 18,
                        delay: i * 0.08,
                      }}
                      className="
                        absolute
                        left-0
                        sm:left-1
                        top-0
                        w-10
                        h-10
                        rounded-full
                        bg-gold-gradient
                        grid
                        place-items-center
                        shadow-glow-gold-sm
                        ring-4
                        ring-surface
                        z-10
                      "
                    >
                      <Icon
                        className="w-[18px] h-[18px] text-noir"
                        strokeWidth={2.4}
                      />
                    </motion.div>

                    {/* Card */}
                    <Card
                      className="
                        p-4
                        sm:p-6
                        min-w-0
                        w-full
                      "
                      hover={true}
                    >

                      {/* Card header */}
                      <div
                        className="
                          flex
                          flex-col
                          gap-3
                          sm:flex-row
                          sm:items-start
                          sm:justify-between
                        "
                      >

                        {/* Main information */}
                        <div className="min-w-0">

                          <span
                            className="
                              inline-block
                              text-[10px]
                              sm:text-[11px]
                              font-mono
                              tracking-wide
                              uppercase
                              text-gold-400/80
                              mb-1
                            "
                          >
                            {TYPE_LABEL[item.type]}
                          </span>

                          <h3
                            className="
                              font-display
                              font-semibold
                              text-lg
                              sm:text-xl
                              text-main
                              leading-tight
                              break-words
                            "
                          >
                            {item.title}
                          </h3>

                          <p
                            className="
                              text-gold-400
                              text-sm
                              sm:text-base
                              font-medium
                              mt-1
                              leading-snug
                              break-words
                            "
                          >
                            {item.org}
                          </p>

                        </div>

                        {/* Date + location */}
                        <div
                          className="
                            flex
                            flex-col
                            items-start
                            sm:items-end
                            shrink-0
                            gap-1.5
                          "
                        >

                          <span
                            className="
                              inline-flex
                              items-center
                              rounded-full
                              border
                              border-line
                              bg-surface
                              px-3
                              py-1.5
                              text-[11px]
                              sm:text-xs
                              text-muted
                              font-mono
                              whitespace-nowrap
                            "
                          >
                            {item.period}
                          </span>

                          {item.location && (
                            <p
                              className="
                                flex
                                items-center
                                gap-1
                                text-xs
                                text-muted
                              "
                            >
                              <MapPin className="w-3 h-3 shrink-0" />
                              {item.location}
                            </p>
                          )}

                        </div>

                      </div>

                      {/* Description points */}
                      <ul className="mt-5 space-y-3">

                        {item.points.map((p) => (
                          <li
                            key={p}
                            className="
                              flex
                              gap-2.5
                              text-sm
                              sm:text-[15px]
                              text-muted
                              leading-relaxed
                              min-w-0
                            "
                          >

                            <span
                              className="
                                mt-[7px]
                                w-1.5
                                h-1.5
                                rounded-full
                                bg-gold-400
                                shrink-0
                              "
                            />

                            <span className="min-w-0 break-words">
                              {p}
                            </span>

                          </li>
                        ))}

                      </ul>

                      {/* Technology stack */}
                      {item.stack && (
                        <div className="mt-5 flex flex-wrap gap-2">

                          {item.stack.map((s) => (
                            <span
                              key={s}
                              className="
                                rounded-md
                                border
                                border-line
                                bg-surface
                                px-2.5
                                py-1.5
                                text-[10px]
                                sm:text-[11px]
                                font-medium
                                text-main
                                whitespace-nowrap
                              "
                            >
                              {s}
                            </span>
                          ))}

                        </div>
                      )}

                      {/* Present badge */}
                      {item.current && (
                        <span
                          className="
                            absolute
                            -top-2
                            right-4
                            sm:right-6
                            rounded-full
                            bg-gold-gradient
                            px-2.5
                            py-0.5
                            text-[9px]
                            sm:text-[10px]
                            font-bold
                            text-noir
                            tracking-wide
                            uppercase
                          "
                        >
                          Present
                        </span>
                      )}

                    </Card>

                  </div>
                </RevealOnScroll>
              )
            })}

          </div>
        </div>

      </div>
    </section>
  )
}
