
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    TouchableOpacity,
    Text,
} from 'react-native';

export default class MyButton extends Component {
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={{
                    backgroundColor: this.props.backgroundColor,
                    borderRadius: this.props.borderRadius,
                }}
            >
                <Text style={{ color: this.props.color }}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

MyButton.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    borderRadius: PropTypes.number,
    onPress: PropTypes.func,
};

MyButton.defaultProps = {
    color: 'white',
    backgroundColor: 'black',
    onPress: null,
    borderRadius: 5,
};
