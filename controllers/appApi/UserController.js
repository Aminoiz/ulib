const Controller = require('./Controller')
const User = require(`${config.path.model}/user`);
const Book = require(`${config.path.model}/book`);

module.exports = new class UserController extends Controller{
  favourite(req, res) {
    User.findById(req.params.id, (err, user) => {
      user.favourites.push(req.body.book);
      user.save(err => {
        if(err) {
          res.send(err);
        }
        res.json(user);
      })
    });

  reserve(req, res) {
    User.findById(req.params.id, (err, user) => {
      Book.findById(req.body.book, (err, book) => {
        if(book.stack > 0) {
          user.reserved.push(req.body.book);
          user.save(err => {
            if(err) {
              res.send(err);
            }
            res.json(user);
          });
        }
        res.json({message: "کتاب موجود نیست"});
      });
    });
  }
}
