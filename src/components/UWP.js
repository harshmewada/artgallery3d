const windowMat = {
  color: '#454545',
  roughness: 0.1,
  metalness: 1,
}
const underWallMat = {
  color: '#111',
  metalness: 0.2,
  roughness: 0.5,
}

const UWP = {
  Handle_Back: {
    roughness: 0.1,
    metalness: 1,
    side: "double",
  },
  Handle_Front: {
    roughness: 0.1,
    metalness: 1,
  },
  Door001: {
    color: '#3b1e19',
    roughness: 0.3,
    metalness: 0.7,
    side: "double",
  },
  Handle_Back001: {
    roughness: 0.1,
    metalness: 1,
  },
  Handle_Front001: {
    roughness: 0.1,
    metalness: 1,
    side: "double",
  },
  Window008: {
    ...windowMat
  },
  Window008_1: {
    ...windowMat
  },

  Window002_1: {
    ...windowMat
  },
  Window002_2: {
    ...windowMat
  },
  Window001_1: {
    ...windowMat
  },
  Window001_2: {
    ...windowMat
  },

  Window003_1: {
    ...windowMat
  },
  Window003_2: {
    ...windowMat
  },
  Window004_1: {
    ...windowMat
  },
  Window004_2: {
    ...windowMat
  },
  Window005_1: {
    ...windowMat
  },
  Window005_2: {
    ...windowMat
  },

  Cube004: {
    ...underWallMat
  },
  Cube005: {
    ...underWallMat
  },
  Cube006: {
    color: '#e6dbd5',
  },
  Cube007: {
    color: '#e6dbd5',
    // material: 'physical'
  },
  Plane002: {
    ...windowMat
  },
  Plane003: {
    glassShadow: true
  },
  Plane004: {
    glassShadow: true
  },
  Cube009: {
    glassShadow: true
  },
  // Cube007: {
  //   ...windowGlassMat
  // },
  // Cube008: {
  //   ...windowGlassMat
  // },
  // Cube009: {
  //   ...windowGlassMat
  // }

};
export default UWP;
