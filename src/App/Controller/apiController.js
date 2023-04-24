class apiController { 

    uploadFile(req, res){
        console.log(req.file)
        res.send('Sent')
    }
    
}
module.exports = new apiController;