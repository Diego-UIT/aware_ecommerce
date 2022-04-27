const numberWithCommas = (num) => num.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ",")

export default numberWithCommas