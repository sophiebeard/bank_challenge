// Import code
import Account from "../src/account.js";
import Transaction from "../src/transaction.js";
import Statement from "../src/statement.js";

// User opens an account with £0.
const account = new Account();

// Transaction 1: deposit £1000 on 10/01/2012
const transaction1 = new Transaction("10/01/2012", 1000, 0);
account.deposit(transaction1);

// Transaction 2: deposit £2000 on 13/01/2012
const transaction2 = new Transaction("13/01/2012", 2000, 0);
account.deposit(transaction2);

// Transaction 3: withdraw £500 on 14/01/2012
const transaction3 = new Transaction("14/01/2012", 0, 500);
account.withdraw(transaction3);

// Print the bank statement
Statement.printStatement(account.getTransactions());