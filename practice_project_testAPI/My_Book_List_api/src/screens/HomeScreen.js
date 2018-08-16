
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    ListView,
    Image
} from 'react-native';

export default class HomeScreen extends Component {

    state = {
        dataSource: new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        })
    }

    componentDidMount() {
        // 串接API
        this.fetchData();
    }

    fetchData() {
        const REQUEST_URL = 'https://www.googleapis.com/books/v1/volumes?q=subject:fiction'
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.items)
                });
            })
            .catch((err) => {
                console.log('error')
            })

    }

    render() {
        return (
            <View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={arg => this.renderBook(arg)}
                    style={styles.listView}
                />
            </View>
        );
    }

    renderBook = (cases) => {
        return (
            <TouchableHighlight onPress={() => this.showNoticeDetail(cases)}>
                <View>
                    <View style={{ height: 80, alignItems: 'center' }}>
                        <View style={styles.MainView}>
                            <Image
                                // source={{ uri: 'https://pic.pimg.tw/cc1895/1431185098-1614666523.jpg' }}
                                source={{ uri: cases.volumeInfo.imageLinks.thumbnail }}
                                style={styles.thumbnail} />
                            <View style={{ flex: 1 }}>
                                <Text ellipsizeMode='tail' numberOfLines={3} style={{ color: 'black', fontSize: 15, marginTop: 8 }}>{cases.volumeInfo.title}</Text>
                                <Text ellipsizeMode='tail' numberOfLines={3} style={{ marginTop: 8, fontSize: 13, marginBottom: 8 }}>{cases.volumeInfo.authors}</Text>
                            </View>
                            <Image style={styles.image} source={require('../img/ic_arrow_right.png')} />
                        </View>
                    </View>
                    <View style={styles.separator} />
                </View>
            </TouchableHighlight>
        )
    }

    showNoticeDetail(cases) {
        this.props.navigation.navigate('HomeDetail', {
            passProps: cases,
        })
    }
}


const styles = StyleSheet.create({
    MainView: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 8
    },
    listView: {
        backgroundColor: 'white'
    },
    image: {
        width: 20,
        height: 40
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd'
    },
    thumbnail: {
        width: 50,
        height: 60,
        marginRight: 10,
    },
});
