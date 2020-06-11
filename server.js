const express = require("express");
require("./src/mongo/mongo");
const path = require("path");
const authRoute = require("./src/routes/adminRoutes/authRoute");
const addShopRoute = require("./src/routes/adminRoutes/addshop.route");
const updateShopRoute = require("./src/routes/adminRoutes/updateShop.route");
const getShopRoute = require("./src/routes/adminRoutes/getShop.route");
const serveImageRoute = require("./src/routes/serveImage.route");
const RemoveShopRoute = require("./src/routes/adminRoutes/removeShop.route");

const userAuthRoute = require("./src/routes/userRoutes/userauth.route");
const getRoute = require("./src/routes/userRoutes/get.route");
const app = express();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});

app.use(express.json());

// Serve the static files from the React app
app.use( express.static(path.join(__dirname, 'public/client/build/')));


app.use("/api/admin/auth",authRoute);
app.use("/api/admin/shop",addShopRoute);
app.use("/api/admin/shop",updateShopRoute);
app.use("/api/admin/shop",RemoveShopRoute);
app.use("/api/admin/get",getShopRoute);

app.use("/api/auth",userAuthRoute);
app.use("/api/get/",getRoute);

app.use("/api/serveImage/",serveImageRoute);



app.get('/*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/public/client/build/index.html'));
});