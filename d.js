const url = 'https://money.taxi/finance/withdraw/request';
const params = new URLSearchParams();
params.append('_name', '');
params.append('_pass', '');
params.append('paymentSystem', '24');
params.append('sum', '1000');
params.append('wallet_id', 'TGPNk7d7JKxKmLP1q7bxqzLmxx32Qtgs3T');

fetch(url, {
  method: 'POST',
  headers: {
    'Host': 'money.taxi',
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/113.0',
    'Accept': '*/*',
    'Accept-Language': 'en-US,en;q=0.5',
    'Accept-Encoding': 'gzip, deflate, br',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'X-Requested-With': 'XMLHttpRequest',
    'Origin': 'https://money.taxi',
    'DNT': '1',
    'Connection': 'keep-alive',
    'Referer': 'https://money.taxi/finance/withdraw',
    'Cookie': 'h=e818360d1cff5ab0777a19581335831eeNrLtjJyqc50MbCutTJ0UdLXsc50MYSzawGBgggN; _ga_H8JRZH4WV9=GS1.1.1681642325.2.1.1681642724.0.0.0; _ga=GA1.1.1363728748.1681634796; chaport-62c7315a611cb90a8b83425f=190ebdb1-5d4a-445a-a9c3-d4fd408dbe13%2F7G2MvfW57erhBVmlG7yPBGgsVpM3Pxn26ao; PHPSESSID=6f8112c1783429feb8719c141a257b206078027550ab0655b6e6f1cf3bebf22e; user_id_token=N3gOBECB6qG188MFzdFPr54drQDDdeQL; l_s_t=1681635866; notm220=1; notm218=1',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'TE': 'trailers'
  },
  body: params
})
.then(response => {
  console.log('Response:', response);
})
.catch(error => {
  console.error('Error:', error);
});
