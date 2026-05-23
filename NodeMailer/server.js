require("dotenv").config()
const app = require("./src/app")

const port = process.env.PORT || 4000;


app.listen(port, (req, res) => {
    console.log(`server is running at ${port}`);

})