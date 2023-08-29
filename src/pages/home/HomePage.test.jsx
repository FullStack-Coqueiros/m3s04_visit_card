import '@testing-library/jest-dom';

import { HomePage } from './HomePage'
import { render, screen } from '@testing-library/react';

describe('Suite de Testes da Pagina Home', () => {
  beforeEach(() => render(<HomePage/>))

  it('Verificando se a pagina de home esta sendo renderizada', () => {
    const component = screen.getByTestId('home-testid');
    expect(component).toBeInTheDocument();
  })

  it('Verificando se a pagina de home possui o componente de card', () => {
    const component = screen.getByTestId('card-robert');
    expect(component).toBeInTheDocument();
  })
})