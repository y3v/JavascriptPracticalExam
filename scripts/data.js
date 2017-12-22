var tempWeatherObjectMTL = {
  "coord": {
    "lon": -73.59,
    "lat": 45.51
  },
  "weather": [{
    "id": 804,
    "main": "Clouds",
    "description": "overcast clouds",
    "icon": "04d"
  }],
  "base": "stations",
  "main": {
    "temp": 257.12,
    "pressure": 1030,
    "humidity": 65,
    "temp_min": 256.15,
    "temp_max": 258.15
  },
  "visibility": 24140,
  "wind": {
    "speed": 6.2,
    "deg": 40
  },
  "clouds": {
    "all": 90
  },
  "dt": 1513951200,
  "sys": {
    "type": 1,
    "id": 3829,
    "message": 0.165,
    "country": "CA",
    "sunrise": 1513945939,
    "sunset": 1513977277
  },
  "id": 6077243,
  "name": "Montreal",
  "cod": 200
};

var tempWeatherObjectTOR = {
  "coord": {
    "lon": -79.42,
    "lat": 43.7
  },
  "weather": [{
    "id": 600,
    "main": "Snow",
    "description": "light snow",
    "icon": "13d"
  }],
  "base": "stations",
  "main": {
    "temp": 267.97,
    "pressure": 1018,
    "humidity": 85,
    "temp_min": 266.15,
    "temp_max": 271.15
  },
  "visibility": 4828,
  "wind": {
    "speed": 9.3,
    "deg": 50,
    "gust": 12.9
  },
  "clouds": {
    "all": 90
  },
  "dt": 1513954800,
  "sys": {
    "type": 1,
    "id": 3721,
    "message": 0.0052,
    "country": "CA",
    "sunrise": 1513946943,
    "sunset": 1513979073
  },
  "id": 6167865,
  "name": "Toronto",
  "cod": 200
}

var tempWeatherObjectOTT = {
  "coord": {
    "lon": -88.84,
    "lat": 41.35
  },
  "weather": [{
    "id": 701,
    "main": "Mist",
    "description": "mist",
    "icon": "50d"
  }],
  "base": "stations",
  "main": {
    "temp": 275.47,
    "pressure": 1017,
    "humidity": 91,
    "temp_min": 274.15,
    "temp_max": 277.15
  },
  "visibility": 8047,
  "wind": {
    "speed": 3.1,
    "deg": 360
  },
  "clouds": {
    "all": 90
  },
  "dt": 1513956900,
  "sys": {
    "type": 1,
    "id": 999,
    "message": 0.0037,
    "country": "US",
    "sunrise": 1513948731,
    "sunset": 1513981809
  },
  "id": 4905006,
  "name": "Ottawa",
  "cod": 200
}

var extendedMTL = {
  "cod": "200",
  "message": 0.0046,
  "cnt": 16,
  "list": [{
    "dt": 1513965600,
    "main": {
      "temp": 259.71,
      "temp_min": 259.087,
      "temp_max": 259.71,
      "pressure": 1033.46,
      "sea_level": 1041.23,
      "grnd_level": 1033.46,
      "humidity": 81,
      "temp_kf": 0.62
    },
    "weather": [{
      "id": 600,
      "main": "Snow",
      "description": "light snow",
      "icon": "13d"
    }],
    "clouds": {
      "all": 92
    },
    "wind": {
      "speed": 5.76,
      "deg": 56.0018
    },
    "snow": {
      "3h": 0.886
    },
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2017-12-22 18:00:00"
  }, {
    "dt": 1513976400,
    "main": {
      "temp": 260.46,
      "temp_min": 259.995,
      "temp_max": 260.46,
      "pressure": 1031.89,
      "sea_level": 1039.65,
      "grnd_level": 1031.89,
      "humidity": 82,
      "temp_kf": 0.47
    },
    "weather": [{
      "id": 600,
      "main": "Snow",
      "description": "light snow",
      "icon": "13d"
    }],
    "clouds": {
      "all": 92
    },
    "wind": {
      "speed": 5.87,
      "deg": 55.0051
    },
    "snow": {
      "3h": 1.088
    },
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2017-12-22 21:00:00"
  }, {
    "dt": 1513987200,
    "main": {
      "temp": 260.9,
      "temp_min": 260.584,
      "temp_max": 260.9,
      "pressure": 1031.17,
      "sea_level": 1038.97,
      "grnd_level": 1031.17,
      "humidity": 85,
      "temp_kf": 0.31
    },
    "weather": [{
      "id": 600,
      "main": "Snow",
      "description": "light snow",
      "icon": "13n"
    }],
    "clouds": {
      "all": 92
    },
    "wind": {
      "speed": 5.89,
      "deg": 51.5048
    },
    "snow": {
      "3h": 0.542
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2017-12-23 00:00:00"
  }, {
    "dt": 1513998000,
    "main": {
      "temp": 262.78,
      "temp_min": 262.623,
      "temp_max": 262.78,
      "pressure": 1029.09,
      "sea_level": 1036.8,
      "grnd_level": 1029.09,
      "humidity": 84,
      "temp_kf": 0.16
    },
    "weather": [{
      "id": 600,
      "main": "Snow",
      "description": "light snow",
      "icon": "13n"
    }],
    "clouds": {
      "all": 92
    },
    "wind": {
      "speed": 6.02,
      "deg": 50.0059
    },
    "snow": {
      "3h": 0.397
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2017-12-23 03:00:00"
  }, {
    "dt": 1514008800,
    "main": {
      "temp": 264.458,
      "temp_min": 264.458,
      "temp_max": 264.458,
      "pressure": 1025.67,
      "sea_level": 1033.24,
      "grnd_level": 1025.67,
      "humidity": 88,
      "temp_kf": 0
    },
    "weather": [{
      "id": 600,
      "main": "Snow",
      "description": "light snow",
      "icon": "13n"
    }],
    "clouds": {
      "all": 92
    },
    "wind": {
      "speed": 6.08,
      "deg": 52.5007
    },
    "snow": {
      "3h": 0.753
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2017-12-23 06:00:00"
  }, {
    "dt": 1514019600,
    "main": {
      "temp": 266.248,
      "temp_min": 266.248,
      "temp_max": 266.248,
      "pressure": 1023.22,
      "sea_level": 1030.84,
      "grnd_level": 1023.22,
      "humidity": 90,
      "temp_kf": 0
    },
    "weather": [{
      "id": 600,
      "main": "Snow",
      "description": "light snow",
      "icon": "13n"
    }],
    "clouds": {
      "all": 92
    },
    "wind": {
      "speed": 4.93,
      "deg": 47.5038
    },
    "snow": {
      "3h": 0.46525
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2017-12-23 09:00:00"
  }, {
    "dt": 1514030400,
    "main": {
      "temp": 267.295,
      "temp_min": 267.295,
      "temp_max": 267.295,
      "pressure": 1020.8,
      "sea_level": 1028.29,
      "grnd_level": 1020.8,
      "humidity": 91,
      "temp_kf": 0
    },
    "weather": [{
      "id": 601,
      "main": "Snow",
      "description": "snow",
      "icon": "13n"
    }],
    "clouds": {
      "all": 92
    },
    "wind": {
      "speed": 4.39,
      "deg": 33.0007
    },
    "snow": {
      "3h": 1.545
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2017-12-23 12:00:00"
  }, {
    "dt": 1514041200,
    "main": {
      "temp": 269.378,
      "temp_min": 269.378,
      "temp_max": 269.378,
      "pressure": 1019.83,
      "sea_level": 1027.37,
      "grnd_level": 1019.83,
      "humidity": 99,
      "temp_kf": 0
    },
    "weather": [{
      "id": 600,
      "main": "Snow",
      "description": "light snow",
      "icon": "13d"
    }],
    "clouds": {
      "all": 92
    },
    "wind": {
      "speed": 3.32,
      "deg": 10.5059
    },
    "snow": {
      "3h": 1.03625
    },
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2017-12-23 15:00:00"
  }, {
    "dt": 1514052000,
    "main": {
      "temp": 269.851,
      "temp_min": 269.851,
      "temp_max": 269.851,
      "pressure": 1019.56,
      "sea_level": 1026.92,
      "grnd_level": 1019.56,
      "humidity": 99,
      "temp_kf": 0
    },
    "weather": [{
      "id": 601,
      "main": "Snow",
      "description": "snow",
      "icon": "13d"
    }],
    "clouds": {
      "all": 92
    },
    "wind": {
      "speed": 3.01,
      "deg": 261.001
    },
    "snow": {
      "3h": 1.545
    },
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2017-12-23 18:00:00"
  }, {
    "dt": 1514062800,
    "main": {
      "temp": 269.732,
      "temp_min": 269.732,
      "temp_max": 269.732,
      "pressure": 1020.29,
      "sea_level": 1027.79,
      "grnd_level": 1020.29,
      "humidity": 93,
      "temp_kf": 0
    },
    "weather": [{
      "id": 600,
      "main": "Snow",
      "description": "light snow",
      "icon": "13d"
    }],
    "clouds": {
      "all": 88
    },
    "wind": {
      "speed": 3.81,
      "deg": 256.007
    },
    "snow": {
      "3h": 0.0975
    },
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2017-12-23 21:00:00"
  }, {
    "dt": 1514073600,
    "main": {
      "temp": 267.311,
      "temp_min": 267.311,
      "temp_max": 267.311,
      "pressure": 1022.5,
      "sea_level": 1030.08,
      "grnd_level": 1022.5,
      "humidity": 87,
      "temp_kf": 0
    },
    "weather": [{
      "id": 803,
      "main": "Clouds",
      "description": "broken clouds",
      "icon": "04n"
    }],
    "clouds": {
      "all": 80
    },
    "wind": {
      "speed": 3.67,
      "deg": 262.501
    },
    "snow": {},
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2017-12-24 00:00:00"
  }, {
    "dt": 1514084400,
    "main": {
      "temp": 263.979,
      "temp_min": 263.979,
      "temp_max": 263.979,
      "pressure": 1024.95,
      "sea_level": 1032.56,
      "grnd_level": 1024.95,
      "humidity": 81,
      "temp_kf": 0
    },
    "weather": [{
      "id": 801,
      "main": "Clouds",
      "description": "few clouds",
      "icon": "02n"
    }],
    "clouds": {
      "all": 24
    },
    "wind": {
      "speed": 3.55,
      "deg": 270.002
    },
    "snow": {},
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2017-12-24 03:00:00"
  }, {
    "dt": 1514095200,
    "main": {
      "temp": 259.428,
      "temp_min": 259.428,
      "temp_max": 259.428,
      "pressure": 1026.65,
      "sea_level": 1034.37,
      "grnd_level": 1026.65,
      "humidity": 70,
      "temp_kf": 0
    },
    "weather": [{
      "id": 801,
      "main": "Clouds",
      "description": "few clouds",
      "icon": "02n"
    }],
    "clouds": {
      "all": 12
    },
    "wind": {
      "speed": 1.31,
      "deg": 274.501
    },
    "snow": {},
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2017-12-24 06:00:00"
  }, {
    "dt": 1514106000,
    "main": {
      "temp": 258.287,
      "temp_min": 258.287,
      "temp_max": 258.287,
      "pressure": 1028.39,
      "sea_level": 1036.21,
      "grnd_level": 1028.39,
      "humidity": 60,
      "temp_kf": 0
    },
    "weather": [{
      "id": 803,
      "main": "Clouds",
      "description": "broken clouds",
      "icon": "04n"
    }],
    "clouds": {
      "all": 56
    },
    "wind": {
      "speed": 1.27,
      "deg": 273.003
    },
    "snow": {},
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2017-12-24 09:00:00"
  }, {
    "dt": 1514116800,
    "main": {
      "temp": 259.825,
      "temp_min": 259.825,
      "temp_max": 259.825,
      "pressure": 1030.11,
      "sea_level": 1037.92,
      "grnd_level": 1030.11,
      "humidity": 68,
      "temp_kf": 0
    },
    "weather": [{
      "id": 803,
      "main": "Clouds",
      "description": "broken clouds",
      "icon": "04n"
    }],
    "clouds": {
      "all": 56
    },
    "wind": {
      "speed": 1.27,
      "deg": 284.501
    },
    "snow": {},
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2017-12-24 12:00:00"
  }, {
    "dt": 1514127600,
    "main": {
      "temp": 262.853,
      "temp_min": 262.853,
      "temp_max": 262.853,
      "pressure": 1031.2,
      "sea_level": 1038.88,
      "grnd_level": 1031.2,
      "humidity": 77,
      "temp_kf": 0
    },
    "weather": [{
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01d"
    }],
    "clouds": {
      "all": 0
    },
    "wind": {
      "speed": 1.37,
      "deg": 324.503
    },
    "snow": {},
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2017-12-24 15:00:00"
  }],
  "city": {
    "id": 6077243,
    "name": "Montreal",
    "coord": {
      "lat": 45.5088,
      "lon": -73.5879
    },
    "country": "CA"
  }
}

var extendedTOR = {
  "cod": "200",
  "message": 0.0051,
  "cnt": 16,
  "list": [{
    "dt": 1513965600,
    "main": {
      "temp": 268.76,
      "temp_min": 268.76,
      "temp_max": 270.337,
      "pressure": 1010.52,
      "sea_level": 1030.24,
      "grnd_level": 1010.52,
      "humidity": 90,
      "temp_kf": -1.58
    },
    "weather": [{
      "id": 600,
      "main": "Snow",
      "description": "light snow",
      "icon": "13d"
    }],
    "clouds": {
      "all": 92
    },
    "wind": {
      "speed": 7.01,
      "deg": 56.0018
    },
    "snow": {
      "3h": 0.756
    },
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2017-12-22 18:00:00"
  }, {
    "dt": 1513976400,
    "main": {
      "temp": 269.09,
      "temp_min": 269.09,
      "temp_max": 270.27,
      "pressure": 1010.73,
      "sea_level": 1030.61,
      "grnd_level": 1010.73,
      "humidity": 92,
      "temp_kf": -1.18
    },
    "weather": [{
      "id": 600,
      "main": "Snow",
      "description": "light snow",
      "icon": "13d"
    }],
    "clouds": {
      "all": 44
    },
    "wind": {
      "speed": 5.42,
      "deg": 45.5051
    },
    "snow": {
      "3h": 0.393
    },
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2017-12-22 21:00:00"
  }, {
    "dt": 1513987200,
    "main": {
      "temp": 268.47,
      "temp_min": 268.47,
      "temp_max": 269.259,
      "pressure": 1011.89,
      "sea_level": 1031.71,
      "grnd_level": 1011.89,
      "humidity": 92,
      "temp_kf": -0.79
    },
    "weather": [{
      "id": 600,
      "main": "Snow",
      "description": "light snow",
      "icon": "13n"
    }],
    "clouds": {
      "all": 64
    },
    "wind": {
      "speed": 3.97,
      "deg": 44.5048
    },
    "snow": {
      "3h": 0.036
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2017-12-23 00:00:00"
  }, {
    "dt": 1513998000,
    "main": {
      "temp": 268.63,
      "temp_min": 268.63,
      "temp_max": 269.023,
      "pressure": 1011.09,
      "sea_level": 1030.92,
      "grnd_level": 1011.09,
      "humidity": 93,
      "temp_kf": -0.39
    },
    "weather": [{
      "id": 600,
      "main": "Snow",
      "description": "light snow",
      "icon": "13n"
    }],
    "clouds": {
      "all": 80
    },
    "wind": {
      "speed": 4.07,
      "deg": 51.5059
    },
    "snow": {
      "3h": 0.044
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2017-12-23 03:00:00"
  }, {
    "dt": 1514008800,
    "main": {
      "temp": 269.358,
      "temp_min": 269.358,
      "temp_max": 269.358,
      "pressure": 1009.78,
      "sea_level": 1029.59,
      "grnd_level": 1009.78,
      "humidity": 94,
      "temp_kf": 0
    },
    "weather": [{
      "id": 600,
      "main": "Snow",
      "description": "light snow",
      "icon": "13n"
    }],
    "clouds": {
      "all": 88
    },
    "wind": {
      "speed": 3.53,
      "deg": 49.0007
    },
    "snow": {
      "3h": 0.071999999999999
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2017-12-23 06:00:00"
  }, {
    "dt": 1514019600,
    "main": {
      "temp": 269.223,
      "temp_min": 269.223,
      "temp_max": 269.223,
      "pressure": 1009.61,
      "sea_level": 1029.34,
      "grnd_level": 1009.61,
      "humidity": 95,
      "temp_kf": 0
    },
    "weather": [{
      "id": 600,
      "main": "Snow",
      "description": "light snow",
      "icon": "13n"
    }],
    "clouds": {
      "all": 92
    },
    "wind": {
      "speed": 2.96,
      "deg": 6.50385
    },
    "snow": {
      "3h": 0.1345
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2017-12-23 09:00:00"
  }, {
    "dt": 1514030400,
    "main": {
      "temp": 269.295,
      "temp_min": 269.295,
      "temp_max": 269.295,
      "pressure": 1009.86,
      "sea_level": 1029.79,
      "grnd_level": 1009.86,
      "humidity": 95,
      "temp_kf": 0
    },
    "weather": [{
      "id": 600,
      "main": "Snow",
      "description": "light snow",
      "icon": "13n"
    }],
    "clouds": {
      "all": 92
    },
    "wind": {
      "speed": 2.61,
      "deg": 339.501
    },
    "snow": {
      "3h": 0.16
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2017-12-23 12:00:00"
  }, {
    "dt": 1514041200,
    "main": {
      "temp": 269.878,
      "temp_min": 269.878,
      "temp_max": 269.878,
      "pressure": 1011.16,
      "sea_level": 1031.02,
      "grnd_level": 1011.16,
      "humidity": 94,
      "temp_kf": 0
    },
    "weather": [{
      "id": 803,
      "main": "Clouds",
      "description": "broken clouds",
      "icon": "04d"
    }],
    "clouds": {
      "all": 76
    },
    "wind": {
      "speed": 2.17,
      "deg": 322.006
    },
    "snow": {},
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2017-12-23 15:00:00"
  }, {
    "dt": 1514052000,
    "main": {
      "temp": 273.001,
      "temp_min": 273.001,
      "temp_max": 273.001,
      "pressure": 1010.32,
      "sea_level": 1030.04,
      "grnd_level": 1010.32,
      "humidity": 94,
      "temp_kf": 0
    },
    "weather": [{
      "id": 803,
      "main": "Clouds",
      "description": "broken clouds",
      "icon": "04d"
    }],
    "clouds": {
      "all": 68
    },
    "wind": {
      "speed": 1.39,
      "deg": 287.001
    },
    "snow": {},
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2017-12-23 18:00:00"
  }, {
    "dt": 1514062800,
    "main": {
      "temp": 272.957,
      "temp_min": 272.957,
      "temp_max": 272.957,
      "pressure": 1010.4,
      "sea_level": 1030.1,
      "grnd_level": 1010.4,
      "humidity": 91,
      "temp_kf": 0
    },
    "weather": [{
      "id": 803,
      "main": "Clouds",
      "description": "broken clouds",
      "icon": "04d"
    }],
    "clouds": {
      "all": 56
    },
    "wind": {
      "speed": 1.29,
      "deg": 231.507
    },
    "snow": {},
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2017-12-23 21:00:00"
  }, {
    "dt": 1514073600,
    "main": {
      "temp": 272.161,
      "temp_min": 272.161,
      "temp_max": 272.161,
      "pressure": 1012.29,
      "sea_level": 1032.07,
      "grnd_level": 1012.29,
      "humidity": 83,
      "temp_kf": 0
    },
    "weather": [{
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01n"
    }],
    "clouds": {
      "all": 80
    },
    "wind": {
      "speed": 1.97,
      "deg": 273.501
    },
    "snow": {
      "3h": 0.024999999999999
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2017-12-24 00:00:00"
  }, {
    "dt": 1514084400,
    "main": {
      "temp": 270.554,
      "temp_min": 270.554,
      "temp_max": 270.554,
      "pressure": 1013.69,
      "sea_level": 1033.41,
      "grnd_level": 1013.69,
      "humidity": 84,
      "temp_kf": 0
    },
    "weather": [{
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01n"
    }],
    "clouds": {
      "all": 32
    },
    "wind": {
      "speed": 3.3,
      "deg": 300.502
    },
    "snow": {
      "3h": 0.0099999999999998
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2017-12-24 03:00:00"
  }, {
    "dt": 1514095200,
    "main": {
      "temp": 268.428,
      "temp_min": 268.428,
      "temp_max": 268.428,
      "pressure": 1014.73,
      "sea_level": 1034.61,
      "grnd_level": 1014.73,
      "humidity": 79,
      "temp_kf": 0
    },
    "weather": [{
      "id": 803,
      "main": "Clouds",
      "description": "broken clouds",
      "icon": "04n"
    }],
    "clouds": {
      "all": 64
    },
    "wind": {
      "speed": 2.36,
      "deg": 275.501
    },
    "snow": {},
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2017-12-24 06:00:00"
  }, {
    "dt": 1514106000,
    "main": {
      "temp": 268.062,
      "temp_min": 268.062,
      "temp_max": 268.062,
      "pressure": 1015.34,
      "sea_level": 1035.32,
      "grnd_level": 1015.34,
      "humidity": 82,
      "temp_kf": 0
    },
    "weather": [{
      "id": 803,
      "main": "Clouds",
      "description": "broken clouds",
      "icon": "04n"
    }],
    "clouds": {
      "all": 56
    },
    "wind": {
      "speed": 2.72,
      "deg": 281.503
    },
    "snow": {},
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2017-12-24 09:00:00"
  }, {
    "dt": 1514116800,
    "main": {
      "temp": 264.825,
      "temp_min": 264.825,
      "temp_max": 264.825,
      "pressure": 1015.68,
      "sea_level": 1035.73,
      "grnd_level": 1015.68,
      "humidity": 65,
      "temp_kf": 0
    },
    "weather": [{
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01n"
    }],
    "clouds": {
      "all": 0
    },
    "wind": {
      "speed": 1.37,
      "deg": 284.001
    },
    "snow": {},
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2017-12-24 12:00:00"
  }, {
    "dt": 1514127600,
    "main": {
      "temp": 268.803,
      "temp_min": 268.803,
      "temp_max": 268.803,
      "pressure": 1016.13,
      "sea_level": 1036.24,
      "grnd_level": 1016.13,
      "humidity": 81,
      "temp_kf": 0
    },
    "weather": [{
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01d"
    }],
    "clouds": {
      "all": 0
    },
    "wind": {
      "speed": 1.52,
      "deg": 301.503
    },
    "snow": {},
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2017-12-24 15:00:00"
  }],
  "city": {
    "id": 6167865,
    "name": "Toronto",
    "coord": {
      "lat": 43.7001,
      "lon": -79.4163
    },
    "country": "CA"
  }
}

var extendedOTT = {
  "cod": "200",
  "message": 0.0061,
  "cnt": 16,
  "list": [{
    "dt": 1513965600,
    "main": {
      "temp": 279.96,
      "temp_min": 277.887,
      "temp_max": 279.96,
      "pressure": 1005.09,
      "sea_level": 1030.2,
      "grnd_level": 1005.09,
      "humidity": 73,
      "temp_kf": 2.07
    },
    "weather": [{
      "id": 803,
      "main": "Clouds",
      "description": "broken clouds",
      "icon": "04d"
    }],
    "clouds": {
      "all": 76
    },
    "wind": {
      "speed": 2.83,
      "deg": 350.002
    },
    "rain": {},
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2017-12-22 18:00:00"
  }, {
    "dt": 1513976400,
    "main": {
      "temp": 280.02,
      "temp_min": 278.47,
      "temp_max": 280.02,
      "pressure": 1005.3,
      "sea_level": 1030.49,
      "grnd_level": 1005.3,
      "humidity": 68,
      "temp_kf": 1.55
    },
    "weather": [{
      "id": 802,
      "main": "Clouds",
      "description": "scattered clouds",
      "icon": "03d"
    }],
    "clouds": {
      "all": 32
    },
    "wind": {
      "speed": 3.09,
      "deg": 323.005
    },
    "rain": {},
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2017-12-22 21:00:00"
  }, {
    "dt": 1513987200,
    "main": {
      "temp": 276.04,
      "temp_min": 275.009,
      "temp_max": 276.04,
      "pressure": 1006.94,
      "sea_level": 1032.48,
      "grnd_level": 1006.94,
      "humidity": 76,
      "temp_kf": 1.03
    },
    "weather": [{
      "id": 802,
      "main": "Clouds",
      "description": "scattered clouds",
      "icon": "03n"
    }],
    "clouds": {
      "all": 44
    },
    "wind": {
      "speed": 3.77,
      "deg": 321.505
    },
    "rain": {},
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2017-12-23 00:00:00"
  }, {
    "dt": 1513998000,
    "main": {
      "temp": 273.27,
      "temp_min": 272.748,
      "temp_max": 273.27,
      "pressure": 1007.76,
      "sea_level": 1033.43,
      "grnd_level": 1007.76,
      "humidity": 84,
      "temp_kf": 0.52
    },
    "weather": [{
      "id": 804,
      "main": "Clouds",
      "description": "overcast clouds",
      "icon": "04n"
    }],
    "clouds": {
      "all": 88
    },
    "wind": {
      "speed": 4.39,
      "deg": 331.506
    },
    "rain": {},
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2017-12-23 03:00:00"
  }, {
    "dt": 1514008800,
    "main": {
      "temp": 271.683,
      "temp_min": 271.683,
      "temp_max": 271.683,
      "pressure": 1009.05,
      "sea_level": 1034.78,
      "grnd_level": 1009.05,
      "humidity": 82,
      "temp_kf": 0
    },
    "weather": [{
      "id": 804,
      "main": "Clouds",
      "description": "overcast clouds",
      "icon": "04n"
    }],
    "clouds": {
      "all": 88
    },
    "wind": {
      "speed": 3.71,
      "deg": 336.001
    },
    "rain": {},
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2017-12-23 06:00:00"
  }, {
    "dt": 1514019600,
    "main": {
      "temp": 269.348,
      "temp_min": 269.348,
      "temp_max": 269.348,
      "pressure": 1009.28,
      "sea_level": 1035.26,
      "grnd_level": 1009.28,
      "humidity": 88,
      "temp_kf": 0
    },
    "weather": [{
      "id": 801,
      "main": "Clouds",
      "description": "few clouds",
      "icon": "02n"
    }],
    "clouds": {
      "all": 20
    },
    "wind": {
      "speed": 3.81,
      "deg": 339.004
    },
    "rain": {},
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2017-12-23 09:00:00"
  }, {
    "dt": 1514030400,
    "main": {
      "temp": 266.795,
      "temp_min": 266.795,
      "temp_max": 266.795,
      "pressure": 1010.02,
      "sea_level": 1036.15,
      "grnd_level": 1010.02,
      "humidity": 77,
      "temp_kf": 0
    },
    "weather": [{
      "id": 803,
      "main": "Clouds",
      "description": "broken clouds",
      "icon": "04n"
    }],
    "clouds": {
      "all": 64
    },
    "wind": {
      "speed": 3.91,
      "deg": 351.001
    },
    "rain": {},
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2017-12-23 12:00:00"
  }, {
    "dt": 1514041200,
    "main": {
      "temp": 266.353,
      "temp_min": 266.353,
      "temp_max": 266.353,
      "pressure": 1011.4,
      "sea_level": 1037.51,
      "grnd_level": 1011.4,
      "humidity": 66,
      "temp_kf": 0
    },
    "weather": [{
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01d"
    }],
    "clouds": {
      "all": 0
    },
    "wind": {
      "speed": 3.54,
      "deg": 350.006
    },
    "rain": {},
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2017-12-23 15:00:00"
  }, {
    "dt": 1514052000,
    "main": {
      "temp": 269.626,
      "temp_min": 269.626,
      "temp_max": 269.626,
      "pressure": 1011.46,
      "sea_level": 1037.38,
      "grnd_level": 1011.46,
      "humidity": 79,
      "temp_kf": 0
    },
    "weather": [{
      "id": 801,
      "main": "Clouds",
      "description": "few clouds",
      "icon": "02d"
    }],
    "clouds": {
      "all": 24
    },
    "wind": {
      "speed": 3.19,
      "deg": 335.501
    },
    "rain": {},
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2017-12-23 18:00:00"
  }, {
    "dt": 1514062800,
    "main": {
      "temp": 270.282,
      "temp_min": 270.282,
      "temp_max": 270.282,
      "pressure": 1011.05,
      "sea_level": 1036.87,
      "grnd_level": 1011.05,
      "humidity": 65,
      "temp_kf": 0
    },
    "weather": [{
      "id": 803,
      "main": "Clouds",
      "description": "broken clouds",
      "icon": "04d"
    }],
    "clouds": {
      "all": 64
    },
    "wind": {
      "speed": 3.99,
      "deg": 330.007
    },
    "rain": {},
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2017-12-23 21:00:00"
  }, {
    "dt": 1514073600,
    "main": {
      "temp": 267.986,
      "temp_min": 267.986,
      "temp_max": 267.986,
      "pressure": 1012.69,
      "sea_level": 1038.75,
      "grnd_level": 1012.69,
      "humidity": 58,
      "temp_kf": 0
    },
    "weather": [{
      "id": 802,
      "main": "Clouds",
      "description": "scattered clouds",
      "icon": "03n"
    }],
    "clouds": {
      "all": 32
    },
    "wind": {
      "speed": 3.62,
      "deg": 334.501
    },
    "rain": {},
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2017-12-24 00:00:00"
  }, {
    "dt": 1514084400,
    "main": {
      "temp": 266.154,
      "temp_min": 266.154,
      "temp_max": 266.154,
      "pressure": 1013.93,
      "sea_level": 1040.22,
      "grnd_level": 1013.93,
      "humidity": 54,
      "temp_kf": 0
    },
    "weather": [{
      "id": 802,
      "main": "Clouds",
      "description": "scattered clouds",
      "icon": "03n"
    }],
    "clouds": {
      "all": 44
    },
    "wind": {
      "speed": 3.9,
      "deg": 356.002
    },
    "rain": {},
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2017-12-24 03:00:00"
  }, {
    "dt": 1514095200,
    "main": {
      "temp": 265.053,
      "temp_min": 265.053,
      "temp_max": 265.053,
      "pressure": 1014.32,
      "sea_level": 1040.73,
      "grnd_level": 1014.32,
      "humidity": 54,
      "temp_kf": 0
    },
    "weather": [{
      "id": 803,
      "main": "Clouds",
      "description": "broken clouds",
      "icon": "04n"
    }],
    "clouds": {
      "all": 56
    },
    "wind": {
      "speed": 3.81,
      "deg": 9.50137
    },
    "rain": {},
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2017-12-24 06:00:00"
  }, {
    "dt": 1514106000,
    "main": {
      "temp": 264.362,
      "temp_min": 264.362,
      "temp_max": 264.362,
      "pressure": 1014.93,
      "sea_level": 1041.44,
      "grnd_level": 1014.93,
      "humidity": 57,
      "temp_kf": 0
    },
    "weather": [{
      "id": 600,
      "main": "Snow",
      "description": "light snow",
      "icon": "13n"
    }],
    "clouds": {
      "all": 80
    },
    "wind": {
      "speed": 3.72,
      "deg": 0.503418
    },
    "rain": {},
    "snow": {
      "3h": 0.2225
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2017-12-24 09:00:00"
  }, {
    "dt": 1514116800,
    "main": {
      "temp": 264.075,
      "temp_min": 264.075,
      "temp_max": 264.075,
      "pressure": 1014.79,
      "sea_level": 1041.33,
      "grnd_level": 1014.79,
      "humidity": 58,
      "temp_kf": 0
    },
    "weather": [{
      "id": 600,
      "main": "Snow",
      "description": "light snow",
      "icon": "13n"
    }],
    "clouds": {
      "all": 92
    },
    "wind": {
      "speed": 3.94,
      "deg": 348.501
    },
    "rain": {},
    "snow": {
      "3h": 0.5325
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2017-12-24 12:00:00"
  }, {
    "dt": 1514127600,
    "main": {
      "temp": 264.003,
      "temp_min": 264.003,
      "temp_max": 264.003,
      "pressure": 1014.67,
      "sea_level": 1041.14,
      "grnd_level": 1014.67,
      "humidity": 69,
      "temp_kf": 0
    },
    "weather": [{
      "id": 600,
      "main": "Snow",
      "description": "light snow",
      "icon": "13d"
    }],
    "clouds": {
      "all": 80
    },
    "wind": {
      "speed": 3.6,
      "deg": 344.003
    },
    "rain": {},
    "snow": {
      "3h": 1.365
    },
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2017-12-24 15:00:00"
  }],
  "city": {
    "id": 4905006,
    "name": "Ottawa",
    "coord": {
      "lat": 41.3456,
      "lon": -88.8426
    },
    "country": "US"
  }
}
