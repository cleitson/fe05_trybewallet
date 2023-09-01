import { useSelector } from 'react-redux';
import { GlobalStateType } from '../types';

function Header() {
  const rootState = useSelector((state:GlobalStateType) => state);
  const { expenses } = rootState.wallet;

  function somarDespesas(data:any) {
    let total = 0;

    // Iterar sobre cada despesa
    data.forEach((expense:any) => {
      const { currency } = expense;
      const exchangeRate = expense.exchangeRates[currency];

      if (exchangeRate) {
        // Converter o valor da despesa para BRL usando a taxa de câmbio
        const valorEmBRL = parseFloat(expense.value) * parseFloat(exchangeRate.ask);

        // Somar ao total
        total += valorEmBRL;
      }
    });

    return total.toFixed(2);
  }

  // Chamar a função para obter o total das despesas em BRL
  const totalBRL = somarDespesas(expenses);

  return (
    <>
      <p
        data-testid="email-field"
      >
        {`Email: ${rootState.user.email}`}
      </p>
      <p data-testid="total-field">{totalBRL}</p>
      <p data-testid="header-currency-field">BRL</p>
    </>
  );
}

export default Header;
