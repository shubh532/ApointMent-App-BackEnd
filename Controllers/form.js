const ClientData = require('../Models/FormData')

exports.getForm = async (req, res, next) => {
    const Data = await ClientData.findAll()
    res.status(201).json({ userData: Data })
    res.end()
}

exports.postForm = async (req, res, next) => {
    const name = req.body.name
    const contact = req.body.contact
    const email = req.body.email
    try {
        const Data = await ClientData.create({
            name: name,
            contact: contact,
            email: email
        })
        res.status(201).json({ userData: Data })
        res.end()
    } catch (err) {
        console.log(err)
    }


}

exports.postDeleteuser = async (req, res, next) => {
    try {
        const userId = req.params.userId
        const user = await ClientData.findOne({ where: { id: userId } })
        user.destroy()
        res.status(200).json({ message: "user Deleted" })
    } catch (err) {
        console.log(err)
    }
}


exports.putEditUSer = async (req, res, next) => {

}

