import { useState, useEffect } from 'react'
import profileimage from '../assets/nav-image.png'

const links = [
  { id: 'me', label: 'Me', href: '#me' },
  { id: 'work', label: 'Work', href: '#work' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

const SunIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3.5" />
    <path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8" />
  </svg>
)

const MoonIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
  </svg>
)

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('me')
  const [dark, setDark] = useState(false)

  // efek saat scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // toggle dark mode (menambah class "dark" pada <html>)
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 w-full border-b transition-all duration-300
        ${scrolled
          ? 'border-gray-200 bg-white/80 shadow-sm backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/80'
          : 'border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-900'}`}
    >
      <div className="flex items-center justify-between px-6 py-3 md:px-[110px]">
        {/* Avatar dengan ring pink */}
        <a href="#me" className="rounded-full bg-pink-200 p-[8px] max-md:p-[6px]">
          <img
            src={profileimage}
            alt="Foto profil"
            className="h-[40px] w-[40px] rounded-full bg-emerald-100 object-cover max-md:h-12 max-md:w-12"
          />
        </a>

        {/* Menu kanan */}
        <div className="flex items-center gap-4 md:gap-10">
          {/* Tombol tema */}
          <button
            type="button"
            onClick={() => setDark((d) => !d)}
            aria-label="Ganti tema"
            className="flex h-12 w-12 items-center justify-center rounded-full border-2
              border-orange-500 text-orange-500 transition hover:bg-orange-50
              dark:hover:bg-orange-500/10 md:h-[40px] md:w-[40px]"
          >
            {dark ? <MoonIcon /> : <SunIcon />}
          </button>

          <ul className="flex items-center gap-2 md:gap-6">
            {links.map((link) => {
              const isActive = activeLink === link.id
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={() => setActiveLink(link.id)}
                    className={`relative block px-3 py-2 text-md font-medium transition-colors duration-200
                      md:px-5 
                      ${isActive
                        ? 'text-blue-500'
                        : 'text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white'}`}
                  >
                    {link.label}

                    {/* Garis pink + titik kuning di bawah menu aktif */}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 flex h-2.5 w-full items-center
                        overflow-hidden rounded-full bg-pink-200">
                        <span className="h-full w-3 rounded-full bg-yellow-300" />
                      </span>
                    )}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar