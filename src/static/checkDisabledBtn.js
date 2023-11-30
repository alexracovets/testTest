
const checkDisabledBtn = (disableBtn, id, setActive) => {
    const isDisabled = disableBtn.includes(id);

    isDisabled ? setActive(true) : setActive(false)
};

export default checkDisabledBtn;