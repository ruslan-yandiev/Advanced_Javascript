'use strict'

module.exports = {
    MotoShip
};

function MotoShip(name, enginePower, bodyMaterial) {
    this.name = name;
    this.enginePower = enginePower;
    this.bodyMaterial = bodyMaterial;
}