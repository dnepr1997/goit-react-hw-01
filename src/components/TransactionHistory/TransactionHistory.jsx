import css from './TransactionHistory.module.css';
export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={css.transactionItem}>{type}</td>
            <td className={css.transactionItem}>{amount}</td>
            <td className={css.transactionItem}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
