export default {
  heroes: [],
  units: [],
  terrains: [],
  hates: [],

  terrain: null,
  calculate: false,

  attacker: {
    unit: {
      id: null,
      name: null,
      level: null,
      count: 0,
      nativeTerrain: null,
      magicImmunity: null,
      spellsVulnerability: null,
      ranged: null,
      hits: null,
      stats: {
        attack: null,
        defense: null,
        minDamage: null,
        maxDamage: null,
        health: null
      },
      effects: []
    },

    hero: {
      id: null,
      name: null,
      specialtySkill: '',
      specialtyUnit: '',
      specialtySpell: '',

      level: 0,
      attack: 0,
      defense: 0,

      archery: 0,
      armorer: 0,
      offense: 0,
      artillery: 0,

      air: 0,
      fire: 0,
      earth: 0,
      water: 0
    },

    totalMinDamage: null,
    totalMaxDamage: null,
    totalAverageDamage: null,

    totalMinKills: null,
    totalMaxKills: null,
    totalAverageKills: null
  },

  defender: {
    unit: {
      id: null,
      name: null,
      level: null,
      count: 0,
      nativeTerrain: null,
      magicImmunity: null,
      spellsVulnerability: null,
      ranged: null,
      hits: null,
      stats: {
        attack: null,
        defense: null,
        minDamage: null,
        maxDamage: null,
        health: null
      },
      effects: []
    },

    hero: {
      id: null,
      name: null,
      specialtySkill: null,
      specialtyUnit: null,
      specialtySpell: null,

      level: 0,
      attack: 0,
      defense: 0,

      archery: 0,
      armorer: 0,
      offense: 0,
      artillery: 0,

      air: 0,
      fire: 0,
      earth: 0,
      water: 0
    },

    totalMinDamage: null,
    totalMaxDamage: null,
    totalAverageDamage: null,

    totalMinKills: null,
    totalMaxKills: null,
    totalAverageKills: null
  },

  images: {
    units: [],
    heroes: []
  }
}
