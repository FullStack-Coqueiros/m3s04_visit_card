import { CardComponent } from "../../components/card/CardComponent"
import * as PageStyled from "../Pages.style"

export const HomePage = () => {
  const data = {
    title: 'Robert Santos',
    description: 'Professor da turma coqueiros de React',
    email: 'robertsantosti@outlook.com'
  }

  return(
    <PageStyled.Container data-testid="home-testid">
      <CardComponent
        testid='card-robert'
        description={data.description}
        title={data.title}
        email={data.email}
      />
    </PageStyled.Container>
  )
}