import React from 'react'
import HeaderBar from './../HeaderBar/HeaderBar'
import { Outlet } from 'react-router-dom'
import SideBar from './../SideBar/SideBar'
import './Projects.css'

export default function Projects() {
  const buttons = SideBar([
    { org: 'Sudoku', url: 'sudoku' }, 
    { org: 'Image Translation', url: 'imagetranslation' }, 
    { org: 'Maze Solver', url: 'mazesolver' }, 
]);

  return (
    <div>
      <HeaderBar />
      <div>
        {buttons}
      </div>
      <Outlet/>
    </div>
  )
}
