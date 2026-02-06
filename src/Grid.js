import React, { Component } from 'react'

export default class Grid extends Component{
    constructor(props) {
        super(props)
        this.state = {grid:""}  
    }
	
    componentDidMount(){
        this.drawFourDots(this.props.distance, this.props.unit, this.props.colour)     
    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.type==="fourDots"){
            this.drawFourDots(nextProps.distance, nextProps.unit, nextProps.colour)
        }else if(nextProps.type==="threeDots"){
            this.drawThreeDots(nextProps.distance, nextProps.unit, nextProps.colour)
        }else if(nextProps.type==="triangle"){                 
            this.drawTriangle(nextProps.distance, nextProps.unit, nextProps.colour)
        }else if(nextProps.type==="lines"){
            this.drawLines(nextProps.distance, nextProps.unit, nextProps.colour)
        }else if(nextProps.type==="rectangle"){
            this.drawRectangle(nextProps.distance, nextProps.unit, nextProps.colour)
        }else if(nextProps.type==="hexagon"){
            this.drawHexagon(nextProps.distance, nextProps.unit, nextProps.colour)
        }else if(nextProps.type==="securityConfetti"){
            console.log('Drawing confetti!');
            this.drawSecurityConfetti(nextProps.distance, nextProps.unit, nextProps.colour)
        }else if(nextProps.type==="securitySquiggle"){
            this.drawSecuritySquiggle(nextProps.distance, nextProps.unit, nextProps.colour, nextProps.squiggleRainbow, nextProps.squiggleThickness)
        }else{
            this.drawNotes(nextProps.distance, nextProps.unit, nextProps.colour, nextProps.staffNr)
        }
    }
                 
    drawFourDots(distance, unit, colour){
        this.setState({grid: "data:image/svg+xml;charset=UTF-8," + window.encodeURIComponent("<svg width=\"" + distance + unit + "\" height=\"" + distance + unit + "\" viewPort=\"0 0 5mm 5mm\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"4mm\" cy=\"4mm\" r=\"0.3mm\" fill=\"" + colour + "\"/></svg>")})
    }  
    
    drawThreeDots(distance, unit, colour){ 
		const distanceMM = unit==="mm" ? distance : distance/0.03937
        this.setState({grid: "data:image/svg+xml;charset=UTF-8," + window.encodeURIComponent("<svg width=\"" + distanceMM + "mm\" height=\"" + (distanceMM*1.73) + "mm\" viewPort=\"0 0 5mm 5mm\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"" + ((distanceMM/2)-1) + "mm\" cy=\"" + ((distanceMM*1.73/2) - 1) + "mm\" r=\"0.3mm\" fill=\"" + colour + "\"/> <circle cx=\"" + (distanceMM - 1) + "mm\" cy=\"" + (distanceMM*1.73 - 1) + "mm\" r=\"0.3mm\" fill=\"" + colour + "\"/> </svg>")})
    } 
    
    drawTriangle(distance, unit, colour){
        const distanceY = distance*1.73
        const quaterX = distance/4
        const threeQuatersX = 3*quaterX
        const quaterY = distanceY/4
        const threeQuatersY = 3*quaterY
        this.setState({grid: "data:image/svg+xml;charset=UTF-8," + window.encodeURIComponent("<svg width=\"" + distance + unit + "\" height=\"" + distanceY + unit + "\" viewPort=\"0 0 5mm 5mm\" xmlns=\"http://www.w3.org/2000/svg\"> <line x1=\"" + quaterX + unit + "\" y1=\"" + 0 + unit + "\" x2=\"" + distance + unit + "\" y2=\"" + threeQuatersY + unit + "\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/> <line x1=\"" + threeQuatersX + unit + "\" y1=\"" + 0 + unit + "\" x2=\"" + 0 + unit + "\" y2=\"" + threeQuatersY + unit + "\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/> <line x1=\"" + distance + unit + "\" y1=\"" + quaterY + unit + "\" x2=\"" + 0 + unit + "\" y2=\"" + quaterY + unit + "\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/> <line x1=\"" + distance + unit + "\" y1=\"" + threeQuatersY + unit + "\" x2=\"" + 0 + unit + "\" y2=\"" + threeQuatersY + unit + "\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/> <line x1=\"" + 0 + unit + "\" y1=\"" + threeQuatersY + unit + "\" x2=\"" + quaterX + unit + "\" y2=\"" + distanceY + unit + "\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/> <line x1=\"" + distance + unit + "\" y1=\"" + threeQuatersY + unit + "\" x2=\"" + threeQuatersX + unit + "\" y2=\"" + distanceY + unit + "\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/> </svg>")})
    } 
    
    drawLines(distance, unit, colour){ 
        this.setState({grid: "data:image/svg+xml;charset=UTF-8," +             window.encodeURIComponent("<svg width=\"5mm\" height=\"" + distance + unit +"\" viewPort=\"0 0 5mm 5mm\" xmlns=\"http://www.w3.org/2000/svg\"> <line x1=\"0mm\" y1=\"4mm\" x2=\"5mm\" y2=\"4mm\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/> </svg>")
        })
    } 
    
    drawRectangle(distance, unit, colour){ 
		const distanceMM = unit==="mm" ? distance : distance/0.03937
        const adjustedDistance = distanceMM - 1
        this.setState({grid: "data:image/svg+xml;charset=UTF-8," +             window.encodeURIComponent("<svg width=\"" + distanceMM + "mm\" height=\"" + distanceMM + "mm\" viewPort=\"0 0 5mm 5mm\" xmlns=\"http://www.w3.org/2000/svg\"> <line x1=\"0mm\" y1=\"" + adjustedDistance + "mm\" x2=\"" + distanceMM + "mm\" y2=\"" + adjustedDistance + "mm\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/> <line x1=\"" + adjustedDistance + "mm\" y1=\"0mm\" x2=\"" + adjustedDistance + "mm\" y2=\"" +distanceMM + "mm\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/> </svg>")
        })
    }
    
    drawHexagon(distance, unit, colour){
        const distanceY = distance*1.73
        const quaterX = distance/4
        const threeQuatersX = 3*quaterX
        const halfY = distanceY/2
        const thirdY = distanceY/3
        const fiveSixthY = distanceY*5/6
        const fiveTwelfthY = distanceY*5/12
        const elevenTweflthY = distanceY*11/12 
        this.setState({grid: "data:image/svg+xml;charset=UTF-8," + window.encodeURIComponent("<svg width=\"" + distance + unit + "\" height=\"" + distanceY + unit + "\" viewPort=\"0 0 5mm 5mm\" xmlns=\"http://www.w3.org/2000/svg\"> <line x1=\"" + quaterX + unit + "\" y1=\"" + 0 + unit + "\" x2=\"" + quaterX + unit + "\" y2=\"" + thirdY + unit + "\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/> <line x1=\"" + quaterX + unit + "\" y1=\"" + thirdY + unit + "\" x2=\"" + 0 + unit + "\" y2=\"" + fiveTwelfthY + unit + "\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/> <line x1=\"" + quaterX + unit + "\" y1=\"" + thirdY + unit + "\" x2=\"" + threeQuatersX + unit + "\" y2=\"" + halfY + unit + "\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/> <line x1=\"" + threeQuatersX + unit + "\" y1=\"" + halfY + unit + "\" x2=\"" + distance + unit + "\" y2=\"" + fiveTwelfthY + unit + "\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/> <line x1=\"" + threeQuatersX + unit + "\" y1=\"" + halfY + unit + "\" x2=\"" + threeQuatersX + unit + "\" y2=\"" + fiveSixthY + unit + "\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/> <line x1=\"" + threeQuatersX + unit + "\" y1=\"" + fiveSixthY + unit + "\" x2=\"" + quaterX + unit + "\" y2=\"" + distanceY + unit + "\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/> <line x1=\"" + quaterX + unit + "\" y1=\"" + distanceY + unit + "\" x2=\"" + 0 + unit + "\" y2=\"" + elevenTweflthY + unit + "\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/> <line x1=\"" + threeQuatersX + unit + "\" y1=\"" + fiveSixthY + unit + "\" x2=\"" + distance + unit + "\" y2=\"" + elevenTweflthY + unit + "\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/> </svg>")})
    } 

    drawSecurityConfetti(distance, unit, colour) {
        var distanceMM = unit === "mm" ? distance : distance / 0.03937
        var tileSize = distanceMM * 4
        var shapes = ""
        var numShapes = 12
        
        var seed = 12345
        var rand = function() {
            seed = (1664525 * seed + 1013904223) % 4294967296
            return seed / 4294967296
        }

        for (var i = 0; i < numShapes; i++) {
            var margin = 3
            var x = margin + rand() * (tileSize - margin * 2)
            var y = margin + rand() * (tileSize - margin * 2)
            var r = (rand() * 1.5 + 0.8)
            var type = Math.floor(rand() * 3)
            
            if (type === 0) {
                shapes += "<circle cx=\"" + x + "\" cy=\"" + y + "\" r=\"" + r + "\" fill=\"" + colour + "\"/>"
            } else if (type === 1) {
                shapes += "<rect x=\"" + x + "\" y=\"" + y + "\" width=\"" + (r*2) + "\" height=\"" + (r*2) + "\" fill=\"" + colour + "\"/>"
            } else {
                shapes += "<polygon points=\"" + x + "," + y + " " + (x+r) + "," + (y+r*2) + " " + (x-r) + "," + (y+r*2) + "\" fill=\"" + colour + "\"/>"
            }
        }

        this.setState({grid: "data:image/svg+xml;charset=UTF-8," + window.encodeURIComponent("<svg width=\"" + tileSize + "mm\" height=\"" + tileSize + "mm\" viewBox=\"0 0 " + tileSize + " " + tileSize + "\" xmlns=\"http://www.w3.org/2000/svg\">" + shapes + "</svg>")})
    }

    drawSecuritySquiggle(distance, unit, colour, rainbow, thickness) {
        var d = unit === "mm" ? distance : distance / 0.03937
        var strokeWidth = thickness || 0.3
        var rainbowColors = ["#FF6B6B", "#FECA57", "#48DBFB", "#FF9FF3", "#54A0FF", "#5F27CD"]
        
        // Match dimensions to ActualPage.js
        // Vertical spacing = d
        // Wavelength = 2*d
        // Tile height needs to be 6*d to fit full rainbow cycle
        var rows = 6
        var width = 2 * d
        var height = 6 * d
        
        var paths = ""
        
        for (var i = 0; i < rows; i++) {
            var y = (i + 0.5) * d // Center of the row
            var amplitude = d / 4
            
            // Use hex colors for rainbow
            var lineColour = rainbow ? rainbowColors[i % rainbowColors.length] : colour
            
            // Create bezier curve path for one wavelength (2*d)
            // Start at x=0
            // First curve (Up hump): Q cp1=(d/2, y-amp) end=(d, y)
            // Second curve (Down hump): Q cp2=(3d/2, y+amp) end=(2d, y)
            
            var pathData = "M 0 " + y
            pathData += " Q " + (d/2) + " " + (y - amplitude) + " " + d + " " + y
            pathData += " Q " + (d * 1.5) + " " + (y + amplitude) + " " + (2 * d) + " " + y
            
            paths += "<path d=\"" + pathData + "\" stroke=\"" + lineColour + "\" stroke-width=\"" + strokeWidth + "\" fill=\"none\"/>"
        }
        
        var svgContent = "<svg width=\"" + width + "mm\" height=\"" + height + "mm\" viewBox=\"0 0 " + width + " " + height + "\" xmlns=\"http://www.w3.org/2000/svg\">" + paths + "</svg>"
        this.setState({grid: "data:image/svg+xml;charset=UTF-8," + window.encodeURIComponent(svgContent)})
    } 
        
    drawNotes(distance, unit, colour, staffNr){
        const lineHeight = 1.6
        const distanceY = unit==="mm" ? distance + 15 * staffNr - 8.5 : distance/0.03937 + 15 * staffNr - 8.5
        const line1 = 1 * lineHeight
        const line2 = 2 * lineHeight
        const line3 = 3 * lineHeight
        const line4 = 4 * lineHeight
        const line5 = 5 * lineHeight
        const innerWidth = window.innerWidth
        var grid = ""
        for (let i = 0; i < staffNr; i++){
          const line11 = i * 15  + line1
          const line12 = i * 15  + line2
          const line13 = i * 15  + line3
          const line14 = i * 15  + line4
          const line15 = i * 15  + line5
          grid += "<line x1=\"0mm\" y1=\"" + line11 + "mm\" x2=\"" + innerWidth + "\" y2=\"" + line11 + "mm\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/> <line x1=\"0mm\" y1=\"" + line12 + "mm\" x2=\"" + innerWidth + "\" y2=\"" + line12 + "mm\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/> <line x1=\"0mm\" y1=\"" + line13 + "mm\" x2=\"" + innerWidth + "\" y2=\"" + line13 + "mm\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/> <line x1=\"0mm\" y1=\"" + line14 + "mm\" x2=\"" + innerWidth + "\" y2=\"" + line14 + "mm\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/> <line x1=\"0mm\" y1=\"" + line15 + "mm\" x2=\"" + innerWidth + "\" y2=\"" + line15 + "mm\" stroke-width=\"0.3mm\" stroke=\"" + colour + "\"/>"
        }
        
        this.setState({grid: "data:image/svg+xml;charset=UTF-8," + window.encodeURIComponent("<svg width=\"" + innerWidth + "\" height=\"" + distanceY + "mm\" viewPort=\"0 0 5mm 10mm\" xmlns=\"http://www.w3.org/2000/svg\">" + grid + "</svg>")
        })
    }
     
	
 
  render() {
    const sx = {width: "100%",
                height: this.props.height,
                position: "absolute",
                top: -10,
                left: 0,
                backgroundImage: 'url('+ this.state.grid +')',
                backgroundPosition: "2px 2px",}

    return (
	 	<div style={sx}>
			<svg width={this.props.width} height={this.props.height}>
			</svg>
		</div>
	)
  }
}
