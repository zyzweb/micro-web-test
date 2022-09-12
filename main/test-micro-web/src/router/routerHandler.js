import { lifecycle } from "../lifecycle/lifecycle"
import { isTurnChild } from "../util"
export const turnApp = async () => {
  // 查看当前路由是否有变化
  if (isTurnChild()) {
    // 路由变化，同步修改子应用
    await lifecycle()
  }
}
