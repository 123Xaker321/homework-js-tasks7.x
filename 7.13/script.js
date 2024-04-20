function openCar(car) {
    width = 400;
    height = 300;
    let leftpos = (screen.width-width)/2;
    let toppos = (screen.height-height)/2;
    let windowSettings = `width=${width},height=${height},left=${leftpos},top=${toppos}`;
    window.open(`${car}.html`, car, windowSettings);
  }