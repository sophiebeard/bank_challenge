export default class Transaction {

    #date;
    #credit;
    #debit;

    constructor(date, credit = 0, debit = 0) {
        this.#date = date;
        this.#credit = credit;
        this.#debit = debit;
    };

    getDate() {
        return this.#date;
    };

    setDate(date) {
        this.#date = date;
    };

    getCredit() {
        return this.#credit;
    };

    setCredit(credit) {
        this.#credit = credit;
    };

    getDebit() {
        return this.#debit;
    };

    setDebit(debit) {
        this.#debit = debit;
    };
};