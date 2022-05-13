const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
const { response } = require('express');


router.get('/', (req, res) => {
  Tag.findAll({
    include: [{model:Product, through:ProductTag}]})
      .then(response => res.json(response) )
      .catch(err => res.json(err) )
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    include: [{model:Product, through:ProductTag}],
    where: {id:req.params.id}})
      .then(response => res.json(response) )
      .catch(err => res.json(err) )
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
    .then(response => res.json(response) )
    .catch(err => res.json(err) )
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body,{ where:{ id:req.params.id }})
    .then(response => res.json(response) )
    .catch(err => res.json(err) )
});

router.delete('/:id', (req, res) => {
  Tag.destroy({where:{id:req.params.id}})
    .then(response => res.json(response) )
    .catch(err => res.json(err) )
});

module.exports = router;
