const websites = {
  finance: 'www.bctfinance.com',
  ssg: 'www.bctfssg.com',
  bct: 'www.bct.com',
  admin: 'www.bctadmin.com',
  sales: 'www.bctsales.com',
};
console.log('window.location.href');
console.log(window.location.href);
let queryParams = new URLSearchParams(window.location.search);
let ourValue = queryParams.get('q');
console.log('ourValue serached is');
console.log(ourValue);
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
// function preventDefaultBehavior(event) {
//   event.preventDefault();
//   event.returnValue = '';
// }
// window.addEventListener('beforeunload', preventDefaultBehavior);

if (ourValue) {
  if (websites[ourValue.toLowerCase()]) {
    console.log('window.location.href isss');
    console.log(window.location.href);
    // window.location.href = `${websites[ourValue.toLowerCase()]}`;
    console.log('window.location.href after isss');
    console.log(window.location.href);
    console.log(websites[ourValue.toLowerCase()]);
  }
}
