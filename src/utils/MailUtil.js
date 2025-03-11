const mailer = require("nodemailer")


const sendingMail = async (to, subject, text) => {
    const transporter = mailer.createTransport({
        service : 'gmail',
        auth : {
            user : "jenipatel583@gmail.com",
            pass : "brfd ndec kdec daln"
        }
    })

    const mailOptions = {
        from : "jenipatel583@gmail.com",
        to : to,
        subject : subject,
        html : "<h1>"+text+"</h1>"
    } 
    
    const mailResponse = await transporter.sendMail(mailOptions)
    // console.log(mailResponse)
    return mailResponse
    
}

module.exports = {
    sendingMail
}

// sendingMail("jeni123@yopmail.com", "TestMail", "This is a Test Mail")