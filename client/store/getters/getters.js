/**
 * 组装后端接到的数据
 */
export default {
  fullName (state) {
    return `${state.firstName} ${state.lastName}`
  }
}
