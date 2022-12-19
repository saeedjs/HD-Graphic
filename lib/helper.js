export const numberFormat = (number) => {
  return new Intl.NumberFormat().format(number);
};

export const salePrice = (price, salePrice) => {
  return Math.round(((price - salePrice) / price) * 100);
};

// export const numberToPersian =(number)=> {
//     const persian = { 0: &quot۰&quot, 1: &quot۱&quot, 2: &quot۲&quot, 3: &quot۳&quot, 4: &quot۴&quot, 5: &quot۵&quot, 6: &quot۶&quot, 7: &quot۷&quot,
//     8: &quot۸&quot, 9: &quot۹&quot };
//     number = number.toString().split(&quot&quot);
//     let persianNumber = &quot&quot
//     for (let i = 0; i < number.length; i++) {
//          number[i] = persian[number[i]];
//     }
//     for (let i = 0; i < number.length; i++) {
//          persianNumber += number[i];
//     }
//     return persianNumber;
// }
