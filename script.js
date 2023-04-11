const sub = document.getElementById('submit');
if (sub) {
  sub.addEventListener('click', checkWebsite);
}
const websites = {
  ess: 'https://ess.bahwancybertek.com/bctc',
  tms: 'https://tms.bahwancybertek.com/mainMenus',
  ebuddy: 'https://ebuddy.bahwancybertek.com/eBuddy/',
};
websites['bct-attendance'] =
  'https://bctprodapps.bahwancybertek.com/OA_HTML/AppsLocalLogin.jsp';

function checkWebsite() {
  var input = document.getElementById('textField').value;
  console.log('here');
  console.log(input);
  console.log(location);
  console.log(locationbar);
  console.log('window.location.href');
  console.log(window.location.href);
  console.log(websites[input]);

  let queryParams = new URLSearchParams(window.location.search);
  let searchedKey = queryParams.get('q');
  console.log('searchedKey is');
  console.log(searchedKey);

  if (websites[input.toLowerCase()]) {
    document.getElementById('textField').value = websites[input.toLowerCase()];
  } else {
    document.getElementById('textField').value =
      'Please Enter Valid Website Key';
  }
}
