import axios from 'axios';
import { restaurantsIndex } from '../urls/index'
/*URL文字列をimportして使用する*/

export const fetchRestaurants =() => {
  return axios.get(restaurantsIndex)
  .then(res => {
    return res.data
  })
  .catch((e) => console.error(e))
}

/*axiosを使う側でnew Promiseなどしなくても、非同期処理を実装することができる.
axios.get().then().catch()が可能*/

/*axios.getした結果成功した場合はthen(...)にいき、
失敗・例外が帰ってきた場合はcatch(...)
成功した場合は、resという名前で取得して、res.dataでレスポンスの中身をreturn*/