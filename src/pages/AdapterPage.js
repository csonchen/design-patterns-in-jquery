import React from 'react'
import PageWrapper from '../components/pageWrapper'

const jsCode = `
// 这里的 ActiveXObject 是重点，如果存在 ActiveXObject, 说明是IE
// 这个时候，就要用 ActiveXObject 完成请求，否则，用XHR
jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ? 
  
  // support: IE6 - IE8
  function() {
    // XHR 不能访问本地文件，这个时候还是要用 ActiveXObject
    if (this.isLocal) {
      return createActiveXHR()
    }

    // IE9以后支持标准的 XMLHttpRequest 对象，可以使用
    if (document.documentMode > 8) {
      return createStandardXHR()
    }

    // support: IE < 9
    return /^(get|post|head|put|delete|options)$/i.test( this.type ) &&
      createStandardXHR() || createActiveXHR()
  } 
  :
  // 其余标准浏览器
  createStandardXHR;

function createStandardXHR() {
  try {
    return new window.XMLHttpRequest()
  } catch (e) {}
}  

function createActiveXHR() {
  try {
    return new window.ActiveXObject('Microsoft.XMLHTTP')
  } catch (e) {}
}
`

export const AdapterPage = () => (
  <PageWrapper codeText={jsCode} title="adapter pattern"></PageWrapper>
)