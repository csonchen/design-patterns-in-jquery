import React from 'react'
import highlight from '../helper/highlight'

export default class PageWrapper extends React.PureComponent {
  render() {
    const result = highlight(this.props.codeText, 'javascript');

    return (
      <div className="pageWrapper">
        <div className="page">
          <h1 className="mb20 font24">{ this.props.title }</h1>
          <h2 className="mb15">jquery 实现</h2>
          <pre className="hljs" dangerouslySetInnerHTML={{ __html: result }}></pre>
          {this.props.children}
        </div>
      </div>
    )
  }
}