import React from 'react'
import { Link } from 'react-router-dom'

export const NavPage = () => {
  const data = [
    {id: 1, text: '工厂模式', link: '/factory'},
  ]

  return (
    <div className="wrapper">
      <div className="page">
        {data.map((item, index) => (
          <Link to={item.link} className="cell-item" key={item.id}>{ index + 1 } { item.text }</Link>
        ))}
      </div>
    </div>
  )
}