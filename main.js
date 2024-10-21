document.querySelector('button').addEventListener('click', getCryptoExchange)


function getCryptoExchange() {

    const userInputCountry = document.querySelector('.country').value

    let url = `https://countriesnow.space/api/v0.1/countries/currency/q?country=${userInputCountry}`


    fetch(url)

        .then(res => res.json())
        .then(data => {

            console.log(data)
            console.log(data.data.currency)
            document.querySelector('h2').innerText = data.data.currency

            
            var currencyAmount = 1;
        
            fetch(`https://api.currencyapi.com/v3/latest?value=${currencyAmount}&base_currency=${data.data.currency}&type=crypto&apikey=cur_live_RXn9ihDHn5Bv4Rui2zYOToGHHzxguQdK4u4dB36X`
            )

            //data.data.BTC.value
                .then(res => res.json()) //once the fetch has executed and finished your catching the response that fetch has returned
                .then(data => {

                    console.log(data)

                    
                    document.querySelector('h3').innerText = data.data.BTC.value    

                })

            

            .catch(err => {
                    console.log(`error ${err}`)
            });
        })
        .catch(err => {
            console.log(`error ${err}`)
        });

}






