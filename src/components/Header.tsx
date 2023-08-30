import { useSelector } from 'react-redux';
import { GlobalStateType } from '../types';

function Header() {
  const rootState = useSelector((state:GlobalStateType) => state);
  console.log(rootState);

  return (
    <>
      <p
        data-testid="email-field"
      >
        {`Email: ${rootState.user.email}`}
      </p>
      <p data-testid="total-field">0</p>
      <p data-testid="header-currency-field">BRL</p>
    </>
  );
}

export default Header;
