const { serviceGetAllUsers, serviceGetDetails, serviceCreateUsers, serviceUpdateUsers, serviceDeleteUsers, serviceGetProfile } = require("../service/user.service");
const index = async (
  req,
  res,
  next
) => {
  try {
    const users = await serviceGetAllUsers()
    return res.status(200).json({
      message: "Success",
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

const detailUsers = async (req, res, next) => {
  const { id } = req.params
  try {
    const { name, email } = await serviceGetDetails(id);
    return res.status(200).json({
      message: "Success detail users",
      data: {
        name,
        email
      }
    });
  } catch (error) {
    next(error)
  }
}

const createUsers = async (req, res, next) => {
  try {
    const body = req.body;
    const data = await serviceCreateUsers(body);
    return res.status(200).json({
      message: "Success create data users",
      data: data,
    });
  } catch (error) {
    next(error)
  }
}

const updateUsers = async (req, res, next) => {
  const { id } = req.params;
  const body = req.body
  try {
    await serviceUpdateUsers(id, body)
    return res.status(200).json({
      message: "Success Update data users",
      ...body
    });
  } catch (error) {
    next(error)
  }
}

const deleteUsers = async (req, res, next) => {
  const { id } = req.params
  try {
    await serviceDeleteUsers(id)
    return res.status(200).json({
      message: "Success Delete data users",
    });
  } catch (error) {
    next(error)
  }
}

const ProfileUsers = async (req, res, next) => {
  const userId = req.user.id;
  console.log(userId)
  try {
    const DataProfile = await serviceGetProfile(userId);
    return res.status(201).json({
      status: true,
      message: "success get data profile",
      data: DataProfile
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
}
module.exports = {
  index,
  detailUsers,
  createUsers,
  updateUsers,
  ProfileUsers,
  deleteUsers
};