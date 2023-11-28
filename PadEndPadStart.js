function pad(str, char, length, isPadStart) {
    if (typeof str !== 'string' || typeof char !== 'string' || typeof length !== 'number' || typeof isPadStart !== 'boolean') {

        console.error('Invalid input data, please try again');
        return str;
    }

    const currentLength = str.length;

    if (length <= currentLength) {
        return str;
    }

    const padCount = length - currentLength;
    const padding = Array(padCount + 1).join(char);

    return isPadStart ? padding + str : str + padding;
}
