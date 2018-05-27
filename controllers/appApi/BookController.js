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

  update(req, res) {
    Book.findById(req.params.id, (err, book) => {
      if(err){
        res.send(err);
      }
      book.stack = req.body.stack;
      book.save(err => {
        if(err){
          res.send(err);
        }
        res.json(book);
      });
    });
  }

  searchByTitle(req, res) {
    Book.find({title:req.params.title} , (err, books) => {
      if(err){
        res.send(err);
      }
      res.json(books);
    });
  }

  searchByAuthor(req, res) {
    Book.find({author:req.params.author} , (err, books) => {
      if(err){
        res.send(err);
      }
      res.json(books);
    });
  }

  searchByPublisher(req, res) {
    Book.find({publisher:req.params.publisher} , (err, books) => {
      if(err){
        res.send(err);
      }
      res.json(books);
    });
  }

}
