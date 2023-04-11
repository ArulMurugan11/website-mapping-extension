const websites = {
  ess: 'https://ess.bahwancybertek.com/bctc',
  tms: 'https://tms.bahwancybertek.com/mainMenus',
  ebuddy: 'https://ebuddy.bahwancybertek.com/eBuddy/',
};
websites['bct-attendance'] =
  'https://bctprodapps.bahwancybertek.com/OA_HTML/AppsLocalLogin.jsp';

console.log('window.location.href');
console.log(window.location.href);
const queryParams = new URLSearchParams(window.location.search);
const searchedKey = queryParams.get('q');
console.log('searchedKey serached is');
console.log(searchedKey);
// setTimeout(() => {window.stop()});
// window.stop();

// let queryparam = new URLSearchParams(window.location.search);
// let ourValue = queryparam.get('q');
// if (ourValue) {
//   if (websites[ourValue.toLowerCase()]) {
//     window.removeEventListener('beforeunload', preventDefaultBehavior);
//     window.location.href = `${websites[ourValue.toLowerCase()]}`;
//   }
// }

if (searchedKey) {
  if (websites[searchedKey.toLowerCase()]) {
    console.log('window.location.href isss');
    console.log(window.location.href);
    // window.location.href = `${websites[searchedKey.toLowerCase()]}`;
    console.log('window.location.href after isss');
    console.log(window.location.href);
    console.log(websites[searchedKey.toLowerCase()]);
  }
}
