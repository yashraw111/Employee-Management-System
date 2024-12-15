import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../Tasklist/TaskList'

const EmployeeDashboard = () => {
  return (
    <>
    <div className='p-12 bg-[#1C1C1C] h-screen '>
        <Header/>
        <TaskListNumbers/>
        <TaskList/>
    </div>
    </>
  )
}

export default EmployeeDashboard