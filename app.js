//circles
var datasetCircle = [3, 5, 10, 7, 9];

var svg = d3.select("body")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

var circles = svg.selectAll("circle")
    .data(datasetCircle)
    .enter()
    .append("circle")
    .attr("cx", function(d, i) {
        return i * 35 + 25;
    })
    .attr("cy", 100)
    .attr("r", function(d) {
        return d * 2;
    })
    .attr("fill", function(d) {
        return "rgb(10, 200, " + d * 23 + ")";
    });

//bars
var datasetBars = [23, 26, 22, 21, 15, 24, 37, 32, 22];

var w = 500;
var h = 400;

var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);


var bars = svg.selectAll("rect")
    .data(datasetBars)
    .enter()
    .append("rect")
    .attr("width", 15)
    .attr("height", function(d) {
        return d * 4;
    })
    .attr("x", function(d, i) {
        return i * 20 + 10;
    })
    .attr("y", function(d) {
        return h - d * 4;
    })
    .attr("fill", "red")


//bars with lables
var datasetLabels = [23, 26, 22, 21, 15, 24, 37, 32, 22];

var w = 500;
var h = 400;

var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

var bars = svg.selectAll("rect")
    .data(datasetLabels)
    .enter()
    .append("rect")
    .attr("width", 30)
    .attr("height", function(d) {
        return d * 10;
    })
    .attr("x", function(d, i) {
        return i * 35;
    })
    .attr("y", function(d) {
        return h - d * 10;
    })
    .attr("fill", "pink");

var labels = svg.selectAll("text")
    .data(datasetBars)
    .enter()
    .append("text")
    .text(20)
    .attr("x", function(d, i) {
        return i * 35 + 5;
    })
    .attr("y", function(d, i) {
        return h - d * 10 + 40;
    })
    .attr("fill", "green");

//labels with mouseenter effect
var datasetEffect = [23, 26, 22, 21, 15, 24, 37, 32, 22];

var w = 500;
var h = 400;

var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

var bars = svg.selectAll("rect")
    .data(datasetEffect)
    .enter()
    .append("rect")
    .attr("width", 30)
    .attr("height", function(d) {
        return d * 10;
    })
    .attr("x", function(d, i) {
        return i * 35;
    })
    .attr("y", function(d) {
        return h - d * 10;
    })
    .attr("fill", "orange")
    .on("mouseover", function() {
        d3.select(this)
            .attr("fill", "green")
    })
    .on("mouseout", function() {
        d3.select(this)
            .attr("fill", "pink")
    })

var labels = svg.selectAll("text")
    .data(datasetEffect)
    .enter()
    .append("text")
    .text(function(d) {
        return d;
    })
    .attr("x", function(d, i) {
        return i * 35 + 5;
    })
    .attr("y", function(d) {
        return h - d * 10 + 15;
    })
    .attr("fill", "white");

//scatterplot

var datasetScatterplot = [
				[22, 25000], [32, 65000], [27, 50000], [30, 40000],
        [26, 45000], [35, 90000], [21, 30000], [25, 32000],
        [31, 30000], [22, 40000], [33, 68000], [29, 38000]
	];

var w = 500;
var h = 400;

var svg = d3.select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

var dots = svg.selectAll("circle")
				.data(datasetScatterplot)
        .enter()
        .append("circle")
        .attr("cx", function(d) {
        return d[0]*16 - 120;
        })
        .attr("cy", function(d) {
        return h - d[1]/500 -100;
        })
        .attr("r", 3)
        .attr("fill", "blue");



//scales
var datasetScales = [
    [22, 25000],
    [32, 65000],
    [27, 50000],
    [30, 40000],
    [26, 45000],
    [35, 90000],
    [21, 30000],
    [25, 32000],
    [31, 30000],
    [22, 40000],
    [33, 68000],
    [29, 38000]
];

var w = 500;
var h = 400;
var padding = 50;

var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

var xScale = d3.scale.linear()
    .range([padding, w - padding])
    .domain([20, 35]);

var yScale = d3.scale.linear()
    .range([h - padding, padding])
    .domain([20000, 100000]);

var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient("bottom")
    .ticks(5);

var yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left")
    .ticks(10);

svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(0," + (h - padding) + ")")
    .call(xAxis);

svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(" + padding + ",0)")
    .call(yAxis);

var dots = svg.selectAll("circle")
    .data(datasetScales)
    .enter()
    .append("circle")
    .attr("cx", function(d) {
        return xScale(d[0]);
    })
    .attr("cy", function(d) {
        return yScale(d[1]);
    })
    .attr("r", 3)
    .attr("fill", "blue");