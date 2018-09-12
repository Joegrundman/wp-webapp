import * as React from 'react'
import locals from './Sidebutton.css'


interface ISideButtonProps {
  image: string
  action: () => any
  children?: React.ReactNode
}

const Sidebutton: React.SFC<ISideButtonProps> = ({ image, action }): JSX.Element => (
  <button
    className={locals.button}
    style={{ background: `url(${image})`}}
    onClick={action}/>
)

export default Sidebutton
