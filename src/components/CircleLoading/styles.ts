import styled, { css, keyframes } from 'styled-components'

export const RotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const DashAnimation = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 100, 200;
    stroke-dashoffset: -15;
  }
  100% {
    stroke-dasharray: 100, 200;
    stroke-dashoffset: -120;
  }
`

export type ContainerProps = {
  size?: number
}
export const Container = styled.div<ContainerProps>`
  ${({ size }) => css`
    min-width: ${size}px;
    max-width: ${size}px;
    width: ${size}px;
    height: ${size}px;
    display: inline-block;
    position: relative;

    color: #000;
    animation: ${RotateAnimation} 1.4s linear infinite;

    svg:not(:root) {
      overflow: hidden;
    }
  `}
`

export const SvgCircle = styled.svg`
  position: absolute;
  left: 0;
  top: 0;

  circle {
    stroke: #000;
    stroke-width: 3px;
    fill: none;
    animation: ${DashAnimation} 1.4s ease-in-out infinite;
  }
`

export const MainLoading = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 88.39px;
  padding-top: 1.6rem;
`
