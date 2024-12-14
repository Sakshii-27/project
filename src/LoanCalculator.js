import React, { useState } from 'react';

const LoanCalculator = () => {
  const [amount, setAmount] = useState(0);
  const [interest, setInterest] = useState(0);
  const [term, setTerm] = useState(0);
  const [result, setResult] = useState(null);

  const calculateLoan = () => {
    const monthlyPayment = (amount * (interest / 100) / 12) * (1 + interest / 100) ** term;
    setResult(monthlyPayment);
  };

  return (
    <div>
      <h2>Loan Calculator</h2>
      <input
        type="number"
        placeholder="Loan Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="number"
        placeholder="Annual Interest"
        value={interest}
        onChange={(e) => setInterest(e.target.value)}
      />
      <input
        type="number"
        placeholder="Term (Months)"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button onClick={calculateLoan}>Calculate</button>
      {result && <p>Monthly Payment: ${result.toFixed(2)}</p>}
    </div>
  );
};

export default LoanCalculator;
