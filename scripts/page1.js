 page.page1 = function() {
 
 d3.select("#header").append("h1")
        .text("Top 10 Video Game Sales (totals) since 1980");
    
    var margin = {top: 100, right: 100, bottom: 100, left: 100},
    width = window.innerWidth - margin.left - margin.right,
    height = window.innerHeight - margin.top - margin.bottom;
    

    
    var top10 = [{"Name":"Wii Sports", "Sales":82.53},{"Name":"GTA V","Sales":56.57},{"Name":"Super Mario Bros","Sales":45.31},{"Name":"Tetris","Sales":35.84},{"Name":"Mario Kart Wii","Sales":35.52},{"Name":"Wii Sports Resort","Sales":32.77},{"Name":"Pokemon Red and Blue","Sales":31.37},{"Name":"CoD Black Ops","Sales":30.82},{"Name":"CoD MW3", "Sales":30.59},{"Name":"New Super Mario Bros", "Sales":29.8}]
        
    var yScale = d3.scaleLinear().domain([0,100]).range([height,0]);
    var xScale = d3.scaleOrdinal().domain(top10).range([0,width]);

    var heighter = d3.scaleLinear().domain([0,100]).range([0,height]);
    
    var tooltip = d3.select("#tooltip")
    
    d3.select("svg")
        .html("")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .selectAll("rect")
        .data(top10)
        .enter().append("rect")
        .attr("transform", "translate("+margin.left+","+margin.top+")")
        .attr("width", function(d){return width/20;})
        .attr("x", function(d,i){return (width/20)*(i);})
        .attr("height", function(d){return heighter(d.Sales);})
        .attr("y", function(d){return yScale(d.Sales)+10;})
        .on("mouseover", function(d,i){
            tooltip.style("opacity", 1)
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY) + "px")
                .html("Name: "+d.Name+", Sales: "+d.Sales);
        })
        .on("mouseout", function(d,i){
            tooltip.style("opacity",0);
        });


    
    d3.select("svg")
        .append("g").attr("transform", "translate("+margin.left+","+margin.top+")")
        .call(d3.axisLeft(yScale));
    
    

d3.select("#header").append("p")
        .text("While nintendo consoles tend not to be in the front of the pack in terms of total sales, their games are extraordinarily popular. As we can see from the Top 10 titles in regards to sales listed here, most of them (except the CoD games and GTA) were exclusive titles on their platforms. The only game which came close to appraoching Wii Sports' sales record was GTA V which came out on multiple consoles (these numbers do not include PC sales).")
}