import React from 'react'
import * as Icon from '../../assets/icons'
import { Fade } from 'react-awesome-reveal'

export const Footer = () => {
  const links = [
    {
      id: '1',
      icon: <Icon.Linkedin className='text-2xl' />,
      href: 'https://www.linkedin.com/in/matheuspergoli/'
    },
    {
      id: '2',
      icon: <Icon.Github className='text-2xl' />,
      href: 'https://github.com/matheuspergoli'
    },
    {
      id: '3',
      icon: <Icon.Discord className='text-2xl' />,
      href: 'https://discord.com/users/562328631292985355'
    }
  ]

  return (
    <Fade triggerOnce>
      <footer className='mt-20 flex flex-col items-center justify-between gap-5 border-t border-black-medium pt-5 text-gray-light sm:flex-row'>
        <div>
          <h3 className='flex items-center gap-3 text-2xl'>
            <Icon.Code className='text-3xl' />
            Matheus Pergoli. &copy;
          </h3>
        </div>
        <div className='flex items-center gap-5'>
          {links.map((link) => (
            <a key={link.id} target='_blank' rel='noopener noreferrer' href={link.href}>
              {link.icon}
            </a>
          ))}
        </div>
      </footer>
    </Fade>
  )
}
