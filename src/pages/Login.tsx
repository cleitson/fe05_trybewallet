import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AccountType } from '../types';
import { addEmailAction } from '../redux/actions';

const initialState = {
  email: '',
  password: '',
};

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formDataSubmited, setFormDataSubmited] = useState<AccountType[]>([]);
  const [buttonDisable, setButtonDisable] = useState<boolean>(true);
  const [formData, setFormData] = useState<AccountType>(initialState);
  const { email, password } = formData;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidEmail: boolean = emailRegex.test(formData.email);

  const isValidForm = () => {
    if (formData.email.length > 0 && formData.password.length >= 5 && isValidEmail) {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement |
  HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    isValidForm();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormDataSubmited([...formDataSubmited, formData]);
    setFormData(initialState);
    dispatch(addEmailAction(formData.email));
    navigate('/carteira');
  };

  return (
    <form onSubmit={ (event) => handleSubmit(event) }>
      <input
        data-testid="email-input"
        type="email"
        name="email"
        id="email"
        value={ email }
        onChange={ handleChange }
        required
      />
      <input
        data-testid="password-input"
        type="password"
        name="password"
        id="password"
        value={ password }
        onChange={ handleChange }
        required
      />
      <button
        type="submit"
        disabled={ buttonDisable }
      >
        Entrar
      </button>
    </form>
  );
}

export default Login;
