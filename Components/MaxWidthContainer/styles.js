import styled from 'styled-components'
import media from 'Styles/stylesUtils'

export const _MaxWidthContainer = styled.div`
  width: calc(100% - 128px);
  max-width: 1090px;
  margin: 0 auto;

  ${media.lessThan('lg')`
    width: calc(100% - 64px);
  `}
  ${media.lessThan('xs')`
    width: calc(100% - 48px);
  `}
`
