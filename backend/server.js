const express = require("express");
const mongoose = require('mongoose');
mongoose.connect('mongodb://15.207.54.82/distributor', {useUnifiedTopology: true });

const app = express();
const port = 80;

 // For serving static files
app.use(express.static('/root/workspace/safe4sure/frontend/Homepage'))
app.use(express.static('/root/workspace/safe4sure/frontend/privacypolicypage'))
app.use(express.static('/root/workspace/safe4sure/frontend/terms'))
app.use(express.static('/root/workspace/safe4sure/frontend/Disclaimer'))
app.use(express.static('/root/workspace/safe4sure/frontend/buypage'))
app.use(express.static('/root/workspace/safe4sure/frontend/productinfo100ml'))
app.use(express.static('/root/workspace/safe4sure/frontend/productinfo500ml'))
app.use(express.static('/root/workspace/safe4sure/frontend/productinfo200ml'))
app.use(express.static('/root/workspace/safe4sure/frontend/productinfo5l'))

//app.use(express.urlencoded())
 
// ENDPOINTS

app.get('/', (req, res)=>{
    
    res.status(200).sendFile('/root/workspace/safe4sure/frontend/Homepage/main.html');
})
app.get('/&form2.html', (req, res)=>{
    
    res.status(200).sendFile('/root/workspace/safe4sure/frontend/productinfo100ml/product.html');
})
app.get('/&form3.html', (req, res)=>{
    
    res.status(200).sendFile('/root/workspace/safe4sure/frontend/productinfo200ml/product.html');
})
app.get('/&form4.html', (req, res)=>{
    
    res.status(200).sendFile('/root/workspace/safe4sure/frontend/productinfo500ml/product.html');

})
app.get('/&form5.html', (req, res)=>{
    
    res.status(200).sendFile('/root/workspace/safe4sure/frontend/productinfo5l/product.html');
})
app.get('/&form.html', (req, res)=>{
    
    res.status(200).sendFile('//root/workspace/safe4sure/frontend/buypage/form2.html');
})
app.get('/&form200.html', (req, res)=>{
    
    res.status(200).sendFile('/root/workspace/safe4sure/frontend/buypage/form2.html');
})
app.get('/Privacy%20Policy', (req, res)=>{

    res.sendFile('/root/workspace/safe4sure/frontend/privacypolicypage/privacy_policy.html');
})
app.get('/Disclaimer', (req, res)=>{
    
    res.status(200).sendFile('/root/workspace/safe4sure/frontend/Disclaimer/disclaimer.html');
})
app.get('/Terms%20&%20Conditions', (req, res)=>{
    
    res.sendFile('/root/workspace/safe4sure/frontend/terms/terms&condition.html');
})
app.get('/To%20Become%20a%20Distributor#distributorship', (req, res)=>{
    
    res.status(200).sendFile('/root/workspace/safe4sure/frontend/Homepage/main.html');
})
//Schema
const distributorschema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    area: String
  });

var distributor = new mongoose.model('distributor',distributorschema);

app.post('/', (req, res)=>{
    var detail = new distributor(req.body);
    detail.save().then(()=>{
        
        res.status(200).sendFile('/root/workspace/safe4sure/frontend/main.html');
        }).catch(()=>{
            res.status(400).send("form is not saved")
        })
    
})

const orderschema = new mongoose.Schema({
    name: String,
    phone: Number,
    pin: Number,
    houseno: String,
    area: String,
    landmark: String,
    town: String,
    state: String
  });

var order = new mongoose.model('order',orderschema);
app.post('/&form.html', (req, res)=>{
    var orderdetail = new order(req.body);
    detail.save().then(()=>{
        
        res.status(200).sendFile('/root/workspace/safe4sure/frontend/buypage/form2.html');
        }).catch(()=>{
            res.status(400).send("form is not saved")
        })
    
})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
