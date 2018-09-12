/**
 * mutations专门用来修改state, 只有两个参数，一个state,一个对象
 */
export default {
  updateCount (state, { num }) {
    state.count = num
  }
}
