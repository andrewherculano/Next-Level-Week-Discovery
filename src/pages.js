const orphanages = require('./database/fakedata.js')

module.exports = {
    index: function (req, res) {
        return res.render('index')
    },
    orphanages: function (req, res) {
        return res.render('orphanages', { orphanages })
    },
    orphanage: function (req, res) {
        return res.render('orphanage')
    },
    createOrphanage: function (req, res) {
        return res.render('create-orphanage')
    }
}