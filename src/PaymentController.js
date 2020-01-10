const pagarme = require('pagarme');

module.exports = {
    async index (req, res){
        const client = await pagarme.client.connect({
            api_key: 'ak_test_5k0EU9BhrLnnoWbS1HKqIbcnu8q3Qf'
        });
    
        try{
          const pagarmeTransaction = await client.transactions.create({
                amount : 1000,
                payment_method : 'credit_card',
                card_holder_name: 'Anakin Skywalker',
                card_cvv: '151',
                card_number : '5426910380656905',
                card_expiration_date: '0821',
                postback_url: 'https://enyj8v9g34xfk.x.pipedream.net/',
                async: true,
                customer: {
                    external_id: '1',
                    name: 'Anakin Skywalker',
                    type: 'individual',
                    country: 'br',
                    email: 'anakin@email.com',
                    documents: [
                    {
                        type: 'cpf',
                        number: '08249215427',
                    },
                    ],
                    phone_numbers: ['+5583988486143'],
                    birthday: '1994-05-19',
                },
                billing: {
                    name: 'Anakin Skywalker',
                    address: {
                    country: 'br',
                    state: 'Paraiba',
                    city: 'Joao Pessoa',
                    neighborhood: 'Bacarios ',
                    street: 'Antonio Targino Pessoa da Silveira',
                    street_number: '415',
                    zipcode: '58052250',
                    },
                },
                shipping: {
                    name: 'Nome de quem receberá o produto',
                    fee: 1020,
                    delivery_date: '2019-12-11',
                    expedited: true,
                    address: {
                    country: 'br',
                    state: 'sp',
                    city: 'Sap Paulo',
                    neighborhood: 'Jardim Paulistano',
                    street: 'Avenida Brigadeiro Faria Lima',
                    street_number: '1811',
                    zipcode: '01451001',
                    },
                },
                items : [
                    {
                        id : '1',
                        title : 'R2D2',
                        unit_price : 300,
                        quantity : 1,
                        tangible : true,
                    },
                    {
                        id: '2',
                        title : 'C-3PO',
                        unit_price : 700,
                        quantity :1,
                        tangible :true
                    }
                ] 
            });

            return res.json(pagarmeTransaction);
        
        } catch(err) {
            return res.json(err.response);
        }

    },

    async post(req, res){
        const client = await pagarme.client.connect({
            api_key: 'ak_test_5k0EU9BhrLnnoWbS1HKqIbcnu8q3Qf'
        });

        const transaction = await client.postbacks.find({
            transactionId: 7569966,
        });

        console.log(client);
        return res.json(transaction);
        
    },

    async return_cards(req , res){
        const client = await pagarme.client.connect({
            api_key: 'ak_test_5k0EU9BhrLnnoWbS1HKqIbcnu8q3Qf'
        });

        const transaction = await client.cards.all();

        return res.json(transaction);
    }

}