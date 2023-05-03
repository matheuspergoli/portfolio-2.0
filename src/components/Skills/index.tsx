import React from 'react'
import * as Icon from '../../assets/icons'

export const Skills = () => {
  const skills = [
    {
      id: '1',
      title: 'HTML',
      icon: <Icon.Html className='text-4xl' />
    },
    {
      id: '2',
      title: 'CSS',
      icon: <Icon.Css className='text-4xl' />
    },
    {
      id: '3',
      title: 'TypeScript',
      icon: <Icon.Ts className='text-4xl' />
    },
    {
      id: '4',
      title: 'React',
      icon: <Icon.React className='text-4xl' />
    },
    {
      id: '5',
      title: 'Next',
      icon: <Icon.Next className='text-4xl' />
    },
    {
      id: '6',
      title: 'Node',
      icon: <Icon.Node className='text-4xl' />
    }
  ]

  return (
    <div className='grid grid-cols-2 gap-5 rounded-md border border-black-medium p-5 sm:grid-cols-2 lg:grid-cols-3'>
      {skills.map((skill) => (
        <div key={skill.id} className='flex flex-col items-center gap-2'>
          <div className='flex w-full max-w-xs flex-col items-center rounded-md border border-black-medium bg-gradient-to-bl from-black-dark to-black-medium px-3 py-1'>
            {skill.icon}
            <p className='text-xl font-semibold'>{skill.title}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
