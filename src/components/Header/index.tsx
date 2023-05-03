import React from 'react'
import Link from 'next/link'
import { MenuMobile } from './MenuMobile'
import * as Icon from '../../assets/icons'
import { Fade } from 'react-awesome-reveal'

export const Header = () => {
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
    },
    {
      id: '4',
      title: 'Blog',
      href: '/blog'
    }
  ]

  function playSound() {
    new Audio('/interface-click.wav').play()
  }

  return (
    <header className='container mx-auto mb-14 flex items-center justify-between border-b border-b-black-medium py-5 text-gray-light'>
      <div className='flex items-center justify-center gap-3'>
        <Icon.Code className='text-3xl' />
        <Fade triggerOnce cascade damping={0.06} className='text-2xl font-semibold'>
          Matheus P.
        </Fade>
      </div>
      <nav className='relative flex gap-5'>
        <MenuMobile />

        <ul className='hidden items-center gap-5 md:flex'>
          {links.map((link) => (
            <li key={link.id}>
              <Link
                onClick={playSound}
                href={link.href}
                className='rounded-md p-2 text-xl transition hover:bg-zinc-800/50 hover:text-gray-light'>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
