'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const pureWhite = {
  hex: '#ffffff',
  rgb: [255, 255, 255]
};

const pureBlack = {
  hex: '#000000',
  rgb: [0, 0, 0]
};

const colors = {
  NJD: {
    fullName: 'New Jersey Devils',
    mainColor: {
      hex: '#E03A3E',
      rgb: [200, 16, 46]
    },
    colors: {
      white: pureWhite,
      black: pureBlack
    }
  },
  ANA: {
    fullName: 'Anaheim Ducks',
    mainColor: {
      hex: '#FC4C02',
      rgb: [252, 76, 2]
    },
    colors: {
      gold: {
        hex: '#B6985A',
        rgb: [182, 152, 90]
      },
      black: pureBlack,
      white: pureWhite
    }
  },
  ARI: {
    fullName: 'Arizona Coyotes',
    mainColor: {
      hex: '#98012E',
      rgb: [152, 1, 46]
    },
    colors: {
      brickRed: {
        hex: '#98012E',
        rgb: [140, 38, 51]
      },
      desertSand: {
        hex: '#e2d6b5',
        rgb: [226, 214, 181]
      },
      black: pureBlack,
      white: pureWhite
    }
  },
  BOS: {
    fullName: 'Boston Bruns',
    mainColor: {
      hex: '#fcb514',
      rgb: [252, 181, 20]
    },
    colors: {
      gold: {
        hex: '#98012E',
        rgb: [252, 181, 20]
      },
      white: pureWhite,
      black: pureBlack
    }
  },
  CHI: {
    fullName: 'Chicago Blackhawks',
    mainColor: {
      hex: '#c60c30',
      rgb: [198, 12, 48]
    },
    colors: {
      red: {
        hex: '#c60c30',
        rgb: [198, 12, 48]
      },
      black: pureBlack,
      white: pureWhite
    }
  },
  BUF: {
    fullName: 'Buffalo Sabres',
    mainColor: {
      hex: '#002d62',
      rgb: [0, 45, 98]
    },
    colors: {
      navy: {
        hex: '#002d62',
        rgb: [0, 45, 98]
      },
      white: pureWhite,
      gold: {
        hex: '#fdb930',
        rgb: [253, 185, 48]
      },
      silver: {
        hex: '#a7a9ac',
        rgb: [167, 169, 172]
      }
    }
  },
  CGY: {
    fullName: 'Calgary Flames',
    mainColor: {
      hex: '#c81022',
      rgb: [200, 16, 46]
    },
    colors: {
      red: {
        hex: '#c81022',
        rgb: [200, 16, 46]
      },
      gold: {
        hex: '#fdbf12',
        rgb: [253, 191, 18]
      },
      black: pureBlack,
      white: pureWhite
    }
  },
  CAR: {
    fullName: 'Carolina Hurricanes',
    mainColor: {
      hex: '#c8102e',
      rgb: [200, 16, 46]
    },
    white: pureWhite,
    black: pureBlack,
    colors: {
      red: {
        hex: '#c8102e',
        rgb: [200, 16, 46]
      }
    }
  },
  DET: {
    fullName: 'Detroit RedWings',
    mainColor: {
      hex: '#e51837',
      rgb: [229, 24, 55]
    },
    colors: {
      red: {
        hex: '#e51837',
        rgb: [229, 24, 55]
      },
      white: pureWhite
    }
  },
  COL: {
    fullName: 'Colorado Avalance',
    mainColor: {
      hex: '#822433',
      rgb: [130, 36, 51]
    },
    colors: {
      burgundy: {
        hex: '#822433',
        rgb: [130, 36, 51]
      },
      blue: {
        hex: '#165788',
        rgb: [22, 87, 136]
      },
      silver: {
        hex: '#85888B',
        rgb: [133, 136, 139]
      },
      black: pureBlack
    }
  },
  CBJ: {
    fullName: 'Columbus Blue Jackets',
    mainColor: {
      hex: '#041e42',
      rgb: [4, 30, 66]
    },
    colors: {
      blue: {
        hex: '#041e42',
        rgb: [4, 30, 66]
      },
      red: {
        hex: '#c8102e',
        rgb: [200, 16, 46]
      },
      silver: {
        hex: '#8D9093',
        rgb: [141, 144, 147]
      },
      black: pureBlack,
      white: pureWhite
    }
  },
  DAL: {
    fullName: 'Dallas Stars',
    mainColor: {
      hex: '#016F4A',
      rgb: [1, 111, 74]
    },
    colors: {
      green: {
        hex: '#016F4A',
        rgb: [255, 184, 28]
      },
      silver: {
        hex: '#A7A8AC',
        rgb: [167, 168, 172]
      },
      white: pureWhite
    }
  },
  LAC: {
    fullName: 'Edmonton Oilers',
    mainColor: {
      hex: '#013E7F',
      rgb: [1, 62, 127]
    },
    colors: {
      blue: {
        hex: '#013E7F',
        rgb: [1, 62, 127]
      },
      orange: {
        hex: '#eb6e1e',
        rgb: [235, 110, 30]
      },
      white: pureWhite
    }
  },
  FLA: {
    fullName: 'Florida Panthers',
    mainColor: {
      hex: '#C51230',
      rgb: [229, 26, 56]
    },
    colors: {
      red: {
        hex: '#C51230',
        rgb: [229, 26, 56]
      },
      blue: {
        hex: '#002D62',
        rgb: [0, 45, 98]
      },
      gold: {
        hex: '#F1B310',
        rgb: [212, 160, 15]
      },
      white: pureWhite
    }
  },
  MEM: {
    fullName: 'Los Angeles Kings',
    mainColor: {
      hex: '#23375b',
      rgb: [35, 55, 91]
    },
    colors: {
      silver: {
        hex: '#B2B7BB',
        rgb: [35, 55, 91]
      },
      white: pureWhite,
      black: pureBlack
    }
  },
  MIN: {
    fullName: 'Minnesota Wild',
    mainColor: {
      hex: '#C51230',
      rgb: [197, 18, 48]
    },
    colors: {
      ironRangeRed: {
        hex: '#862633',
        rgb: [197, 18, 48]
      },
      forestGreen: {
        hex: '#004F30',
        rgb: [0, 79, 48]
      },
      harvestGold: {
        hex: '#004F30',
        rgb: [241, 179, 16]
      },
      minnesotaWheat: {
        hex: '#EEE3C7',
        rgb: [238, 227, 199]
      },
      white: pureWhite
    }
  },
  MTL: {
    fullName: 'Montreal Canadiens',
    mainColor: {
      hex: '#C51230',
      rgb: [197, 18, 48]
    },
    colors: {
      red: {
        hex: '#C51230',
        rgb: [197, 18, 48]
      },
      blue: {
        hex: '#083A81',
        rgb: [8, 58, 121]
      },
      white: pureWhite
    }
  },
  NSH: {
    fullName: 'Nashville Predators',
    mainColor: {
      hex: '#FDBB30',
      rgb: [253, 187, 48]
    },
    colors: {
      gold: {
        hex: '#FDBB30',
        rgb: [253, 187, 48]
      },
      navy: {
        hex: '#002D62',
        rgb: [0, 45, 98]
      },
      white: pureWhite
    }
  },
  NYI: {
    fullName: 'New York Islanders',
    mainColor: {
      hex: '#F57D31',
      rgb: [245, 125, 49]
    },
    colors: {
      orange: {
        hex: '#F57D31',
        rgb: [245, 125, 49]
      },
      blue: {
        hex: '#00529B',
        rgb: [0, 82, 155]
      },
      white: pureWhite
    }
  },
  NYR: {
    fullName: 'New York Rangers',
    mainColor: {
      hex: '#E51837',
      rgb: [230, 57, 63]
    },
    colors: {
      red: {
        hex: '#E51837',
        rgb: [230, 57, 63]
      },
      blue: {
        hex: '#0161AB',
        rgb: [1, 97, 171]
      },
      white: pureWhite
    }
  },
  OTT: {
    fullName: 'Ottawa Senators',
    mainColor: {
      hex: '#E51837',
      rgb: [229, 24, 55]
    },
    colors: {
      red: {
        hex: '#E51837',
        rgb: [229, 24, 55]
      },
      gold: {
        hex: '#D4A00F',
        rgb: [212, 160, 15]
      },
      white: pureWhite,
      black: pureBlack
    }
  },
  PHI: {
    fullName: 'Philadelphia Flyers',
    mainColor: {
      hex: '#F74902',
      rgb: [247, 73, 2]
    },
    colors: {
      flyersOrange: {
        hex: '#F74902',
        rgb: [247, 73, 2]
      },
      white: pureWhite,
      black: pureBlack
    }
  },
  PIT: {
    fullName: 'Pittsburgh Penguins',
    mainColor: {
      hex: '#CFC493',
      rgb: [207, 196, 147]
    },
    colors: {
      gold: {
        hex: '#CFC493',
        rgb: [207, 196, 147]
      },
      black: pureBlack,
      white: pureWhite,
      yellow: {
        hex: '#FFB81C',
        rgb: [255, 184, 28]
      }
    }
  },
  STL: {
    fullName: 'St. Louis Blues',
    mainColor: {
      hex: '#00529C',
      rgb: [0, 82, 156]
    },
    colors: {
      blue: {
        hex: '#00529C',
        rgb: [253, 185, 48]
      },
      gold: {
        hex: '#FDB930',
        rgb: [253, 185, 48]
      },
      navy: {
        hex: '#002D62',
        rgb: [0, 45, 98]
      },
      white: pureWhite
    }
  },
  SJS: {
    fullName: 'San Jose Sharks',
    mainColor: {
      hex: '#007889',
      rgb: [0, 120, 137]
    },
    colors: {
      pacificTeal: {
        hex: '#007889',
        rgb: [0, 120, 137]
      },
      orange: {
        hex: '#F4901E',
        rgb: [244, 144, 30]
      },
      white: pureWhite,
      black: pureBlack
    }
  },
  TBL: {
    fullName: 'Tampa Bay Lightning Kings',
    mainColor: {
      hex: '#003D7C',
      rgb: [0, 61, 124]
    },
    colors: {
      blue: {
        hex: '#003D7C',
        rgb: [0, 61, 124]
      },
      white: pureWhite,
      black: pureBlack
    }
  },
  TOR: {
    fullName: 'Toronto Maple Leafs',
    mainColor: {
      hex: '#013E7F',
      rgb: [1, 62, 127]
    },
    colors: {
      blue: {
        hex: '#013E7F',
        rgb: [1, 62, 127]
      },
      white: pureWhite
    }
  },
  VAN: {
    fullName: 'Vancouver Canucks',
    mainColor: {
      hex: '#003E7E',
      rgb: [0, 62, 126]
    },
    colors: {
      blue: {
        hex: '#003E7E',
        rgb: [0, 62, 126]
      },
      green: {
        hex: '#008852',
        rgb: [0, 136, 82]
      },
      silver: {
        hex: '#ADAEB2',
        rgb: [173, 174, 178]
      },
      white: pureWhite
    }
  },
  VGK: {
    fullName: 'Vegas Golden Knights',
    mainColor: {
      hex: '#333F48',
      rgb: [51, 63, 72]
    },
    colors: {
      navy: {
        hex: '#333F48',
        rgb: [51, 63, 72]
      },
      black: pureBlack,
      gold: {
        hex: '#f9a01b',
        rgb: [137, 115, 76]
      },
      red: {
        hex: '#C8102E',
        rgb: [200, 16, 46]
      },
      white: pureWhite
    }
  },
  WAS: {
    fullName: 'Washington Capitals',
    mainColor: {
      hex: '#002147',
      rgb: [0, 33, 71]
    },
    colors: {
      navyBlue: {
        hex: '#002147',
        rgb: [0, 33, 71]
      },
      red: {
        hex: '#C60C30',
        rgb: [198, 12, 48]
      },
      white: pureWhite
    }
  },
  WPG: {
    fullName: 'Winnepeg Jets',
    mainColor: {
      hex: '#002D62',
      rgb: [0, 45, 98]
    },
    colors: {
      polarNightBlue: {
        hex: '#002D62',
        rgb: [0, 45, 98]
      },
      aviatorBlue: {
        hex: '#006EC8',
        rgb: [0, 110, 200]
      },
      silver: {
        hex: '#8D8D8F',
        rgb: [141, 141, 143]
      },
      white: pureWhite
    }
  }
};

exports.default = colors;