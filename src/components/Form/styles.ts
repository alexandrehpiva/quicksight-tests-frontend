import styled, { css } from 'styled-components'
import { Form as FormikForm } from 'formik'

type FormProps = {
  display?: string
  maxWidth?: string
  margin?: string
  flexDirection?: string
  justifyContent?: string
  align?: string
}
export const Form = styled(FormikForm)<FormProps>`
  ${({ display, maxWidth, margin, flexDirection, justifyContent, align }) => css`
    display: ${display || 'flex'};
    flex-direction: ${flexDirection || 'column'};
    justify-content: ${justifyContent || 'space-between'};
    align-items: ${align || 'center'};

    margin: ${margin || '0 auto'};
    max-width: ${maxWidth || '35rem'};
    width: 100%;
    gap: 1rem;
  `}
`

type FormBodyProps = {
  type?: 'flex' | 'grid'
  centered?: boolean
  flexRow?: boolean
  justifyContent?: string
  gap?: string
  width?: string
}
export const FormBody = styled.div<FormBodyProps>`
  ${({ type, centered, flexRow, justifyContent, gap, width }) => css`
    ${
      type === 'flex'
        ? css`
            display: flex;
            flex-direction: ${flexRow ? 'row' : 'column'};
            justify-content: ${justifyContent || 'space-between'};
            align-items: ${centered ? 'center' : 'flex-start'};
            flex-wrap: wrap;
          `
        : css`
            display: grid;
            ${centered &&
            css`
              justify-items: center;
              align-items: center;
            `}
          `
    }

    gap: ${gap || '1rem'};
    height: 100%;
    width: ${width || '100%'};
  `}
`

type FormFooterProps = {
  gap?: string
}
export const FormFooter = styled.div<FormFooterProps>`
  ${({ gap }) => css`
    align-items: center;
    display: flex;
    justify-content: center;
    gap: ${gap || '1rem'};

    margin-top: 10px;
    padding: 0px 10px;
    width: 100%;
  `}
`

type FormGroupProps = {
  width?: string
  minWidth?: string
  display?: string
  flexGrow?: boolean
}
export const FormGroup = styled.div<FormGroupProps>`
  ${({ width, minWidth, display, flexGrow }) => css`
    display: ${display || 'block'};
    width: ${width ?? flexGrow ? width || 'auto' : '100%'};
    min-width: ${minWidth ?? 'unset'};
    flex-grow: ${flexGrow ? '1' : 'unset'};

    border-radius: var(--border-radius-lg);
  `}
`

type LabelProps = {
  fontSizeLabel?: string
  margin?: string
  overflow?: string
}
export const Label = styled.div<LabelProps>`
  ${({ fontSizeLabel, margin, overflow }) => css`
    color: var(--text-tertiary);
    font-size: ${fontSizeLabel || '0.85rem'};
    font-weight: 300;

    margin-bottom: 1rem;
    ${
      margin &&
      css`
        margin: ${margin};
      `
    }

    overflow: ${overflow || 'hidden'};
    text-overflow: ellipsis;

    white-space: nowrap;
  `}
`

type FormGroupContainerProps = {
  type?: 'flex' | 'grid'
  centered?: boolean
  direction?: string
  justify?: string
  align?: string
  wrap?: boolean
  gap?: string
  width?: string
  maxWidth?: string
  margin?: string
  display?: string
}
export const FormGroupContainer = styled.div<FormGroupContainerProps>`
  ${({ type = 'flex', centered, direction, justify, align, wrap, gap, width, maxWidth, margin, display }) => css`
    ${
      type === 'flex'
        ? css`
            display: flex;
            flex-direction: ${direction || 'row'};
            justify-content: ${justify || (centered ? 'center' : 'flex-start')};
            align-items: ${align || (centered ? 'center' : 'flex-start')};
            flex-wrap: ${wrap ? 'wrap' : 'unset'};
          `
        : css`
            display: grid;
            justify-items: ${centered ? 'center' : 'unset'};
            align-items: ${centered ? 'center' : 'unset'};
          `
    }

    gap: ${gap || '1rem'};
    width: ${width || '100%'};
    max-width: ${maxWidth || '100%'};
    margin: ${margin || '10px 0'};

    ${
      display &&
      css`
        display: ${display};
      `
    }
  `}
`
