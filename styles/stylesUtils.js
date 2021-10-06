import { css } from 'styled-components'

export const defaultBreakpoint = {
  xl: '1440px',
  lg: '1024px',
  md: '768px',
  sm: '414px',
  xs: '360px',
}

const getSizeFromBreakpoint = (breakpointValue, breakpoints = {}) => {
  if(breakpoints[breakpointValue]) {
    return breakpoints[breakpointValue]
  }
  if(parseInt(breakpointValue, 10)) {
    return breakpointValue
  }
  console.error('styled-media-query: No valid breakpoint or size specified for media')
  return '0'
}

export function generateMedia(breakpoints = defaultBreakpoint) {
  const lessThan = (breakpoint) => (...args) => `
    @media (max-width: ${getSizeFromBreakpoint(breakpoint, breakpoints)}) {
      ${css(...args)}
    }
  `
  const greaterThan = (breakpoint) => (...args) => `
    @media (min-width: ${getSizeFromBreakpoint(breakpoint, breakpoints)}) {
      ${css(...args)}
    }
  `

  const between = (firstBreakpoint, secondBreakpoint) => (...args) => `
    @media (min-width: ${getSizeFromBreakpoint(firstBreakpoint, breakpoints)}) and 
    (max-width: ${getSizeFromBreakpoint(secondBreakpoint, breakpoints)}) {
      ${css(...args)}
    }
  `

  return {
    lessThan,
    greaterThan,
    between,
  }
}

export default generateMedia()