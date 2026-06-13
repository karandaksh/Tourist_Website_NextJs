import React from 'react'
import Link from 'next/link'

const Button = ({ btnText, href, btnClass, btnType, children,...props }) => {

  if (!href) {
    return (
      <button className={btnClass} {...props}>{children || btnText}</button>
      // <button type={btnType} className={btnClass} onClick={btnOnclik}>{children || btnText}</button>
    )
  }

  return (
    <Link href={href} className={btnClass}>{btnText}</Link>
  )

}
export default Button