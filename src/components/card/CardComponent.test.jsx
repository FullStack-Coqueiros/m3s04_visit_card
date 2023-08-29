import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { beforeEach } from 'vitest';
import { CardComponent } from './CardComponent';

const mockData = {
  title: 'Robert Santos',
  description: 'Professor da turma coqueiros de React',
  email: 'robertsantosti@outlook.com'
}

const {title, description, email} = mockData;

describe('Suite de testes do card com descrição', () => {
  beforeEach(() => render(
    <CardComponent 
      title={title}
      description={description}
      email={email}
      testid='card-testid-robert'
    />
  ))

  it('Verificar se o card esta sendo renderizado', () => {
    const component = screen.getByTestId('card-testid-robert');
    expect(component).toBeInTheDocument();
  })

  it('Verificar se o titulo do card possui o nome passado no parametro', () => {
    const component = screen.getByText(title);
    expect(component).toBeInTheDocument();
  })

  it('Verificar se o titulo do card possui a descrição passada no parametro', () => {
    const component = screen.getByTestId('card-description');
    expect(component).toBeInTheDocument();
  })
})

describe('Suite de testes do card sem descrição', () => {
  beforeEach(() => render(<CardComponent  title={title} email={email}/>))

  it('Verificar se o card esta sendo renderizado', () => {
    const component = screen.getByTestId('card-testid');
    expect(component).toBeInTheDocument();
  })

  it('Verificar se o titulo do card possui o nome passado no parametro', () => {
    const component = screen.getByText(title);
    expect(component).toBeInTheDocument();
  })

  it('Verificar se o titulo do card não possui a descrição', () => {
    const component = screen.queryByTestId('card-description');
    expect(component).not.toBeInTheDocument();
  })
})