export const FormatNumber = (IntNumber) => {
    return new Intl.NumberFormat('en-IN').format(IntNumber);
};

export const RoundNumber = (IntNumber) => {
    try {
        const intNumber = Number.isInteger(IntNumber);
        if (intNumber) {
            return IntNumber;
        }
        return parseInt(IntNumber + 1);
    } catch (Error) {
        console.log('error');
    }
};
