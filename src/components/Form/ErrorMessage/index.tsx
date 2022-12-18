import * as S from './styles'
import { FCC } from '../../../typings/global'

const ErrorMessage: FCC = ({ children, ...rest }) => {
  return (
    <>
      {Array.isArray(children) ? (
        children.map((errorMessage, index) => (
          <S.ErrorMessage key={index} type="text" color="#d33e3e" fontStyle="italic" {...rest}>
            {errorMessage}
          </S.ErrorMessage>
        ))
      ) : (
        <S.ErrorMessage type="text" color="#d33e3e" fontStyle="italic" {...rest}>
          {children}
        </S.ErrorMessage>
      )}
    </>
  )
}

export default ErrorMessage
