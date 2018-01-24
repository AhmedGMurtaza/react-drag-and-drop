import React from 'react';

class Mouse extends React.Component {
    state = {
        x: 0,
        y: 0
    }

    handleMovement = (event) => {
        this.setState({
            x: event.clientX,
            y: event.clientY
        })
    }

    render() {
        return (
            <div style={{ height: '100%', width: '100%' }} onMouseMove={this.handleMovement}>
                {this.props.show(this.state)}
            </div>
        );
    }
}

export default Mouse;