import Statement from "../src/statement.js";

describe(`Print Statement Tests`, () => {

    describe(`Mock Statement Print Tests`, () => {

        let mockTransaction;
        let mockTransactions;

        beforeEach(() => {
            mockTransaction = { date: "12/01/2012", credit: 1000, debit: 0, balance: 1000 };
            mockTransactions = [mockTransaction, mockTransaction];
        });

        afterEach(() => {
            mockTransaction = undefined;
            mockTransactions = undefined;
        });

        it(`should call printStatement`, () => {
            // Arrange
            const spyPrint = spyOn(Statement, `printStatement`);

            // Act
            Statement.printStatement(mockTransaction);

            // Assert
            expect(spyPrint).toHaveBeenCalledTimes(1);
        });

        it(`should call printStatement more times when there are multiple transactions`, () => {
            // Arrange
            const spyPrintFull = spyOn(console, `log`);

            // Act
            Statement.printStatement(mockTransactions);

            // Assert
            expect(spyPrintFull).toHaveBeenCalledTimes(3);
        });
    });
});