import Account from "../src/account.js";

describe("Account Tests", () => {

    let account;
    let transactions;
    let balance;

    beforeEach(() => {
        account = new Account();
        balance = account.getBalance();
        transactions = account.getTransactions();
    });

    afterEach(() => {
        account = undefined;
        balance = undefined;
        transactions = undefined;
    });

    it(`should open an account with £0 default`, () => {
        // Arrange

        // Act

        // Assert
        expect(account.getBalance()).toEqual(0);
    });

    it(`should return an empty array of transactions during construction`, () => {
        // Arrange

        // Act
        const actual = transactions.length

        // Assert
        expect(actual).toBe(0);
    });

    it(`should call the Account's getTransactions method`, () => {
        // Arrange
        const spyGetTransactions = spyOn(account, `getTransactions`);

        // Act
        account.getTransactions();

        // Assert
        expect(spyGetTransactions).toHaveBeenCalled();
    });

    it(`should call the Account's getBalance method`, () => {
        // Arrange
        const spyBalance = spyOn(account, `getBalance`);

        // Act
        account.getBalance();

        // Assert
        expect(spyBalance).toHaveBeenCalled();
    });

    it(`should call the Account's setBalance method`, () => {
        // Arrange
        const spySetBalance = spyOn(account, `setBalance`);

        // Act
        account.setBalance(100);

        // Assert
        expect(spySetBalance).toHaveBeenCalled();
    });

    it(`should return the updated balance when setBalance is called`, () => {
        // Arrange

        // Act
        account.setBalance(100);
        balance = account.getBalance();

        // Assert
        expect(account.getBalance()).toEqual(100);
    });

    describe("Mock Transaction Tests", () => {

        let account;
        let mockTransaction;

        beforeEach(() => {
            account = new Account();
            mockTransaction = {
                date: "10/01/2012", credit: 1000, debit: 0,
                getDate() {
                    return this.date;
                },
                getCredit() {
                    return this.credit;
                },
                getDebit() {
                    return this.debit;
                }
            };
        });

        afterEach(() => {
            account = undefined;
            mockTransaction = undefined;
        });

        it(`should add 1 to the length of the transactions array when deposit is called`, () => {
            // Arrange

            // Act
            account.deposit(mockTransaction);

            // Assert
            expect(account.getTransactions().length).toBe(1);
        });

        it(`should add 1 to the length of the transactions array when withdraw is called`, () => {
            // Arrange

            // Act
            account.withdraw(mockTransaction);

            // Assert
            expect(account.getTransactions().length).toBe(1);
        });

        it(`should update the total balance when a deposit is made`, () => {
            // Arrange

            // Act
            account.deposit(mockTransaction);

            // Assert
            expect(account.getBalance()).toBe(1000);
        });

        it(`should update the total balance when a withdraw is made`, () => {
            // Arrange
            account = new Account(3000);
            mockTransaction = {
                date: "10/01/2012", credit: 0, debit: 1000,
                getDate() {
                    return this.date;
                },
                getCredit() {
                    return this.credit;
                },
                getDebit() {
                    return this.debit;
                }
            };
            // Act
            account.withdraw(mockTransaction);

            // Assert
            expect(account.getBalance()).toBe(2000);
        });

        it(`transactions array should contain the transaction in it`, () => {
            // Arrange
            let mockTransaction2 = {
                date: "13/01/2012", credit: 1000, debit: 0,
                getDate() {
                    return this.date;
                },
                getCredit() {
                    return this.credit;
                },
                getDebit() {
                    return this.debit;
                }
            };

            // Act
            account.deposit(mockTransaction2);
            account.deposit(mockTransaction);

            // Assert
            expect(account.getTransactions()[1].credit).toBe(1000);
        });

        it(`transactions array should contain the transaction in it`, () => {
            // Arrange
            let mockTransaction3 = {
                date: "13/01/2012", credit: 0, debit: 1000,
                getDate() {
                    return this.date;
                },
                getCredit() {
                    return this.credit;
                },
                getDebit() {
                    return this.debit;
                }
            };

            // Act
            account.deposit(mockTransaction3);
            account.deposit(mockTransaction);

            // Assert
            expect(account.getTransactions()[1].debit).toBe(1000);
        });
    });
});