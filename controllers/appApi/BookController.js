const Controller = require('./Controller')
const Post = require(`${config.path.model}/book`);

module.exports = new class SampleController extends Controller {
    index(req , res) {
      Post.find({}, (err, books) => {
        if(err){
          res.send(err);
        }
        res.json(books);
      });
    }

    add(req, res) {
      this.model.Book({
        title : req.body.title,
        auther : req.body.auther,
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
