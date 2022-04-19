import express from "express";

const app = express();
const port = 3000;



try {
    app.listen(port, () => {
        console.log(`Sucessfully started server at port ${port}`)
    })
} catch (err) {
    console.error(`An error has occurred: ${err}`);
}