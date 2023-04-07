import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import rentalRoutes from "./routes/rentals.js";
import userRoutes from "./routes/users.js";
import analytics from "./routes/analytics.js";
import analytics2 from "./routes/analytics2.js";
import admin from "./routes/admin.js";
import contact from "./routes/contact.js";
import service from "./routes/service.js";
// import  allcontact  from "./routes/analyticsContact.js";

const app = express();
app.use(cors());

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/rentals", rentalRoutes);
app.use("/user", userRoutes);
app.use("/allRentals", analytics);
app.use("/allUsers", analytics2);
app.use("/admin", admin);
app.use("/contact", contact);
app.use("/service", service);
// app.use('/allContact',allcontact)
const CONNECTION_URL =
  "mongodb+srv://thegreatrajesh40:Zm3lbt0q7bBdyGU8@cluster0.fgxq5fu.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`server is running on port: ${PORT} `))
  )
  .catch((error) => console.log(error));

// mongoose.set('useFindAndModify',false);
