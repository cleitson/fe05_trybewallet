import { screen } from '@testing-library/dom';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('Testando o login', () => {
  test('A Página pussui input de email e senha', () => {
    renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByPlaceholderText(/email/i);
    const inputSenha = screen.getByPlaceholderText(/senha/i);

    expect(inputEmail).toBeInTheDocument();
    expect(inputSenha).toBeInTheDocument();
  });
  test('A Página de login deve possuir um botão na pagina', () => {
    renderWithRouterAndRedux(<App />);

    const btnEntrar = screen.getByRole('button', { name: /entrar/i });

    expect(btnEntrar).toBeInTheDocument();
  });
  test('Ao carregar a pagina o botão deve estar desativado', () => {
    renderWithRouterAndRedux(<App />);

    const btnEntrar = screen.getByRole('button', { name: /entrar/i });
    expect(btnEntrar).toBeDisabled();
  });
  test('deve ser um email valido e senha maior que 6 caracteres', async () => {
    const { user } = renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByPlaceholderText(/email/i);
    const inputSenha = screen.getByPlaceholderText(/senha/i);
    const btnEntrar = screen.getByRole('button', { name: /entrar/i });

    await user.type(inputEmail, 'teste@teste.com');
    await user.type(inputSenha, '123456');

    expect(btnEntrar).not.toBeDisabled();
  });
  test('apos login deve ser redirecionado a proxima pagina que deve possuir o email digitado', async () => {
    const { user } = renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByPlaceholderText(/email/i);
    const inputSenha = screen.getByPlaceholderText(/senha/i);
    const btnEntrar = screen.getByRole('button', { name: /entrar/i });

    await user.type(inputEmail, 'teste@teste.com');
    await user.type(inputSenha, '123456');
    await user.click(btnEntrar);

    const verifyEmail = screen.getByText(/email: teste@teste\.com/i);

    expect(verifyEmail).toBeInTheDocument();
  });
});
