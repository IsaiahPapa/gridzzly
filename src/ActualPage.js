import React, { Component } from 'react'


export default class ActualPage extends Component{
    constructor(props) {
        super(props)
        this.state = {	grid:"",
					 	width:"190",
					    height:"276"}  
        
    }
          
    componentDidMount(){
        this.determineGridType(this.props)
    }
    
    componentWillReceiveProps(nextProps) {
        this.determineGridType(nextProps)
    } 
    
    componentDidUpdate(){
        window.print()
    } 
    
  determineGridType(nextProps){
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
		this.drawSecurityConfetti(nextProps.distance, nextProps.unit, nextProps.colour)
	}else if(nextProps.type==="securitySquiggle"){
		this.drawSecuritySquiggle(nextProps.distance, nextProps.unit, nextProps.colour, nextProps.squiggleRainbow, nextProps.squiggleThickness)
	}else{
		this.drawNotes(nextProps.distance, nextProps.unit, nextProps.colour, nextProps.staffNr)
	}   
  }
   
  drawFourDots(distance, unit, colour){
	var grid =[]
	const distanceMM = unit==="mm" ? distance : distance/0.03937
	const width = unit==="mm" ? 190: 195.9
	const height = unit==="mm" ? 276: 259
	const columns = width/distanceMM
	const rows = height/distanceMM
	var key = 0
	for (let y = 0; y < rows; y++){
		for (let i = 0; i < columns; i++){
			grid.push(
			  <circle key={key} cx={i * distanceMM + "mm"} cy={ y * distanceMM + "mm"} r="0.3mm" fill={colour}/>
			)
			key += 1
		}
	}
	this.setState({	grid: grid,
					width: width,
					height: height})
  }
                      
  drawThreeDots(distance, unit, colour){
	var grid =[]
	const distanceMM = unit==="mm" ? distance : distance/0.03937
	const width = unit==="mm" ? 190: 195.9
	const height = unit==="mm" ? 276: 259
	const verticalDistance = distanceMM/1.118
	const columns = width/distanceMM 
	const rows = height/verticalDistance
	var odd = true
	var key = 0
	for (let y = 0; y < rows; y++){
		for (let i = 0; i < columns; i++){      
			grid.push(
			  odd ? <circle key={key} cx={(i * distanceMM) + (distanceMM/2) + "mm"} cy={y * verticalDistance + "mm"} r="0.3mm" fill={colour}/> : <circle key={key} cx={(i * distanceMM) + "mm"} cy={y * verticalDistance + "mm"} r="0.3mm" fill={colour}/>
			)
			key +=1
		}
		if (odd){
			odd=false
		}else{
			odd=true
		}
	}
	this.setState({	grid: grid,
					width: width,
					height: height})
  }
                      
  drawTriangle(distance, unit, colour){
    var grid =[]
	const width = unit==="mm" ? 190 : 195.9
	const height = unit==="mm" ? 276 : 259.4
	const distanceMM = unit==="mm" ? distance : distance/0.03937
	const halfDistance = distanceMM/2
	const halfVertical = distanceMM/1.118
	const verticalDistance = halfVertical*2 
	const rows = Math.round(height/verticalDistance)-1
	const columns = Math.round(width/distanceMM)-1
	const shortHeight = (rows)*verticalDistance
	const shortWidth = (columns)*distanceMM
	var key = 0
	for (let i = 0; i < rows; i++){
		for (let y = 0; y < columns; y++){
			grid.push(
				<g key={key}>
	             	<line x1={halfDistance + y*distanceMM + "mm"} y1={i * verticalDistance + "mm"} x2={y*distanceMM + "mm"} y2={halfVertical + i * verticalDistance + "mm"} strokeWidth="0.1mm" stroke={colour}/>
					<line x1={halfDistance + y*distanceMM + "mm"} y1={i * verticalDistance + "mm"} x2={distanceMM + y*distanceMM + "mm"} y2={halfVertical + i * verticalDistance + "mm"} strokeWidth="0.1mm" stroke={colour}/>
					<line x1={y*distanceMM + "mm"} y1={halfVertical + i * verticalDistance + "mm"} x2={distanceMM + y*distanceMM + "mm"} y2={halfVertical + i * verticalDistance + "mm"} strokeWidth="0.1mm" stroke={colour}/>
					<line x1={halfDistance + y*distanceMM + "mm"} y1={verticalDistance + i * verticalDistance + "mm"} x2={y*distanceMM + "mm"} y2={halfVertical + i * verticalDistance + "mm"} strokeWidth="0.1mm" stroke={colour}/>
					<line x1={halfDistance + y*distanceMM + "mm"} y1={verticalDistance + i * verticalDistance + "mm"} x2={distanceMM + y*distanceMM + "mm"} y2={halfVertical + i * verticalDistance + "mm"} strokeWidth="0.1mm" stroke={colour}/>
					<line x1={(y===0 ? halfDistance + y*distanceMM : y*distanceMM) + "mm"} y1={verticalDistance + i * verticalDistance + "mm"} x2={(y===columns-1 ? halfDistance + y*distanceMM  : distanceMM + y*distanceMM) + "mm"} y2={verticalDistance + i * verticalDistance + "mm"} strokeWidth="0.1mm" stroke={colour}/>
				</g>
            )
			key += 1		
		}
	}
	grid.push(<line key={key++} x1={halfDistance + "mm"} y1={0 + "mm"} x2={columns*distanceMM-halfDistance + "mm"} y2={0 + "mm"} strokeWidth="0.1mm" stroke={colour}/>)
	
	this.setState({	grid: grid,
					width: shortWidth,
					height: shortHeight})
  }
                      
  drawLines(distance, unit, colour){
    var grid =[]
	const width = unit==="mm" ? 190 : 195.9
	const height = unit==="mm" ? 276 : 259.4
    const distanceMM = unit==="mm" ? distance : distance/0.03937
	const rows = unit==="mm" ? 277/distanceMM : 259.4/distanceMM
    var key = 0
        for (let i = 0; i < rows; i++){             
            grid.push(
              <line key={key} x1="0mm" y1={(i * distanceMM) + "mm"} x2={width + "mm"} y2={(i * distanceMM) + "mm"} strokeWidth="0.1mm" stroke={colour}/>
            )
            key += 1
        }
	this.setState({	grid: grid,
					width: width,
					height: height})
  }

  drawSecurityConfetti(distance, unit, colour) {
        var grid = []
        const width = unit==="mm" ? 190 : 195.9
        const height = unit==="mm" ? 276 : 259.4
        const distanceMM = unit==="mm" ? distance : distance/0.03937
        
        // Calculate shapes to cover the full page
        const tileSize = distanceMM * 4
        const tilesX = Math.ceil(width / tileSize)
        const tilesY = Math.ceil(height / tileSize)
        const shapesPerTile = 12
        
        let seed = 12345
        const rand = () => {
            seed = (1664525 * seed + 1013904223) % 4294967296
            return seed / 4294967296
        }
        
        let key = 0
        for (let ty = 0; ty < tilesY; ty++) {
            for (let tx = 0; tx < tilesX; tx++) {
                const offsetX = tx * tileSize
                const offsetY = ty * tileSize
                
                // Reset seed for each tile to create repeating pattern
                seed = 12345
                
                for (let i = 0; i < shapesPerTile; i++) {
                    const margin = 1
                    const localX = margin + rand() * (tileSize - margin * 2)
                    const localY = margin + rand() * (tileSize - margin * 2)
                    const x = offsetX + localX
                    const y = offsetY + localY
                    const r = (rand() * 1.5 + 0.8)
                    const type = Math.floor(rand() * 3)
                    
                    if (type === 0) {
                        grid.push(<circle key={key} cx={x + "mm"} cy={y + "mm"} r={r + "mm"} fill={colour}/>)
                    } else if (type === 1) {
                        grid.push(<rect key={key} x={x + "mm"} y={y + "mm"} width={r*2 + "mm"} height={r*2 + "mm"} fill={colour}/>)
                    } else {
                        grid.push(<polygon key={key} points={`${x}mm,${y}mm ${x+r}mm,${y+r*2}mm ${x-r}mm,${y+r*2}mm`} fill={colour}/>)
                    }
                    key++
                }
            }
        }

        this.setState({ grid: grid,
                        width: width,
                        height: height})
    }

  drawSecuritySquiggle(distance, unit, colour, rainbow, thickness) {
    var grid = []
    // Use same dimensions as other patterns
    const width = unit==="mm" ? 190 : 195.9
    const height = unit==="mm" ? 276 : 259
    const distanceMM = unit==="mm" ? distance : distance/0.03937
    const strokeWidth = (thickness || 0.3) + "mm"
    
    // Rows logic - add extra row to ensure full coverage
    const rowHeight = distanceMM
    const rows = Math.ceil(height / rowHeight) + 1
    const rainbowColors = ["#FF6B6B", "#FECA57", "#48DBFB", "#FF9FF3", "#54A0FF", "#5F27CD"]
    
    for (let i = 0; i < rows; i++) {
        // Create sine wave using line segments with mm units
        const cy = i * distanceMM + distanceMM/2 // Center Y of the row
        const step = distanceMM/8 // small step for smooth curve
        const amplitude = distanceMM/4
        
        // Use hex colors for rainbow
        const lineColour = rainbow ? rainbowColors[i % rainbowColors.length] : colour
        
        // Build array of line segments
        let prevX = 0
        let prevY = cy + Math.sin(0) * amplitude
        
        for (let x = step; x <= width + 5; x += step) {
            const angle = (x / (distanceMM * 2)) * Math.PI * 2
            const y = cy + Math.sin(angle) * amplitude
            
            grid.push(
                <line 
                    key={i + "_" + x} 
                    x1={prevX + "mm"} 
                    y1={prevY + "mm"} 
                    x2={x + "mm"} 
                    y2={y + "mm"} 
                    stroke={lineColour} 
                    strokeWidth={strokeWidth}
                />
            )
            prevX = x
            prevY = y
        }
    }
    
    this.setState({ grid: grid,
                    width: width,
                    height: height})
  }
  drawRectangle(distance, unit, colour){
        var grid =[]
		const width = unit==="mm" ? 190 : 195.9
		const height = unit==="mm" ? 277 : 259.4
        const distanceMM = unit==="mm" ? distance : distance/0.03937
		const rows = Math.round(height/distanceMM)
		const columns = Math.round(width/distanceMM)
		const shortHeight = (rows-1)*distanceMM
		const shortWidth = (columns-1)*distanceMM
    var key = 0
    var key2 = rows
        for (let i = 0; i < rows; i++){             
            grid.push(
              <line key={key} x1="0mm" y1={(i * distanceMM) + "mm"} x2={shortWidth + "mm"} y2={(i * distanceMM) + "mm"} strokeWidth="0.1mm" stroke={colour}/>
            )
            key += 1        
        }
	  	for (let i = 0; i < columns; i++){             
            grid.push(
              <line key={key2} x1={(i * distanceMM) + "mm"} y1="0mm" x2={(i * distanceMM) + "mm"} y2={shortHeight + "mm"} strokeWidth="0.1mm" stroke={colour}/>
            )
        key2 += 1
        }
        this.setState({	grid: grid,
					  	width: shortWidth,
					  	height:shortHeight})
  }
                      
  drawHexagon(distance, unit, colour){
    var grid =[]
    const distanceMM = unit==="mm" ? distance : distance/0.03937
		const width = unit==="mm" ? 190 : 195.9
		const height = unit==="mm" ? 276 : 259.4
    const distanceY = distanceMM*1.73
    const twothirdsY = distanceY*2/3
    const sevensixthY = distanceY*7/6
		const halfY = distanceY/2
    const halfX = distanceMM/2
    const sixthY = distanceY/6
		const rows = Math.round(height/distanceY-1)
		const columns = Math.round(width/distanceMM)
    const lastColumn = columns-1
    const lastRow = rows-1
    var key = 0
        for (let y = 0; y < rows; y++){
            for (let i = 0; i < columns; i++){
                if (i!==lastColumn && y===0){
                    grid.push(
                      <g key={key}>
                        <line x1={halfX + i*distanceMM + "mm"} y1={y * distanceY + "mm"} x2={i*distanceMM + "mm"} y2={sixthY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={halfX + i*distanceMM + "mm"} y1={y * distanceY + "mm"} x2={distanceMM + i*distanceMM + "mm"} y2={sixthY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={i*distanceMM + "mm"} y1={sixthY + y * distanceY + "mm"} x2={i*distanceMM + "mm"} y2={halfY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={i*distanceMM + "mm"} y1={halfY + y * distanceY + "mm"} x2={halfX + i*distanceMM + "mm"} y2={twothirdsY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={distanceMM + i*distanceMM + "mm"} y1={halfY + y * distanceY + "mm"} x2={halfX + i*distanceMM + "mm"} y2={twothirdsY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={halfX + i*distanceMM + "mm"} y1={distanceY + y * distanceY + "mm"} x2={halfX + i*distanceMM + "mm"} y2={twothirdsY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={halfX + i*distanceMM + "mm"} y1={distanceY + y * distanceY + "mm"} x2={i*distanceMM + "mm"} y2={sevensixthY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={halfX + i*distanceMM + "mm"} y1={distanceY + y * distanceY + "mm"} x2={distanceMM + i*distanceMM + "mm"} y2={sevensixthY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                      </g>
                    )
                }else if (i===lastColumn && y===0){
                    grid.push(
                      <g key={key}>
                        <line x1={halfX + i*distanceMM + "mm"} y1={y * distanceY + "mm"} x2={i*distanceMM + "mm"} y2={sixthY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={halfX + i*distanceMM + "mm"} y1={y * distanceY + "mm"} x2={distanceMM + i*distanceMM + "mm"} y2={sixthY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={i*distanceMM + "mm"} y1={sixthY + y * distanceY + "mm"} x2={i*distanceMM + "mm"} y2={halfY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={distanceMM + i*distanceMM + "mm"} y1={sixthY + y * distanceY + "mm"} x2={distanceMM + i*distanceMM + "mm"} y2={halfY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={i*distanceMM + "mm"} y1={halfY + y * distanceY + "mm"} x2={halfX + i*distanceMM + "mm"} y2={twothirdsY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={distanceMM + i*distanceMM + "mm"} y1={halfY + y * distanceY + "mm"} x2={halfX + i*distanceMM + "mm"} y2={twothirdsY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={halfX + i*distanceMM + "mm"} y1={distanceY + y * distanceY + "mm"} x2={halfX + i*distanceMM + "mm"} y2={twothirdsY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={halfX + i*distanceMM + "mm"} y1={distanceY + y * distanceY + "mm"} x2={i*distanceMM + "mm"} y2={sevensixthY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={halfX + i*distanceMM + "mm"} y1={distanceY + y * distanceY + "mm"} x2={distanceMM + i*distanceMM + "mm"} y2={sevensixthY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                      </g>
                    )
                }else if (i===lastColumn && y!==0 && y!==lastRow){
                    grid.push(
                      <g key={key}>
                        <line x1={i*distanceMM + "mm"} y1={sixthY + y * distanceY + "mm"} x2={i*distanceMM + "mm"} y2={halfY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={distanceMM + i*distanceMM + "mm"} y1={sixthY + y * distanceY + "mm"} x2={distanceMM + i*distanceMM + "mm"} y2={halfY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={i*distanceMM + "mm"} y1={halfY + y * distanceY + "mm"} x2={halfX + i*distanceMM + "mm"} y2={twothirdsY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={distanceMM + i*distanceMM + "mm"} y1={halfY + y * distanceY + "mm"} x2={halfX + i*distanceMM + "mm"} y2={twothirdsY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={halfX + i*distanceMM + "mm"} y1={distanceY + y * distanceY + "mm"} x2={halfX + i*distanceMM + "mm"} y2={twothirdsY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={halfX + i*distanceMM + "mm"} y1={distanceY + y * distanceY + "mm"} x2={i*distanceMM + "mm"} y2={sevensixthY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={halfX + i*distanceMM + "mm"} y1={distanceY + y * distanceY + "mm"} x2={distanceMM + i*distanceMM + "mm"} y2={sevensixthY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                      </g>
                    )
                }else if (y===lastRow && i===lastColumn){
                      grid.push(
                        <g key={key}>
                        <line x1={i*distanceMM + "mm"} y1={sixthY + y * distanceY + "mm"} x2={i*distanceMM + "mm"} y2={halfY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={distanceMM + i*distanceMM + "mm"} y1={sixthY + y * distanceY + "mm"} x2={distanceMM + i*distanceMM + "mm"} y2={halfY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={i*distanceMM + "mm"} y1={halfY + y * distanceY + "mm"} x2={halfX + i*distanceMM + "mm"} y2={twothirdsY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={distanceMM + i*distanceMM + "mm"} y1={halfY + y * distanceY + "mm"} x2={halfX + i*distanceMM + "mm"} y2={twothirdsY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={halfX + i*distanceMM + "mm"} y1={distanceY + y * distanceY + "mm"} x2={halfX + i*distanceMM + "mm"} y2={twothirdsY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>        
                        <line x1={halfX + i*distanceMM + "mm"} y1={distanceY + y * distanceY + "mm"} x2={i*distanceMM + "mm"} y2={sevensixthY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                      </g>
                    )
                }else if (y===lastRow && i===0){
                      grid.push(
                        <g key={key}>
                        <line x1={i*distanceMM + "mm"} y1={sixthY + y * distanceY + "mm"} x2={i*distanceMM + "mm"} y2={halfY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={distanceMM + i*distanceMM + "mm"} y1={sixthY + y * distanceY + "mm"} x2={distanceMM + i*distanceMM + "mm"} y2={halfY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={i*distanceMM + "mm"} y1={halfY + y * distanceY + "mm"} x2={halfX + i*distanceMM + "mm"} y2={twothirdsY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={distanceMM + i*distanceMM + "mm"} y1={halfY + y * distanceY + "mm"} x2={halfX + i*distanceMM + "mm"} y2={twothirdsY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={halfX + i*distanceMM + "mm"} y1={distanceY + y * distanceY + "mm"} x2={halfX + i*distanceMM + "mm"} y2={twothirdsY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>  
    
                        <line x1={halfX + i*distanceMM + "mm"} y1={distanceY + y * distanceY + "mm"} x2={distanceMM + i*distanceMM + "mm"} y2={sevensixthY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                      </g>
                    )
                }else{
                    grid.push(
                      <g key={key}>
                        <line x1={i*distanceMM + "mm"} y1={sixthY + y * distanceY + "mm"} x2={i*distanceMM + "mm"} y2={halfY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={i*distanceMM + "mm"} y1={halfY + y * distanceY + "mm"} x2={halfX + i*distanceMM + "mm"} y2={twothirdsY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={distanceMM + i*distanceMM + "mm"} y1={halfY + y * distanceY + "mm"} x2={halfX + i*distanceMM + "mm"} y2={twothirdsY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={halfX + i*distanceMM + "mm"} y1={distanceY + y * distanceY + "mm"} x2={halfX + i*distanceMM + "mm"} y2={twothirdsY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={halfX + i*distanceMM + "mm"} y1={distanceY + y * distanceY + "mm"} x2={i*distanceMM + "mm"} y2={sevensixthY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                        <line x1={halfX + i*distanceMM + "mm"} y1={distanceY + y * distanceY + "mm"} x2={distanceMM + i*distanceMM + "mm"} y2={sevensixthY + y * distanceY + "mm"} strokeWidth="0.1mm" stroke={colour}/>
                      </g>
                    )
                }
                key += 1
            
            }
        }
        this.setState({grid: grid,
					  width: width,
					  height: height})
  }
                      
  drawNotes(distance, unit, colour, staffNr){
	var grid = []
	const width = unit==="mm" ? 190 : 195.9
	const height = unit==="mm" ? 276 : 259.4
	const distanceMM = unit==="mm" ? distance + 15 * staffNr  : distance/0.03937 + 17 * staffNr
	const rows = unit==="mm" ? 277/distanceMM : 259.4/distanceMM
	var key = 0
    for (let z = 0; z < rows; z++){
      for (let i = 0; i < staffNr; i++){
          for (let y = 0; y < 5; y++){   
            grid.push(
              <line key={key} x1="0mm" y1={z * distanceMM + i * 15 + y*1.6 + "mm"} x2={width + "mm"} y2={z * distanceMM + i * 15 + y*1.6 + "mm"} strokeWidth="0.1mm" stroke={colour}/>
            )
            key += 1
          }
      }
    }
    

	this.setState({	grid: grid,
				width: width,
				height: height})
  }

            
  render() {
    return (
        
        <div>
            <svg width={this.state.width + "mm"} height={this.state.height + "mm"}  xmlns="http://www.w3.org/2000/svg">
                {this.state.grid}
            </svg>
        </div>
	   )
  }
}
