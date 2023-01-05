const nodeMailer = require('nodemailer')
const user = process.env.USER
const pass = process.env.PASS

const transport = nodeMailer.createTransport({
  service: "Gmail",
  auth: {
    user,
    pass
  }
})

module.exports.confirmEmail = (fullName, email, subject, link) => {
  transport.sendMail({
    from: user,
    to: email,
    subject: `${subject}`,
    html: `<h1> Réinitiallisez votre mot de passe </h1>
            <h2> Bonjour ${fullName} </h2>
              <p> Veuillez confirmer votre email en cliquant sur ce lien <a href=${link}> Click here</a></p>`
  }).catch(err => console.log(err))
}