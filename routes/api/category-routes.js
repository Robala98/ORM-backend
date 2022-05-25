const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  
  Category.findAll({
    include: [Product]})
    .then(response => res.json(response) )
    .catch(err => res.json(err) )
  
});

router.get('/:id', (req, res) => {
  
  Category.findOne({
    include: [Product], where:{id:req.params.id}})
    .then(response => res.json(response) )
    .catch(err => res.json(err) )
  
});

router.post('/', (req, res) => {
  Category.create(req.body)
  .then(response => res.json(response) )
  .catch(err => res.json(err) )
});
  

router.put('/:id', (req, res) => {
  Category.update(req.body,{ where:{ id:req.params.id }})
    .then(response => res.json(response) )
    .catch(err => res.json(err) )
  });

router.delete('/:id', (req, res) => {
  Category.destroy({ where:{ id:req.params.id} })
    .then(response => res.json(response) )
    .catch(err => res.json(err) )
});

module.exports = router;
