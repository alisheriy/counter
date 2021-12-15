const reducer = (state = 8, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1
    case 'DEC':
      return state - 1
    case 'RND':
      return state + action.payload
    case 'RST':
      return state - state //hope it works, although a have checked it
      default:
      return state
  }
}

export default reducer;
