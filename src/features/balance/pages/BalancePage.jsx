import { useGetBalanceQuery } from "../services/balanceApi";

const BalancePage = () => {
  const { data, loading, error } = useGetBalanceQuery();

  console.log("data: ", data);

  return <>BalancePage</>;
};

export default BalancePage;
