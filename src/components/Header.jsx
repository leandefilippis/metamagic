import React from 'react'
import Breadcrumbs from './Breadcrumbs'
import '../scss/style.scss'

export default function Header({title}) {
  return (
      <div className="root_header">
        <Breadcrumbs />
        <h1 className="page_title">{title}</h1>
      </div>
  )
}