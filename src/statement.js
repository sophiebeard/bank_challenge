export default class Statement {

    static printStatement(transactions) {
        console.log(`date       || credit  || debit  || balance`);

        for (const transaction of transactions) {
            const { date, credit, debit, balance } = transaction;

            let ofForm;
            if (credit != 0) {
                ofForm = `${date} || ${credit}.00 ||        || ${balance}.00`;
            } else if (debit != 0) {
                ofForm = `${date} ||         || ${debit}.00 || ${balance}.00`;
            }
            console.log(ofForm);
        };
    };
};

