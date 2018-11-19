function validatePIN (pin) {
  if(pin.match(/^[0-9]{4}$/g)) {
    return true;
  }
  else if(pin.match(/^[0-9]{6}$/g)) {
    return true;
  }
  else {
    return false;
  }
}