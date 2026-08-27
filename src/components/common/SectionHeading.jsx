import RevealOnScroll from './RevealOnScroll'

export default function SectionHeading({ title, highlight, description, align = 'left' }) {
  const isCenter = align === 'center'
  return (
    <RevealOnScroll className={isCenter ? 'text-center max-w-2xl mx-auto' : 'text-left'}>
      <h2 className="text-3xl md:text-[2.6rem] font-bold text-main leading-tight tracking-tight">
        {title} {highlight && <span className="text-gold-400">{highlight}</span>}
      </h2>
      {description && (
        <p className="mt-3 text-muted leading-relaxed max-w-xl text-[15px]">{description}</p>
      )}
    </RevealOnScroll>
  )
}
