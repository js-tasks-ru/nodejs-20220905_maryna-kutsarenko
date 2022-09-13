function sum(a, b) {
  return typeOf a === 'number' && typeOf b === 'number' ? a + b : 'TypeError';
}

module.exports = sum ;
 