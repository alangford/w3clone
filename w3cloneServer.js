const express = require(`express`),
    app = express();

app.use(express.static(`public`));

app.listen(3623,()=>console.log(`things be heating up have this w3 clone server built while listing to drake by the way you can navigate to localhost:3623 to find this.`));
