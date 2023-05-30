import styled from 'styled-components'

const Logo = () => {
  return (
    <Wrapper>
      <span>Bruno</span> Cadilhe
    </Wrapper>
  )
}

//* remember to use npm install styled components

const Wrapper = styled.h3`
  margin-bottom: 0;
  color: var(--clr-blue-5);
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  span {
    color: var(--clr-grey-1);
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  }
`

export default Logo
