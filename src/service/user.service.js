const { user: UserModel } = require("../models");
const serviceGetAllUsers = async () => {
    const data = await UserModel.findAll({
        attributes: [
            "id",
            "name",
            "email",
        ],
    });
    return data
}
const serviceGetDetails = async (id) => {
    const { name, email } = await UserModel.findByPk(id);
    return { name, email }
}
const serviceCreateUsers = async (body) => {
    const data = await UserModel.create(body);
    return data
}
const serviceUpdateUsers = async (id, body) => {
    const data = await UserModel.update(
        body,
        {
            where: {
                id: id
            }
        }
    )
    return data
}
const serviceDeleteUsers = async (id) => {
    const data = await UserModel.destroy({
        where: {
            id: id
        }
    })
    return data
}

const serviceGetProfile = async (userId) => {
    const data = await UserModel.findByPk(userId);
    return data
}

module.exports = {
    serviceGetAllUsers,
    serviceGetDetails,
    serviceCreateUsers,
    serviceUpdateUsers,
    serviceDeleteUsers,
    serviceGetProfile
}