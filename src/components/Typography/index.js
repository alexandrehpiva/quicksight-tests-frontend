import React from 'react'

import * as S from './styles'

const Typography = ({ children, ...props }) => {
  return <S.Typography {...props}>{children}</S.Typography>
}

export default Typography
