import { cn } from '../../utils/cn'

export default function Card({ as: Tag = 'div', className = '', children, hover = true, ...rest }) {
  return (
    <Tag
      className={cn(
        'card-noir',
        hover &&
          'transition-all duration-300 hover:border-gold-400/50 hover:-translate-y-1 hover:shadow-glow-gold-sm',
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
}
