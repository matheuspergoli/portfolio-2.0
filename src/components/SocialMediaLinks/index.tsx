import React from 'react'
import * as Icon from '../../assets/icons'
import { Hoverable } from '../../animations/Hoverable'

export const SocialMediaLinks = () => {
  const links = [
    {
      id: '1',
      title: 'LinkedIn',
      icon: <Icon.Linkedin className='text-2xl' />,
      href: 'https://www.linkedin.com/in/matheuspergoli/'
    },
    {
      id: '2',
      title: 'Github',
      icon: <Icon.Github className='text-2xl' />,
      href: 'https://github.com/matheuspergoli'
    },
    {
      id: '3',
      title: 'Discord',
      icon: <Icon.Discord className='text-2xl' />,
      href: 'https://discord.com/users/562328631292985355'
    }
  ]

  return (
    <Hoverable>
      <div className='flex w-fit flex-wrap items-center gap-5 text-gray-light'>
        {links.map((link) => (
          <a
            key={link.id}
            target='_blank'
            rel='noopener noreferrer'
            href={link.href}
            className='flex items-center gap-2 rounded-md bg-zinc-900/90 px-3 py-2'>
            {link.icon}
            <span className='text-xl font-semibold'>{link.title}</span>
          </a>
        ))}
      </div>
    </Hoverable>
  )
}
