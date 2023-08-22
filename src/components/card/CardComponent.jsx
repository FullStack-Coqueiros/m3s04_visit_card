import * as Styled from './CardComponent.style';
import PropTypes from 'prop-types'

export const CardComponent = ({title, description, email}) => {
  return(
    <Styled.Card>
      <Styled.Title>{title}</Styled.Title>

      { !!description && 
        <Styled.Description>{description}</Styled.Description>
      }
      
      <Styled.Text>{email}</Styled.Text>
    </Styled.Card>
  )
}

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  email: PropTypes.string.isRequired,
}