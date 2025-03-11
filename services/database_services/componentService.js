const db = require("../../database/database")

const getBarrelComponents = async () => {
    try {
        const materials = await getMaterials()
        const forms = await getForms()
        const ovenTypes = await getOvenTypes()
        return {status: 200, data: {materials: materials, forms: forms, ovenTypes: ovenTypes}}
    } catch(err) {
        return err
    }
}

const getMaterials = () => {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM material", (err, row) => {
            if (err) return reject({status: 500, message: `error occured while getting materials ${err}`})
            resolve(row)
        })
    })
}

const getForms = () => {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM form", (err, row) => {
            if (err) return reject({status: 500, message: `error occured while getting forms ${err}`})
            resolve(row)
        })
    })
}

const getOvenTypes = () => {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM oven_type", (err, row) => {
            if (err) return reject({status: 500, message: `error occured while getting oven_types ${err}`})
            resolve(row)
        })
    })
}

module.exports = getBarrelComponents