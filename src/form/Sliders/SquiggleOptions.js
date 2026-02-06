import React, { Component } from 'react'
import {silver, radius } from '../../Styles'

export default class SquiggleOptions extends Component {
    
    handleThicknessChange = (e) => {
        this.props.changeSquiggleThickness(parseFloat(e.target.value))
    }
    
    handleRainbowChange = () => {
        this.props.changeSquiggleRainbow(!this.props.squiggleRainbow)
    }
    
    render() {
        const containerStyle = {
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginTop: "16px",
            paddingTop: "16px",
            borderTop: "1px solid " + silver
        }
        
        const sectionStyle = {
            display: "flex",
            flexDirection: "column",
            gap: "8px"
        }
        
        const labelRowStyle = {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "12px",
            color: "#555",
            fontWeight: "500"
        }
        
        const sliderStyle = {
            width: "100%",
            marginTop: "4px",
            accentColor: "#333",
            cursor: "pointer"
        }
        
        const toggleRowStyle = {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer"
        }
        
        const toggleStyle = {
            position: "relative",
            width: "40px",
            height: "20px",
            borderRadius: "10px",
            background: this.props.squiggleRainbow ? 
                "linear-gradient(90deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3)" : "#ddd",
            transition: "all 0.3s ease"
        }
        
        const toggleKnobStyle = {
            position: "absolute",
            top: "2px",
            left: this.props.squiggleRainbow ? "22px" : "2px",
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            backgroundColor: "white",
            boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
            transition: "all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)"
        }
        
        return (
            <div style={containerStyle}>
                <div style={sectionStyle}>
                    <div style={labelRowStyle}>
                        <span>Thickness</span>
                        <span style={{color: "#888"}}>{this.props.squiggleThickness}mm</span>
                    </div>
                    <input 
                        type="range" 
                        min="0.1" 
                        max="2" 
                        step="0.1"
                        value={this.props.squiggleThickness || 0.3}
                        onChange={this.handleThicknessChange}
                        style={sliderStyle}
                    />
                </div>
                
                <div style={toggleRowStyle} onClick={this.handleRainbowChange}>
                    <span style={{fontSize: "12px", color: "#555", fontWeight: "500"}}>Rainbow Mode</span>
                    <div style={toggleStyle}>
                        <div style={toggleKnobStyle}/>
                    </div>
                </div>
            </div>
        )
    }
}
