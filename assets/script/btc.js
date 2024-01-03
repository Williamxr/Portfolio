fetch('https://www.blockchain.com/ticker')
.then(r => r.json())
.then(bitcoin => {
    const btc = document.querySelector('.btcPreco');
    btc.innerText = (100 / bitcoin.BRL.sell).toFixed(5);
}).catch(erro => {
    console.log(Error(erro));
})
