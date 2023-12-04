const cursor = (event, isHover) => {
    event.stopPropagation()
    document.body.style.cursor = isHover ? 'pointer' : 'auto';
}

export default cursor;