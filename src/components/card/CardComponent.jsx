import * as Styled from './CardComponent.style';
import PropTypes from 'prop-types'

export const CardComponent = ({title, description, email, testid = 'card-testid'}) => {
  return(
    <Styled.Card data-testid={testid}>
      <Styled.Title>{title}</Styled.Title>

      { !!description && 
        <Styled.Description data-testid="card-description">{description}</Styled.Description>
      }
      
      <Styled.Text>{email}</Styled.Text>
    </Styled.Card>
  )
}

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  email: PropTypes.string.isRequired,
  testid: PropTypes.string,
}