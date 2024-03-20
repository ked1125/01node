// 기본세팅값들 start!!!
// const express = require("express");

// const app = express();

// app.get("/", function (req, res) {
//   return res.send("hello world!!!!");
// });
// app.listen(3000);
// 기본세팅값들 end!!!
// const { User } = require("./models/User");

const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const dotenv = require("dotenv");

const { userRouter } = require("./routes/userRouter");

dotenv.config();

const server = async function () {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(" 디비 연결 완료~~");
    app.use(express.json());

    // app.get("/user", async function (req, res) {
    //   try {
    //     const users = await User.find();
    //     return res.send({ user: users });
    //   } catch (error) {
    //     return res.status(500).send({ error: error.message });
    //   }
    // });

    // app.get("/user/:userId", async function (req, res) {
    //   try {
    //     const { userId } = req.params;
    //     const user = await User.findOne({ _id: userId });
    //     return res.send({ user: user });
    //   } catch (error) {
    //     return res.status(500).send({ error: error.message });
    //   }
    // });
    // // app.get("/user/:userId", async function (req, res) {
    // //   try {
    // //   } catch (error) {
    // //     return res.status(500).send({ error: error.message });
    // //   }
    // // });

    // app.post("/user", async function (req, res) {
    //   try {
    //     const user = new User(req.body);
    //     await user.save();
    //     return res.send(user);
    //   } catch (error) {
    //     return res.status(500).send({ error: error.message });
    //   }
    // });

    // app.delete("/user/:userId", async function (req, res) {
    //   try {
    //     const { userId } = req.params.usereId;
    //     const user = await User.findByIdAndDelete({ _id: userId });
    //     return res.send({ user });
    //   } catch (error) {
    //     return res.status(500).send({ error: error.message });
    //   }
    // });

    // app.put("/user/:userId", async function (req, res) {
    //   try {
    //     const { age, email } = req.body;
    //     const { userId } = req.params;
    //     const user = await User.findByIdAndUpdate(
    //       userId,
    //       {
    //         $set: { age, email },
    //       },
    //       {
    //         new: true,
    //       }
    //     );
    //     return res.send({ user });
    //   } catch (error) {
    //     return res.status(500).send({ error: error.message });
    //   }
    // });

    app.use("/user", userRouter);

    app.listen(3000);
  } catch (error) {
    console.log("연결안됨");
  }
};

server();
