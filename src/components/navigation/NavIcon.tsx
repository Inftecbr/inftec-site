import type { NavDropdownItem } from '../../config/navigation'

const paths: Record<NavDropdownItem['icon'], string> = {
  portal: 'M4 8h16v10H4z M8 12h8',
  operation: 'M6 6h12v12H6z M9 9h6v2H9z',
  api: 'M8 4h8l2 4v12H6V8l2-4z',
  status: 'M4 12h4l2-5 4 10 2-7h4',
  product: 'M12 3l8 4v10l-8 4-8-4V7l8-4z',
}

export default function NavIcon({ icon, className = '' }: { icon: NavDropdownItem['icon']; className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={`text-data shrink-0 ${className}`}
      aria-hidden
    >
      <path d={paths[icon]} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
