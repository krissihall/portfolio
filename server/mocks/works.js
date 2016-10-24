module.exports = function(app) {
  var express = require('express');
  var worksRouter = express.Router();

  worksRouter.get('/', function(req, res) {
    res.send({
      'works': [
        {
          "id": 1,
          "show": true,
          "featured": false,
          "projectName": "CheezDoodles Microsite",
          "thumbnail": "http://kristinalhall.com/images/work/thumbs/cheezdoodles.png",
          "details": "This is where details about the project will go",
          "category": 2,
          "contributors": [6,1,5],
          "workImages": [1,2]
        }, {
          "id": 2,
          "show": true,
          "featured": true,
          "projectName": "Bob Evans Mashtini Microsite",
          "thumbnail": "http://kristinalhall.com/images/work/thumbs/mashtini.png",
          "details": "Here are some details on this project",
          "contributors": [7,1],
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
      ],
      "contributors": [
        {
          "id": 1,
          "name": "Kristina Hall",
          "portfolioLink": "http://kristinalhall.com",
          "title": "Front-end Developer"
        }, {
          "id": 5,
          "name": "Kyle Zielinsky",
          "portfolioLink": "",
          "title": "Front-end Developer"
        }, {
          "id": 2,
          "name": "Sabrina Shaner",
          "portfolioLink": "",
          "title": "Application Developer"
        }, {
          "id": 3,
          "name": "Flav Rosati",
          "portfolioLink": "http://flavrosati.com/",
          "title": "Designer"
        }, {
          "id": 6,
          "name": "Bob Rusnak",
          "portfolioLink": "http://www.bobrusnak.com/",
          "title": "Digital Designer"
        }, {
          "id": 7,
          "name": "Marla Stresky",
          "portfolioLink": "https://www.linkedin.com/pub/marla-stresky/28/1b9/4aa",
          "title": "Designer"
        }, {
          "id": 4,
          "name": "Alane Wholey",
          "portfolioLink": "",
          "title": "Project Manager"
        }
      ]
    });
  });

  worksRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  worksRouter.get('/:id', function(req, res) {
    res.send({
      // 'works': {
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
          "contributors": [6,1,5],
          "workImages": [1,2]
        }, {
          "id": 2,
          "show": true,
          "featured": true,
          "projectName": "Bob Evans Mashtini Microsite",
          "thumbnail": "http://kristinalhall.com/images/work/thumbs/mashtini.png",
          "details": "Here are some details on this project",
          "contributors": [7,1],
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
      ],
      "contributors": [
        {
          "id": 1,
          "name": "Kristina Hall",
          "portfolioLink": "http://kristinalhall.com",
          "title": "Front-end Developer"
        }, {
          "id": 5,
          "name": "Kyle Zielinsky",
          "portfolioLink": "",
          "title": "Front-end Developer"
        }, {
          "id": 2,
          "name": "Sabrina Shaner",
          "portfolioLink": "",
          "title": "Application Developer"
        }, {
          "id": 3,
          "name": "Flav Rosati",
          "portfolioLink": "http://flavrosati.com/",
          "title": "Designer"
        }, {
          "id": 6,
          "name": "Bob Rusnak",
          "portfolioLink": "http://www.bobrusnak.com/",
          "title": "Digital Designer"
        }, {
          "id": 7,
          "name": "Marla Stresky",
          "portfolioLink": "https://www.linkedin.com/pub/marla-stresky/28/1b9/4aa",
          "title": "Designer"
        }, {
          "id": 4,
          "name": "Alane Wholey",
          "portfolioLink": "",
          "title": "Project Manager"
        }
      ]
    });
  });

  worksRouter.put('/:id', function(req, res) {
    res.send({
      'works': {
        id: req.params.id
      }
    });
  });

  worksRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/works', worksRouter);
};
