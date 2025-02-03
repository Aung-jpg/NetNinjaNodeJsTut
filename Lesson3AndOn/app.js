const express = require("express");
const morgan = require("morgan");
const mongoose = require('mongoose');
const blogRoutes = require("./routes/blogRoutes")

// express app
const app = express();

// connect to mongodb
var dbURI = "mongodb+srv://BlogAdmin:Aung2007@nodetut.9vody.mongodb.net/?retryWrites=true&w=majority&appName=nodetut";
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));


// register view engine
app.set("view engine", "ejs");


// middleware and static files
app.use(express.static("public")); //makes this folder public to the browser
app.use(express.urlencoded({extended: true}));
app.use(morgan("dev"));


// routes
app.get('/', (req, res) => {
    res.redirect("/blogs");
});

app.get('/about', (req, res) => {
    res.render("about", {title: "About"});
    
});

// blog routes
app.use('/blogs', blogRoutes);

// 404 page express goes top to bottom looking for matches. 
// If it gets to the bottom with no matches then 404
app.use((req, res) => {
    res.status(404).render('404', {title: "404"});
})