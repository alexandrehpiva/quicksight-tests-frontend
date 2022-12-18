import React from 'react'
import * as S from './styles'

export const SuccessMessage = ({ children, ...rest }) => {
  return (
    <>
      {Array.isArray(children) ? (
        children.map((successMessage, index) => (
          <S.SuccessMessage key={index} type="text" {...rest}>
            {successMessage}
          </S.SuccessMessage>
        ))
      ) : (
        <S.SuccessMessage type="text" {...rest}>
          {children}
        </S.SuccessMessage>
      )}
    </>
  )
}
