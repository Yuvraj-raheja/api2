const express = require('express');
const app = express();
const port = 3000;
const slist=require('./data.json');
const fs = require('fs').promises
 app.use(express.json());


 app.get('/getdata', (req,res)=>
 {res.send(slist);
 })
 app.post('/insertdata',async (req,res)=>{
    try {
      slist.push(req.body)
       console.log(slist);
         await fs.writeFile('data.json', JSON.stringify(slist, null, 2), 'utf8');
     // The commented-out line was incorrect and has been removed.
     app.put('/updatedata/:name', async (req, res) => {
        const itemName = req.params.name; // Get the 'name' from URL parameters
        const updatedFields = req.body; // Get the fields to update from the request body

        try {
            // Find the index of the item to update in the in-memory list
            const index = slist.findIndex(item => item.name === itemName);

            if (index !== -1) {
                // Update the item in the in-memory list by merging existing data with new data
                slist[index] = { ...slist[index], ...updatedFields };

                // Write the updated list back to data.json
                await fs.writeFile('data.json', JSON.stringify(slist, null, 2), 'utf8');

                res.status(200).send({
                    "status": "data updated successfully",
                    "statuscode": 200,
                    "data": slist[index] // Send back the updated item
                });
                console.log(`Data for '${itemName}' updated successfully.`);
            } else {
                // Item not found
                res.status(404).send({
                    "status": "item not found",
                    "statuscode": 404,
                    "data": itemName
                });
                console.log(`Item with name '${itemName}' not found for update.`);
            }
        } catch (err) {
            console.error('Error updating data:', err);
            res.status(500).send({
                "status": "something went wrong",
                "statuscode": 500,
                "error": err.message
            });
        }
     });
      res.send({
        "status":"data inserted successfully",
        "statuscode":200,
        "data":slist
    });
   
    console.log('data inserted   successfully');
  }
   catch (err) {
    console.error('Error writing files:', err);
      res.send({
        "status":"something went wrong",
        "statuscode":err,
        
    });
  }
}

  );
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});