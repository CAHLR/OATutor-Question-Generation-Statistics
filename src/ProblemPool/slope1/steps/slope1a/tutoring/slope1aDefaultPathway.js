var hints = [{id: "slope1a-h1", type: "hint", dependencies: [], title: "Slope", text: "To find the slope of the line, we need to choose two points on the line. We’ll use the points (0,1) and (1,3).", variabilization: {}}, {id: "slope1a-h2", type: "hint", dependencies: ["slope1a-h1"], title: "Slope", text: "Find the rise and run using the formula $$m=\\frac{rise}{run}$$.", variabilization: {}}, {id: "slope1a-h3", type: "hint", dependencies: ["slope1a-h2"], title: "Slope", text: "From those two points, there is a rise of 2 units and a run of 1 unit; therefore $$m=\\frac{2}{1}=2$$.", variabilization: {}}, {id: "slope1a-h4", type: "hint", dependencies: ["slope1a-h3"], title: "y-intercept", text: "Find the y-intercept of the line.", variabilization: {}}, {id: "slope1a-h5", type: "hint", dependencies: ["slope1a-h4"], title: "y-intercept", text: "When $$x=0$$, $$y=1$$. Therefore, the y-intercept is the point (0,1).", variabilization: {}}, {id: "slope1a-h6", type: "hint", dependencies: ["slope1a-h5"], title: "Slope and y-intercept", text: "The slope is $$m=2$$ and the y-intercept is (0,1).", variabilization: {}}, ]; export {hints};