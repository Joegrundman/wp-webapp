import * as React from 'react'

interface ISideButtonProps {
  image: string
  action: () => void
}

const sidebutton: React.SFC<ISideButtonProps> = ({image, action}): JSX.Element => (
  <button style={{ background: `url(${image})`, height: '48px', width: '48px', border: 'none' }} onClick={action}/>
)

export default sidebutton
