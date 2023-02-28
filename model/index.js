// Database configuration
const dataBs = require('../config');
// bcrypt module
const {hash, compare, hashSync } = require('bcrypt');
// Middleware for creating a token
const {createToken} = require('../middleware/AuthenticatedUser');
// User 
class User {
    login(req, res) {
        const {emailAdd, userPass} = req.body;
        const qur = 
        `
        SELECT firstName, lastName, gender, emailAdd, userPass, userRole, userProfile
        FROM Users
        WHERE emailAdd = '${emailAdd}';
        `;
        dataBs.query(qur, async (err, data)=>{
            if(err) throw err;
            if((!data.length) || (data == null)) {
                res.status(401).json({err: 
                    "You provide a wrong email address"});
            }else {
                await compare(userPass, 
                    data[0].userPass, 
                    (cErr, cResult)=> {
                        if(cErr) throw cErr;
                        // Create a token
                        const jwToken = 
                        createToken(
                            {
                                emailAdd, userPass  
                            }
                        );
                        // Saving
                        res.cookie('LegitUser',
                        jwToken, {
                            maxAge: 3600000,
                            httpOnly: true
                        })
                        if(cResult) {
                            res.status(200).json({
                                msg: 'Logged in',
                                jwToken,
                                result: data[0]
                            })
                        }else {
                            res.status(401).json({
                                err: 'You entered an invalid password or did not register. '
                            })
                        }
                    })
            }
        })     
    }
    getUsers(req, res) {
        const qur = 
        `
        SELECT userID, firstName, lastName, gender, cellphoneNumber, emailAdd, userPass, userRole, userProfile, joinDate
        FROM Users;
        `;
        //dataBs
        dataBs.query(qur, (err, data)=>{
            if(err) throw err;
            else res.status(200).json( 
                {results: data} );
        })
    }
    getUser(req, res) {
        const qur = 
        `
        SELECT userID, firstName, lastName, gender, cellphoneNumber, emailAdd, userPass, userRole, userProfile, joinDate
        FROM Users
        WHERE userID = ?;
        `;
        //dataBs
        dataBs.query(qur,[req.params.id], 
            (err, data)=>{
            if(err) throw err;
            else res.status(200).json( 
                {results: data} );
        })

    }
    async newUser(req, res) {
        //Payload req.body to fetch data from user Payload = is an information coming from the user
        let info = req.body;
        // Hashing user password
        info.userPass = await 
        hash(info.userPass, 15);
        // This information will be used for authentication.
        let user = {
            emailAdd: info.emailAdd,
            userPass: info.userPass
        }
        // sql query
        const qur =
        `INSERT INTO Users
        SET ?;`;
        dataBs.query(qur, [info], (err)=> {
            if(err) {
                res.status(401).json({err});
            }else {
                // Create a token
                const jwToken = createToken(user);
                // This token will be saved in the cookie. 
                // The duration is in milliseconds.
                res.cookie("LegitUser", jwToken, {
                    maxAge: 3600000,
                    httpOnly: true
                });
                res.status(200).json({msg: "A user record was saved."})
            }
        })    
    }
    editUser(req, res) {
        let data = req.body;
        if(data.userPass !== null || 
            data.userPass !== undefined)
            data.userPass = hashSync(data.userPass, 15);
        const qur = 
        `
        UPDATE Users
        SET ?
        WHERE userID = ?;
        `;
        //dataBs
        dataBs.query(qur,[data, req.params.id], 
            (err)=>{
            if(err) throw err;
            res.status(200).json( {msg: 
                "A row was affected"} );
        })    
    }
    removeUser(req, res) {
        const qur = 
        `
        DELETE FROM Users
        WHERE userID = ?;
        `;
        //dataBs
        dataBs.query(qur,[req.params.id], 
            (err)=>{
            if(err) throw err;
            res.status(200).json( {msg: 
                "A record was removed from a database"} );
        })    
    }
}
// Product
class Product {
    getProducts(req, res) {
        const qur = `SELECT id, prodName, prodDescription, 
        category, price, prodQuantity, imgURL
        FROM Products;`;
        dataBs.query(qur, (err, results)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });
    }
   getProduct(req, res) {
        const qur = `SELECT id, prodName, prodDescription, 
        category, price, prodQuantity, imgURL
        FROM Products
        WHERE id = ?;`;
        dataBs.query(qur, [req.params.id], (err, results)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });

    }
    newProduct(req, res) {
        const qur = 
        `
        INSERT INTO Products
        SET ?;
        `;
        dataBs.query(qur,[req.body],
            (err)=> {
                if(err){
                    res.status(400).json({err: "Unable to insert a new record."});
                }else {
                    res.status(200).json({msg: "Product saved"});
                }
            }
        );    

    }
    editProduct(req, res) {
        const qur = 
        `
        UPDATE Products
        SET ?
        WHERE id = ?
        `;
        dataBs.query(qur,[req.body, req.params.id],
            (err)=> {
                if(err){
                    res.status(400).json({err: "Unable to update a record."});
                }else {
                    res.status(200).json({msg: "Product updated"});
                }
            }
        );    

    }
    removeProduct(req, res) {
        const qur = 
        `
        DELETE FROM Products
        WHERE id = ?;
        `;
        dataBs.query(qur,[req.params.id], (err)=> {
            if(err) res.status(400).json({err: "The record was not found."});
            res.status(200).json({msg: "A product was deleted."});
        })
    }

}
// Export User class
module.exports = {
    User, 
    Product
}