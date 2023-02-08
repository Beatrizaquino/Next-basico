

export default  (req, res) => {

    if(req.method === "GET") {
        
    res.status(200).json({nome: "Beatriz"})
    } else {
        res.status(200).json({nome:"Guilherme"})
    }

}
