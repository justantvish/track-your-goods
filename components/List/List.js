import { SafeAreaView, StyleSheet, FlatList, View, Text } from 'react-native';
import React from 'react';
import Item from './Item';
import { goods } from '../../util/goods';
import { COLORS } from '../../constants/colors';



const List = () => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                style={styles.list}
                data={goods}
                renderItem={({item}) => <Item item={item}/>}
                ListEmptyComponent={<View><Text>List is empty</Text></View>}
            />
        </SafeAreaView>
    );
};

export default List;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    list: {
        paddingVertical: 24,
        paddingHorizontal: 16,
        width: '100%',
        flex: 1,
    }
});