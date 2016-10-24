module.exports = function(app) {
  var express = require('express');
  var workRouter = express.Router();

  workRouter.get('/', function(req, res) {
    res.send({
      'work': []
    });
  });

  workRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  workRouter.get('/:id', function(req, res) {
    res.send({
      // 'work': {
      //   id: req.params.id
      // }
      'works': [
        {
          "id": 1,
          "show": true,
          "featured": false,
          "projectName": "CheezDoodles Microsite",
          "thumbnail": "http://kristinalhall.com/images/work/thumbs/cheezdoodles.png",
          "details": "This is where details about the project will go",
          "category": 2,
          "workImages": [1,2]
        }, {
          "id": 2,
          "show": true,
          "featured": true,
          "projectName": "Bob Evans Mashtini Microsite",
          "thumbnail": "http://kristinalhall.com/images/work/thumbs/mashtini.png",
          "details": "Here are some details on this project",
          "category": 2,
          "workImages": [3,4,5,6]
        }
      ],
      "categories": [
          {
            "id": 1,
            "categoryName": "Design"
          }, {
             "id": 2,
             "categoryName": "Develop"
          }, {
             "id": 3,
             "categoryName": "Wireframe"
          }
       ],
       "workImages": [
          {
            "id": 6,
            "url": "http://kristinalhall.com/images/work/work/mashtini/02.jpg"
          }, {
            "id": 5,
            "url": "http://kristinalhall.com/images/work/work/mashtini/05.jpg"
          }, {
             "id": 4,
             "url": "http://kristinalhall.com/images/work/work/mashtini/03.jpg"
          }, {
             "id": 3,
             "url": "http://kristinalhall.com/images/work/work/mashtini.png"
          }, {
            "id": 1,
            "url": "http://kristinalhall.com/images/work/work/cheezdoodles.png"
          }, {
            "id": 2,
            "url": "http://kristinalhall.com/images/work/work/cheezdoodles/01.jpg"
          }
       ]
    });
  });

  workRouter.put('/:id', function(req, res) {
    res.send({
      'work': {
        id: req.params.id
      }
    });
  });

  workRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/work', workRouter);
};
