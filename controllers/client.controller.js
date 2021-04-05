
const controller ={};

controller.getAll = (req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('SELECT  * FROM client',(err,clients)=>{
           
            if(err){
                res.json(err);
            }
            console.log(clients);
            res.render('clients',{
                data:clients,
                
            });
            
        });
    });
};
controller.save= (req,res) =>{
    const data = req.body;
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO client set ?',[data],(err,client)=>{
            
            res.redirect('/');
            
        });
    });
};

controller.delete= (req,res) =>{
    const {id} = req.params;
    req.getConnection((err,conn)=>{
       conn.query('DELETE FROM client WHERE id=?',[id],(err,rows)=>{
        res.redirect('/');
       }); 
    });
};

//This brings up the update form
controller.edit=(req,res)=>{
    const { id } = req.params;
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM client WHERE id=?',[id],(err,client)=>{
            res.render('client_edit',{
                data:client[0]
            });
        });
    });
}
//Update and save
controller.update = (req, res) => {
    const {id} = req.params;
    const updatedClient = req.body;
    req.getConnection((err, conn) => {
  
        conn.query('UPDATE client set ? where id = ?', [updatedClient, id], (err, rows) => {
        res.redirect('/');
        });
    });
  };


module.exports = controller;