// var util = {
//     name: "lisi",
//     run(){
//         console.log("run...")
//     }
// }

// // 使用export 将上面等util导出模块
// export {util}

// // 也可以使用这种export
// export var person = {
//     name: "zhangsan"
// }

// // 使用这种export,则import时,模块名可以任意
// export default {
//     name: "ssss"
// }

var p = {

}

var c = {
    sex:"aa"
}

// 还可以一次导出多个
export {p,c}