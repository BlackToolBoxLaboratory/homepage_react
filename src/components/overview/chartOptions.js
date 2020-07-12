const chartOptions = {
  colors : [
    '#00d8ff'
  ],
  chart : {
    animations : {
      enabled : false,
    },
    toolbar : {
      show : false
    },
    zoom : {
      enabled : false,
    },
    sparkline : {
      enabled : true,
    }
  },
  dataLabels : {
    enabled : false
  },
  tooltip : {
    x : {
      show : false
    }
  },
  grid : {
    show : false
  },
  xaxis : {
    labels : {
      show : false
    },
    tooltip : {
      enabled : false
    }
  },
  yaxis : {
    forceNiceScale : true,
    labels         : {
      show : false
    },
    max : function(max) { 
      return max + 10; 
    },
    min : -10
  }
};

export default chartOptions;