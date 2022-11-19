import User from "../models/UserModel.js";

const updateUser = async (req, res) => {
  try {
    await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ msg: "User Update" });
  } catch (error) {
    console.log(error.message);
  }
};

export default updateUser;
