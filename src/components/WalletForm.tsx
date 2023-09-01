import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { ExpenseType, GlobalStateType, DispatchType } from '../types';
import { getCurrencyAddActionFunction } from '../redux/actions';

const initialState: ExpenseType = {
  id: 0,
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'alimentacao',
  exchangeRates: [],
};

function WalletForm() {
  const dispatch:DispatchType = useDispatch();
  const rootState = useSelector((state:GlobalStateType) => state.wallet.expenses);
  const dataCurrencie = useSelector((state:GlobalStateType) => state.wallet.currencies);

  const [formData, setFormData] = useState<ExpenseType>(initialState);

  const updateId = () => {
    setFormData((prevId) => ({
      ...prevId,
      id: rootState.length,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(getCurrencyAddActionFunction(formData));
    setFormData(initialState);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement |
  HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    updateId();
  };

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <input
          data-testid="value-input"
          type="text"
          name="value"
          id="value"
          placeholder="valor"
          onChange={ handleChange }
          value={ formData.value }
        />
        <input
          data-testid="description-input"
          type="text"
          name="description"
          id="description"
          placeholder="descrição"
          onChange={ handleChange }
          value={ formData.description }
          required

        />
        <label htmlFor="currency">Moeda</label>
        <select
          data-testid="currency-input"
          name="currency"
          id="currency"
          onChange={ handleChange }
          value={ formData?.currency }
        >
          {dataCurrencie.map((currency) => (
            <option key={ currency } value={ currency }>
              {currency}
            </option>
          ))}
        </select>
        <label htmlFor="method">Método de pagamento</label>
        <select
          data-testid="method-input"
          name="method"
          id="method"
          onChange={ handleChange }
          value={ formData.method }

        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
        <label htmlFor="tag">Categoria</label>
        <select
          data-testid="tag-input"
          name="tag"
          id="tag"
          onChange={ handleChange }
          value={ formData.tag }

        >
          <option value="Alimentacao">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saude">Saúde</option>
        </select>
        <button
          type="submit"
        >
          Adicionar despesa
        </button>
      </form>
    </div>
  );
}

export default WalletForm;

// Note que os campos `<select>` já iniciam com um valor selecionado em seu navegador. Você também pode verificar por meio do React Developer Tools se o estado de seu componente inicializa de modo sincronizado com o que é exibido no navegador.

// Para ilustrar, imagine que o estado inicial seja uma string vazia. Nesse caso, a pessoa usuária poderá facilmente causar um problema onde ela acredita que a opção já está selecionada (uma vez que o select mostra um valor), quando na verdade ela ainda não está (o estado foi inicializado com uma string vazia). Por esse motivo, é importante sincronizar o mesmo valor inicial do `<select>` em seu estado no React, em vez de inicializar com uma string vazia.
