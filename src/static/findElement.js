const findElement = (array, attr, finder) => {
    const item = array.find(elem => elem[attr] === finder);
    return item
}

export default findElement;