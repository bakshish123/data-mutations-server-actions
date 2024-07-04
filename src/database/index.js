import mongoose from "mongoose";

const connectToDB = async () => {
  const url =
    "mongodb+srv://bakshish10621:Dt8kKA7hrd1REI77@cluster0.fecizke.mongodb.net/";

  mongoose
    .connect(url)
    .then(() => console.log("Database connection is successful"))
    .catch((e) => console.log(e));
};

export default connectToDB;