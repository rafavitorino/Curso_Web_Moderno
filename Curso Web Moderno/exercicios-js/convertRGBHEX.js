const rgbToHEX = (r,g,b) => 
    "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);


console.log(rgbToHEX(19,155,235))