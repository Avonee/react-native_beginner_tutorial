
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableHighlight,
    Image
} from 'react-native';

// TODO: need real datas, just for test now
var FAKE_DATA = [
    {
        notice: '恭喜您！達成環島100次',
        date: '2018/08/01 14:00',
    },
    {
        notice: '您的會員身份認證，已審核通過！',
        date: '2018/08/02 12:00',
    },
    {
        notice: '撥款通知：本公司已將款項$123456撥入您的指定銀行帳戶．',
        date: '2018/08/05 12:30',
    },
    {
        notice: '恭喜您！短短1小時內，完成慢跑10公里',
        date: '2018/08/10 14:00',
    },
    {
        notice: '請款作業通知：提醒您，請至「請款作業」進行請款作業，以利撥款作業．',
        date: '2018/08/12 14:00',
    },
    {
        notice: '恭喜您！泳渡日月潭成功！',
        date: '2018/08/13 14:00',
    },
    {
        notice: '提醒您，橫跨太平洋的泳渡日期將在三天後開始！請提早做好防曬禦寒準備！',
        date: '2018/08/13 17:00',
    },
    {
        notice: '溫馨小叮嚀，運動過後也不要忘了要收操喔！',
        date: '2018/08/14 11:00',
    },
    {
        notice: '恭喜您！來領取健身房貼身教練優惠券1小時免費體驗！',
        date: '2018/08/16 18:00',
    },
    {
        notice: '你真的太棒了！目前完成三鐵運動項目！期待下次三鐵世界盃見！',
        date: '2018/08/17 15:00',
    }
]

export default class HomeMainScreen extends Component {

    state = {
        dataSource: new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        })
    }

    componentDidMount() {
        var books = FAKE_DATA
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(books)
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
        )
    }

    renderBook = (cases) => {
        return (
            <TouchableHighlight onPress={() => this.showNoticeDetail(cases)}>
                <View>
                    <View style={styles.MainView}>
                        <Image
                            source={{ uri: 'https://pic.pimg.tw/cc1895/1431185098-1614666523.jpg' }}
                            style={styles.thumbnail} />
                        <View style={{ flex: 1 }}>
                            <Text ellipsizeMode='tail' numberOfLines={3} style={{ color: 'black', fontSize: 15, marginTop: 8 }}>{cases.notice}</Text>
                            <Text ellipsizeMode='tail' numberOfLines={3} style={{ marginTop: 8, fontSize: 13, marginBottom: 8 }}>{cases.date}</Text>
                        </View>
                        <Image style={styles.image} source={require('../img/ic_arrow_right.png')} />
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


