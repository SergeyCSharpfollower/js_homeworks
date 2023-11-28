function myIsNaN(value) {
    if (typeof value !== 'number' && (typeof value !== 'string' || isNaN(Number(value)))) {
        return true;
    }

    return false;
}