const initialState = {
  test: ''
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'TEST_REQUEST':
      return {
        test: 'hello request'
      }
    case 'TEST_SUCCESS':
      return {
        test: 'hello success'
      }
    default:
      return state
  }
}
