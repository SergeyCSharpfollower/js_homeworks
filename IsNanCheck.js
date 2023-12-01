const myIsNaN = (value) => {
    
    return typeof value !== 'number' || value !== value;
}