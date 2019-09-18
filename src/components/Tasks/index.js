import React from 'react'
import { Checkbox } from '../Checkbox'
import { useTasks } from '../../hooks'

export const Tasks = () => {
  const { tasks } = useTasks('1')
  console.log('tasks', tasks)
  const projectName = ''

  return (
    <div className='tasks' data-testid='tasks'>
      <h2>{projectName}</h2>
      <ul className='tasks__list'>
        {tasks.map(({ id, task }) => (
          <li key={`${id}`}>
            <Checkbox id={id} />
            <span>{task}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
