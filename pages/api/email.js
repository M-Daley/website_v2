// Add Nodemailer to forward email data
// Hanlde req data of messages

export default function handler(req, res) {
    console.log('request received')
    res.status(200).json({ message: 'receieved' })
}