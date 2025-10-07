import { StyleSheet, FlatList, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import Item from './Item';
import { goods } from '../../utils/goods';
import { COLORS } from '../../constants/colors';

const List = () => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                style={styles.list}
                data={goods}
                renderItem={({ item }) => <Item item={item} />}
                ListEmptyComponent={
                    <View>
                        <Text>List is empty</Text>
                    </View>
                }
            />
        </SafeAreaView>
    );
};

export default List;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    list: {
        paddingVertical: 24,
        paddingHorizontal: 16,
        width: '100%',
        flex: 1,
        backgroundColor: COLORS.bgAlt,
    },
});
