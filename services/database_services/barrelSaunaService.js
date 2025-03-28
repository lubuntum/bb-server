const db = require("../../database/database")

const createBarrelSauna = async (barrel) => {
    console.log(`barrel = ${barrel}`)
    return await new Promise((resolve, reject) => {
        const sql = "INSERT INTO barrel_sauna " +
            "(material_id, form_id, oven_type_id, color_id, oven_addition_id, " +
            "door_id, tank_id, window_id, base_id, total_price, area_id, tension_ring_id, oven_placement_id) " +
            "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            const values = [
                barrel.materialId,
                barrel.formId,
                barrel.ovenTypeId,
                barrel.colorId,
                barrel.ovenAdditionId,
                barrel.doorId,
                barrel.tankId,
                barrel.windowId,
                barrel.baseId,
                barrel.totalPrice,
                barrel.areaId,
                barrel.tensionRingId,
                barrel.ovenPlacementId
            ];
        db.run(sql, values, function(err) {
                if (err) return reject({status: 500, message: err})
                console.log(this.lastID)
                resolve(this.lastID)
        })
    })
}

module.exports = {createBarrelSauna}