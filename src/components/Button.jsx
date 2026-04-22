import React from 'react'

function Button({children,className,action}) {
  return (
    <div>
      <button className={`${className}`} onClick={action}>{children}</button>
    </div>
  )
}

export default Button
