let express = require('express');

let fs = require('fs');


let livereload = require('express-livereload')
let app = express();


// use default public folder
app.use(express.static('public'));


app.get('/poem/:poem', function (req, res) {
    let poem = req.params.poem;
    try {  
        let data = fs.readFileSync('public/poems/' + poem + '.txt', 'utf8');
        res.send(data.toString()); 
    } catch(e) {
        console.log('Error:', e.stack);
    }
    // get poem from poem foldervar
    // send poem to client

    
})



livereload(app)


//  run on port 8080
app.listen(8081, function() {
    console.log('listening on 8081');
  });
  