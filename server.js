var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
  'article-one':{
  title:'Article One | Zaffar Khan',
  heading:'Article One',
  date:'Feb 19 2017',
  content:`<p>
            This is my first Article about Sachine Ramesh Tendulkar.
            Sachine Tendulkar was born on 24 april 1973 in Mumbai.
            Sachine Tendulkar is an Indian Cricketer.
            He has been the mpst complete batsman of his time.
            </p>`
},
  'article-two':{
      title:'Article Two | Zaffar Khan',
  heading:'Article Two',
  date:'Feb 20 2017',
  content:`<p>
            This is my second Article about Sachine Ramesh Tendulkar.
            Sachine Tendulkar was born on 24 april 1973 in Mumbai.
            </p>`
  },
  'article-three':{
      title:'Article Three | Zaffar Khan',
  heading:'Article Three',
  date:'Feb 21 2017',
  content:`<p>
            This is my third Article about Sachine Ramesh Tendulkar.
            Sachine Tendulkar was born on 24 april 1973 in Mumbai.
            Sachine Tendulkar is an Indian Cricketer.
            </p>`
  },
};
function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;

var htmlTemplate =`
<html>
<head>
    <title>${title}
    </title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="/ui/style.css" rel="stylesheet" />
</head>    
    <body>
        <div class="bluemoon">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>${heading}</h3>
        <div>${date}</div>
        <div>
           ${content}
        </div>
        </div>
    </body>
    </html>
  `;
  return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req,res) {
    //articleName == article-one
    //articles[articleName] == {} content object for article one
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
