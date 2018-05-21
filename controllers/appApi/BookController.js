const Controller = require('./Controller')
const Book = require(`${config.path.model}/book`);

module.exports = new class SampleController extends Controller {
    index(req , res) {
      Book.find({}, (err, books) => {
        if(err){
          res.send(err);
        }
        res.json(books);
      });
    }

    add(req, res) {
      this.model.Book({
        title : req.body.title,
        author : req.body.author,
        stack : req.body.stack,
        publisher : req.body.publisher,
        publishDate : req.body.publishDate,
        category : req.body.category
      }).save(err => {
          if(err) {
            res.send(err);
          }
          res.json({
              data : 'کتاب با موفقیت ثبت شد',
              success : true
          });
    });
  }

}
