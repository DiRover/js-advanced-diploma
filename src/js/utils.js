export function calcTileType(index, boardSize) {
  // TODO: write logic here
  if (index === 0) { //отрисовываем верхний левый угол
    return 'top-left'
  } else if (index === boardSize - 1) {
    return 'top-right' //отрисовываем верхний правый угол
  } else if (index === boardSize ** 2 - 1) {
    return 'bottom-right' //отрисовываем нижний правый угол
  } else if (index === boardSize ** 2 - boardSize) {
    return 'bottom-left' //отрисовываем нижний левый угол
  } else if (index < boardSize) {
    return 'top' //отрисовываем верх
  } else if (boardSize * 7 < index && index <= boardSize ** 2) {
    return 'bottom' //отрисовываем низ
  } else if (index % boardSize === 0) {
    return 'left' //отрисовываем лево
  } else if ((index + 1) % boardSize === 0) {
    return 'right' //отрисовываем право
  }
  return 'center';
}

export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}
