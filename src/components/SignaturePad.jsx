import React, { Component } from 'react';
import Button from './common/Button';

class SignaturePad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawing: false,
    };
  }

  componentDidMount() {
    this.canvas = document.getElementById('canvas');
    this.canvas.width = '500';
    this.canvas.height = '250';
    this.ctx = this.canvas.getContext('2d');
    this.disableDrawingMode();
  }

  startDrawing = (event) => {
    if (!this.state.isDrawing) {
      return;
    }

    const canvasX = event.clientX - this.canvasBoundingClientRect.x;
    const canvasY = event.clientY - this.canvasBoundingClientRect.y;
    this.draw(canvasX, canvasY);
  };

  draw(x, y) {
    this.ctx.strokeStyle = '#000';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(this.startX, this.startY);
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
    this.startX = x;
    this.startY = y;
  }

  clearDrawing = () => {
    if (!(this.ctx && this.canvas)) {
      return;
    }
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  enableDrawingMode = (event) => {
    this.canvasBoundingClientRect = this.canvas.getBoundingClientRect();
    this.startX = event.clientX - this.canvasBoundingClientRect.x;
    this.startY = event.clientY - this.canvasBoundingClientRect.y;
    this.ctx.fillStyle = '#000';
    this.ctx.beginPath();
    this.ctx.arc(this.startX, this.startY, 1.4, 0, Math.PI * 2);
    this.ctx.fill();
    this.setState({ isDrawing: true });
  };

  disableDrawingMode = () => {
    this.startX = null;
    this.startY = null;
    this.canvasBoundingClientRect = {};
    this.setState({ isDrawing: false });
  };

  render() {
    return (
      <div className="signaturePad">
        <div className="signaturePad__canvasWrapper">
          <canvas
            id="canvas"
            className="signaturePad__canvas"
            onMouseDown={this.enableDrawingMode}
            onMouseUp={this.disableDrawingMode}
            onMouseLeave={this.disableDrawingMode}
            onMouseMove={this.startDrawing}
          />
        </div>
        <div className="signaturePad__tools">
          <Button onClick={this.clearDrawing} className="signaturePad__clearButton">Clear</Button>
        </div>
      </div>
    );
  }
}

export default SignaturePad;
