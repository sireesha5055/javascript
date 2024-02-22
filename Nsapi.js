var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2024-01-22&' +
          'sortBy=popularity&' +
          'apiKey=826cc21ad8d74be1abc928c210d6ee45';

var req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    })
    