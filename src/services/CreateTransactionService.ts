// import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';

interface Resquest {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}

class CreateTransactionService {
  public async execute({
    title,
    value,
    type,
    category,
  }: Resquest): Promise<Transaction> {
    // TODO
  }
}

export default CreateTransactionService;
