import React from 'react'
import { Link } from 'react-router-dom'

export const NavPage = () => {
  const data = [
    {id: 1, text: '工厂模式', link: '/factory'},
    {id: 2, text: '适配器模式', link: '/adapter'},
  ]

  return (
    <div className="wrapper">
      <div className="page">
        <div className="font24 flex flex-center mb20">设计模式</div>
        {data.map((item, index) => (
          <Link to={item.link} className="cell-item mb10" key={item.id}>{ index + 1 } { item.text }</Link>
        ))}
      </div>
    </div>
  )
}