const getdata=(req,res)=>{
    res.send({
       "status":"data retrieved successfully",
       "statuscode":200
   })
}

const insertdata=(req,res)=>{
   res.send({
       "status":"data inserted successfully",
       "statuscode":200
   })
}


const updatedata=(req,res)=>{
   res.send({
       "status":"data updated successfully",
       "statuscode":200
   })
    }


module.exports={getdata,insertdata,updatedata}