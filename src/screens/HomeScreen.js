import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import useGetSchools from '../hooks/useGetSchools';
import useGetScores from '../hooks/useGetScores';

const HomeScreen = ({ navigation }) => {
    // Retrieve school list from hook
    const [getSchools, schoolList] = useGetSchools();
    const [getScores, score] = useGetScores();
    const [school, setSchool] = useState();

    // Sort list of schools
    schoolList.sort((a,b) => a.school_name.localeCompare(b.school_name))

    // Use hook to render screen once
    useEffect(() => {
        getSchools();
        getScores();
    }, [schoolList]);

    // Function to navigate to school detail screen with scores IF 
    const goSchoolInfo = (schoolInfo, school_dbn,) => {
        let school = score.find(({dbn}) => dbn === school_dbn);

        // Check for scores, pass empty data if no scores exists
        if ( school === undefined) {
            console.log("School has no SAT score results.")
            setSchool('');
            navigation.navigate(
                'SchoolScores', { 
                    id: schoolInfo, 
                    scores: null
                })
        } else {
            setSchool(school);
            console.log("School has SAT data.")
            navigation.navigate(
                'SchoolScores', { 
                    id: schoolInfo, 
                    scores: school
                })
        }

    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Select a school below for more information and SAT scores:</Text>

            {/* Return list of schools from JSON data */}
            <FlatList 
                data={schoolList}
                keyExtractor={(data) => data.dbn}
                renderItem={( {item} ) => {
                    return (
                        <View style={styles.spacer}>
                        {/* Pass JSON info to retrieve details */}
                        <TouchableOpacity 
                            style={styles.list}
                            onPress={() => { goSchoolInfo(item, item.dbn)}}
                        >
                            <Text style={styles.cell}>{item.school_name}</Text>
                        </TouchableOpacity>
                        </View>
                    )
                    
                }}
            />
        </View>
    )
}

// Screen styling
const styles = StyleSheet.create({
    container: {
        marginBottom: 100,
    },
    spacer: {
        margin: 1,
        borderBottomWidth: .5
    },
    list: {
        flex: 1,
        margin: 10,
        padding: 5,

    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        margin: 20,
        fontWeight: 'bold'
    },
    cell: {
        fontSize: 16
    }
})

export default HomeScreen;