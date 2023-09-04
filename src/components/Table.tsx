import { useDispatch, useSelector } from 'react-redux';
import { GlobalStateType } from '../types';
import { deleteExpenseAction } from '../redux/actions';

function Table() {
  const dispatch = useDispatch();
  const expenses = useSelector((state:GlobalStateType) => state.wallet.expenses);
  console.log(expenses);
  const handleDelete = (id: number) => {
    dispatch(deleteExpenseAction(id));
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses?.map((state) => {
            const {
              id,
              currency,
              description,
              exchangeRates,
              method,
              tag,
              value,
            } = state;
            return (
              <tr key={ id }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{Number(value).toFixed(2)}</td>
                <td>{exchangeRates[currency].name}</td>
                <td>{Number(state.exchangeRates[currency].ask).toFixed(2)}</td>
                <td>
                  {(Number(value) * Number(exchangeRates[currency].ask)).toFixed(2)}
                </td>
                <td>Real</td>
                <td>
                  <button>Editar</button>
                  <button
                    data-testid="delete-btn"
                    onClick={ () => handleDelete(id) }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
