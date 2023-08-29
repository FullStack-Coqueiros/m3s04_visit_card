import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { ErrorPage } from './ErrorPage';

/** it() === test() */

//Suite de Testes
describe('Suite de Testes do ErrorPage', () => {
  /** Inicialização dos testes */
  beforeEach(() => {
    /** Renderizar o componente para os testes */
    render(<ErrorPage/>)
  })

  /** Caso de teste */
  it('Verificar se o componente de error page esta sendo renderizado', () => {
    const component = screen.getByTestId('error-testid');
    expect(component).toBeInTheDocument();
  })

  /** Caso de teste 2*/
  it('Verificar se o componente de error page possui o texto ', () => {
    const component = screen.getByText(/ErrorPage/i);
    expect(component).toBeInTheDocument();
  })
})