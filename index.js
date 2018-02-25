var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return katzDeliLine.length
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return katzDeliLine[0]
    katzDeliLine.shift()
  } else {
    return "There is nobody waiting to be served!"
  }
}