const checkStatusBtn = (disableBtn, id) => {
    const isDisabled = disableBtn.includes(id);
    
    if (isDisabled) {
        return disableBtn.filter(id => id !== id);
    } else {
        return [...disableBtn, id];
    }
};

export default checkStatusBtn;