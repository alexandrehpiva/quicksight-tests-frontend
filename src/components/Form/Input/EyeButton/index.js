import React, { useState } from 'react'
import { InputIcon } from '../styles'
import eyeIcon from '../../../../assets/Icons/eyeIcon.svg'
import eyeSlashIcon from '../../../../assets/Icons/eyeSlashIcon.svg'

export const EyeButton = ({ onClick }) => {
  const [hidden, setHidden] = useState(true)

  const handleOnClick = () => {
    setHidden(!hidden)
    onClick()
  }

  return (
    <InputIcon
      src={hidden ? eyeIcon : eyeSlashIcon}
      alt=""
      onClick={handleOnClick}
      width="25px"
    />
  )
}
