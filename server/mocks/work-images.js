module.exports = function(app) {
  var express = require('express');
  var workImagesRouter = express.Router();

  workImagesRouter.get('/', function(req, res) {
    res.send({
      'work-images': []
    });
  });

  workImagesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  workImagesRouter.get('/:id', function(req, res) {
    res.send({
      'work-images': {
        id: req.params.id
      }
    });
  });

  workImagesRouter.put('/:id', function(req, res) {
    res.send({
      'work-images': {
        id: req.params.id
      }
    });
  });

  workImagesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/work_images', workImagesRouter);
};
