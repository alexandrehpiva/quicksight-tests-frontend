import styled, { css } from 'styled-components'

type DefaultElementProps = {
  as?: keyof JSX.IntrinsicElements
  type?: keyof typeof tags
}

const tags = {
  h1: {
    tag: 'h1',
    style: css`
      font-size: 44px;
    `
  },
  h2: {
    tag: 'h2',
    style: css`
      font-size: 36px;
    `
  },
  h3: {
    tag: 'h3',
    style: css`
      font-size: 24px;
    `
  },
  h4: {
    tag: 'h4',
    style: css`
      font-size: 20px;
    `
  },
  title: {
    tag: 'p',
    style: css`
      font-size: 18px;
    `
  },
  subTitle: {
    tag: 'p',
    style: css`
      font-size: 14px;
    `
  },
  text: {
    tag: 'span',
    style: css`
      font-size: 16px;
    `
  },
  label: {
    tag: 'label',
    style: css`
      font-size: 12px;
    `
  },
  mainTitle: {
    tag: 'h1',
    style: css`
      color: var(--text-dark);
      font-size: var(--font-size-lg);
      font-weight: 800;

      a {
        display: inline-block;
        margin-left: 8px;
        color: var(--theme-primary);
        font-size: var(--font-size-sm);
        text-decoration: none;
      }
    `
  },
  sectionTitle: {
    tag: 'h2',
    style: css`
      color: var(--text-tertiary);
      font-size: var(--font-size-md);
      font-weight: 800;
    `
  }
}

type TypographyProps = {
  type?: keyof typeof tags
  spacing?: string
  align?: string
  weight?: string
  color?: string
  fontStyle?: string
  onClick?: () => void
  preLine?: boolean
  display?: string
  textDecoration?: string
}
export const Typography = styled('p').attrs<DefaultElementProps>(({ as, type }) => ({
  as: as || (type && tags[type]?.tag) || 'p'
}))<TypographyProps>`
  ${({ type, spacing, align, weight, color, fontStyle, onClick, preLine, display, textDecoration }) => css`
    color: ${color};
    font-style: ${fontStyle || 'normal'};
    font-weight: ${weight || 'normal'};
    margin: ${spacing || 0};
    text-align: ${align};
    white-space: ${preLine ? 'pre-line' : 'normal'};
    display: ${display || 'unset'};
    text-decoration: ${textDecoration || 'none'};

    &:hover {
      color: ${color};
    }

    ${onClick &&
    css`
      cursor: pointer;
    `}

    ${(!!type && tags[type]?.style) || false}
  `}
`
