// //1月2小时5分， 31*24*60分 + 2*60分 + 5分
// // x/24*60取整为天数，x/60取整为小时，125-60*2 = 5分，

// //const x = 20 * 24 * 60 * 60 * 1000 + 5 * 60 * 1000 + 6 * 1000
// const x = new Date('1995-03-15 7:31:35').getTime()

// const dayToss = 24 * 60 * 60 * 1000
// const minusToss = 60 * 1000
// const msTos = 1000
// // const mont = m * (31 | 28 | 29) * dayToss
// // const year = y * (365 | 366) * dayToss

// let isRunYear = false
// let yearDays = isRunYear ? 365 : 365

// let days = (x / dayToss) | 0

// let years = (days / yearDays) | 0

// let month = x - years * yearDays * dayToss

// let day = ((x - years * yearDays * dayToss - month * 31 * dayToss) / dayToss) | 0

// let minus = ((x - days * dayToss) / minusToss) | 0

// let ss = (x - days * dayToss - minus * minusToss) / msTos

// console.log(years, month, day, days, minus, ss)
