import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import { getCurrencyActionFunction } from '../redux/actions';
import { DispatchType } from '../types';

function Wallet() {
  const dispatch:DispatchType = useDispatch();

  useEffect(() => {
    const getData = async () => {
      await dispatch(getCurrencyActionFunction());
    };
    getData();
  });
  return (
    <>
      <Header />
      <WalletForm />
    </>
  );
}

export default Wallet;
