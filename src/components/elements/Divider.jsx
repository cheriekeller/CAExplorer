import styled, { themeGet } from 'util/style'

const Divider = styled.div`
  margin: 2rem 0;
  height: 0.5rem;
  border-radius: 0.5rem;
  background-color: ${themeGet('colors.primary.900')};
`

export default Divider
