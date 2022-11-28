import Transaction from "../src/transaction.js";

describe("Transaction Tests", () => {

    let transaction;

    beforeEach(() => {
        transaction = new Transaction("10/01/2012", 100, 0);
    });

    afterEach(() => {
        transaction = undefined;
    });

    it(`should have a getter method for date`, () => {
        // Arrange
        const spyDate = spyOn(transaction, `getDate`);

        // Act
        transaction.getDate();

        // Assert
        expect(spyDate).toHaveBeenCalled();
    });

    it(`getDate should return a string`, () => {
        // Arrange

        // Act

        // Assert
        expect(transaction.getDate()).toBeInstanceOf(String);
    });

    it(`should have a getter method for credit`, () => {
        // Arrange
        const spyCredit = spyOn(transaction, `getCredit`);

        // Act
        transaction.getCredit();

        // Assert
        expect(spyCredit).toHaveBeenCalled();
    });

    it(`should have a getter method for debit`, () => {
        // Arrange
        const spyDebit = spyOn(transaction, `getDebit`);

        // Act
        transaction.getDebit();

        // Assert
        expect(spyDebit).toHaveBeenCalled();
    });

    it(`should have a setter method for credit`, () => {
        // Arrange
        const spySetCredit = spyOn(transaction, `setCredit`);

        // Act
        transaction.setCredit();

        // Assert
        expect(spySetCredit).toHaveBeenCalled();
    });

    it(`should have a setter method for debit`, () => {
        // Arrange
        const spySetDebit = spyOn(transaction, `setDebit`);

        // Act
        transaction.setDebit();

        // Assert
        expect(spySetDebit).toHaveBeenCalled();
    });

    it(`setDebit should evaluate the amount for debit`, () => {
        // Arrange
        transaction = new Transaction("10/01/2012", 0, 50);

        // Act
        transaction.setDebit(100);

        // Assert
        expect(transaction.getDebit()).toBe(100);
    });

    it(`should have a setter method for date`, () => {
        // Arrange
        const spySetDate = spyOn(transaction, `setDate`);

        // Act
        transaction.setDate();

        // Assert
        expect(spySetDate).toHaveBeenCalled();
    });
});