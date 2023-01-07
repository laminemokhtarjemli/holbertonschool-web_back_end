import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {};

  Object.keys(budget).forEach((key) => {
    fullBudget[key] = budget[key];
  });
  fullBudget.getIncomeInDollars = (income) => `$${income}`;
  fullBudget.getIncomeInEuros = (income) => `${income} euros`;

  return fullBudget;
}
