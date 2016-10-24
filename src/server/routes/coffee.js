const express = require('express');
const router = express.Router();

const knex = require('../db/connection');

router.get('/', (req, res, next) => {
  return knex('coffee').select('*')
  .then((coffees) => {
    res.status(200).json({
      status: 'success',
      data: coffees
    });
  })
  .catch((err) => { return next(err); });
});

router.get('/:id', (req, res, next) => {
  const coffeeID = parseInt(req.params.id);
  return knex('coffee').where('id', coffeeID).first()
  .then((coffee) => {
    res.status(200).json({
      status: 'success',
      data: coffee
    });
  })
  .catch((err) => { return next(err); });
});

router.post('/', (req, res, next) => {
  const coffee = {
    name: 'asd;lfj',
    roaster: 'j;llkj',
    origin: ';ljlkj',
    roast: 'j;ljl;j',
    caffeine: 12,
    decaf: 'true',
    price: 12,
    quantity: 12
  }
  return knex('coffee').insert(req.body)
  .then((doc) => {
    console.log('doc', doc);
    console.log(req.body);
  })
  .catch((err) => {
    console.log(err);
  })

});

module.exports = router;
