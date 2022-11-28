export default class Account {

    #balance;
    #transactions;

    constructor(balance = 0, transactions = []) {
        this.#balance = balance;
        this.#transactions = transactions;
    };

    deposit(transaction) {
        const date = transaction.getDate();
        const credit = transaction.getCredit();
        const debit = transaction.getDebit();
        this.setBalance(credit, debit);

        const trans = { date, credit, debit, balance: this.#balance };

        this.#transactions.unshift(trans);
    };

    withdraw(transaction) {
        const date = transaction.getDate();
        const credit = transaction.getCredit();
        const debit = transaction.getDebit();
        this.setBalance(credit, debit);

        const trans = { date, credit, debit, balance: this.#balance };

        this.#transactions.unshift(trans);
    };

    getTransactions() {
        return this.#transactions;
    };

    getBalance() {
        return this.#balance;
    };

    setBalance(credit = 0, debit = 0) {
        this.#balance = this.#balance + credit - debit;
    };
};