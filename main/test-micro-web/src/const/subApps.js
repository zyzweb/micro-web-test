// 子应用列表
let list = []

export const getList = () => list

export const setList = (data) => {
  if (Array.isArray(data)) {
    list = data;
    return
  }

  list.push(data)
}
