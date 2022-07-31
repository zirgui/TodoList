
import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Box, Button, Container } from '@mui/material'


interface typeOfTasks {
  id: number;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<typeOfTasks[]>([])

  const createTask = () => {
    const newTask = {
      id: Math.random(),
      title: '',
      isCompleted: false
    }
    setTasks((oldTask: any) => [...oldTask, newTask])
  }
  return (

    <div className="container">
      <Button type='submit' onClick={createTask}>Adicionar</Button>
      {tasks.map((task: any) => (
        <Box
          sx={{
            width: 500,
            height: 50,
            borderRadius: 20,
            backgroundColor: 'primary.dark',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        ><p>{task.title}</p></Box>
      ))}
    </div>



  )
}

export default App
