
import React from "react";

interface Currency {
  currency: string;
}
interface Props {
  amount: string;
  currencies: any[];
}

const CurrencyInput = ({ amount, currencies }: Props) => {
  return (
    <div className="border border-red-700">
      <input type="text" value={amount} />
      <select>
        {currencies.map((value) => (
          <option key={value.currency}>{value.currency}</option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyInput;
