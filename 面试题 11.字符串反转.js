//iam dj, hello?
//mai jd, olleh?

const str = 'mai jd, olleh'

const revert = (s) => {}
str.replace(/[a-zA-Z]+/g, (s) => {
  return s.split('').reverse()
})

console.log(str)
