import React from 'react'
import highlight from '../helper/highlight'

const jsCode = `
init = jQuery.fn.init = function( selector, context, root ) {
  var match, elem;

  // v1.4之后，可以创建不包含任何DOM节点的空jQuery对象
  if ( !selector ) {
    return this
  }

  // 处理字符串
  if ( typeof selector === 'string' ) {
    // 处理 HTML 字符串, 特征是 '<tag>....</tag>'
    if ( selector[ 0 ] === '<' && selector[ selector.length - 1 ] === '>' && selector.length >= 3) {
        // ....

    // 其它字符串，当做选择器处理    
    } else {
      match = rquickExpr.exec( selector )
    }

  // 处理 DOM 节点 => $(DOMElement)  
  } else if ( selector.nodeType ) {
    // .....

  // 处理函数 => $(function)
  } else if ( typeof selector === 'function' ) {
    // ....
  }

  // 处理其它情况
  return jQuery.makeArray( selector, this )
}`
const resCode = highlight(jsCode, 'javascript')

export const FactoryPage = () => (
  <div className="wrapper">
    <div className="page">
      <h1 className="mb20 font24">factory pattern</h1>
      <h2 className="mb15">jquery 实现</h2>
      <pre className="hljs" dangerouslySetInnerHTML={{ __html: resCode }}></pre>
    </div>
  </div>
)