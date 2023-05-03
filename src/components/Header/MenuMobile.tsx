import React from 'react'
import Link from 'next/link'
import { useOutsideAlerter } from '../../hooks'

export const MenuMobile = () => {
  const wrapperRef = React.useRef(null)
  const [isMobileOpen, setIsMobileOpen] = React.useState(false)

  useOutsideAlerter(wrapperRef, () => {
    setIsMobileOpen(false)
  })

  React.useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia('(min-width: 768px)')
      if (matches) {
        setIsMobileOpen(false)
      }
    }

    window.addEventListener('resize', changeMatch)

    return () => {
      window.removeEventListener('resize', changeMatch)
    }
  }, [isMobileOpen])

  function playSound() {
    new Audio('/interface-click.wav').play()
  }

  const links = [
    {
      id: '1',
      title: 'Home',
      href: '/'
    },
    {
      id: '2',
      title: 'Sobre',
      href: '/sobre'
    },
    {
      id: '3',
      title: 'Projetos',
      href: '/projetos'
    }
  ]

  return (
    <div ref={wrapperRef} className='md:hidden'>
      <button
        className='p-2 md:hidden'
        onClick={() => {
          setIsMobileOpen((prev) => !prev)
        }}>
        <img src='/menu.svg' alt='Botão do menu' />
      </button>
      <ul
        className={`${
          isMobileOpen ? 'block' : 'hidden'
        } absolute right-0 top-10 z-50 flex flex-col items-center justify-center gap-5 rounded-md bg-black-medium p-5`}>
        {links.map((link) => (
          <li key={link.id}>
            <Link
              onClick={playSound}
              href={link.href}
              className='rounded-md p-2 text-xl transition hover:bg-black-dark hover:text-gray-light'>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
