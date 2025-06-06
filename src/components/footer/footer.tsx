import Link from 'next/link'
import { Logo } from '../logo'

export const Footer = () => {
  return (
    <footer className="border-t bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between md:flex-row  md:justify-start gap-8 py-8">
          <Logo />

          <nav className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
            <Link className="hover:text-primary" href="/termos-de-uso">
              Termos de uso
            </Link>
            <Link
              className="hover:text-primary"
              href="/politica-de-privacidade"
            >
              Política de privacidade
            </Link>
            <Link className="hover:text-primary" href="/Feedback">
              Feedback
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
