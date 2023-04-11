const sub = document.getElementById('submit');
if (sub) {
  sub.addEventListener('click', checkWebsite);
}
const websites = {
  finance: 'www.bctfinance.com',
  ssg: 'www.bctfssg.com',
  bct: 'www.bct.com',
  admin: 'www.bctadmin.com',
  sales: 'www.bctsales.com',
};
function checkWebsite() {
  var input = document.getElementById('textField').value;
  // const value = eval(input)
  //   if(websites[input.toLowercase()])
  console.log('here');
  console.log(input);
  console.log(location);
  console.log(locationbar);
  console.log('window.location.href');
  console.log(window.location.href);
  console.log(websites[input]);

  let queryParams = new URLSearchParams(window.location.search);
  let ourValue = queryParams.get('q');
  console.log('ourValue serached is');
  console.log(ourValue);

  if (websites[input.toLowerCase()]) {
    document.getElementById('textField').value = websites[input.toLowerCase()];
  } else {
    document.getElementById('textField').value =
      'Please Enter Valid Website Key';
  }
}
