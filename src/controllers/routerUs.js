// fucntions to put into routes

 export const getUser = (req, res) => {
    // data of fucntions
    // first test. send data to get
    const user = {
        "name": "me",
        "email": "some email",
        "phone": "some phone"
    }

    res.send(user)
}
export const postUser = (req, res) => {
    // data or fucntions
    // first test to check posts with thunderclient
    const userData = req.body
    console.log(userData)
    res.send(userData)
}