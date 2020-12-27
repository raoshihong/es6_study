// 如果是直接使用export而不是export default {}的方式导出,则这块的名称必须与导出模块名称一致
// import util from './utils.js'
// import person from './utils.js'

// 因为
// import aa from './utils.js'

//可以导入多个
import {p,c} from './utils.js'

// console.log(util.name);
// util.run();

// console.log(person.name);

// console.log(aa.name);

console.log(c.sex)

