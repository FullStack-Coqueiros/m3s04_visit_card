import styled from 'styled-components'

export const Card = styled.div`
  background-color: #fff;
  padding: 2rem; //32px

  max-width: 360px;
  width: 100%;

  border-radius: 5px;
  box-shadow: 5px 5px 10px #AAA;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const Title = styled.h1`
  font-size: 1.5rem;
  color: #438dd7;
`
export const Description = styled.p`
  text-align: justify;
  font-weight: 300;
  color: #666;
`
export const Text = styled.p`
  text-align: right;
  color: #aaa;
  font-size: 1rem;
`