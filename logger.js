const logger = (req,res,next) => {
    console.log('req url= ',req.url)
    console.log('Loggin.....')
    next();
  }

module.exports = logger