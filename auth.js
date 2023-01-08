const auth = (req,res,next) => {
    console.log('authing ........')
    next()
}

module.exports = auth