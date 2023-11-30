const checkAnnotationColors = (btns, newDisabled) => {
  const colors = [];
  console.log(newDisabled)
  btns.forEach(i => {
    newDisabled && newDisabled.forEach(j => {
      if (i.id === j) colors.push(i.id);
    })
  });
  return  colors
};

export default checkAnnotationColors;