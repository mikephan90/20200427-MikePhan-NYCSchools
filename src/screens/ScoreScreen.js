import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScoreScreen = ({ route }) => {
    // constants
    const [hasScores, setScores] = useState(Boolean)
    const id = route.params.id;
    const scores = route.params.scores;

    // Use hook to render screen and check for score data
    useEffect(() => {
        // if false - no data set will be shown, else show scores
        if (scores === null ){
            setScores(false)
        } else {
            setScores(true)
        }
    }, [hasScores])


    // Display basic school information
    const displayInfo = () => {
        return (
            <View style={styles.schoolInfo}>
                <View>
                    <Text style={styles.text1}>{id.school_name}</Text>
                    <Text style={styles.text2}>
                        {id.primary_address_line_1} {id.city}, {id.zip}
                    </Text>
                    <Text style={styles.text3}>{'\n'}
                        {id.overview_paragraph}{'\n'}
                    </Text>
                </View>
                <View style={styles.contact}>
                    <Text style={styles.text2}>Phone: {id.phone_number}</Text>
                    <Text style={styles.text2}>Email: {id.school_email}</Text>
                    <Text style={styles.text2}>Website: {id.website}</Text>
                </View>
            </View>
        )
    }

    // Display SAT scores
    const displaySATScores = () => {
        return (
            <View style={styles.scoreContainer}>
                <Text style={styles.scoreHeader}>Average SAT Scores:</Text>

                <View style={{ alignItems: 'center'}}>
                    <Text style={styles.scoreText}>
                        Critical Reading: {scores.sat_critical_reading_avg_score}</Text>
                </View>

                <View style={{ alignItems: 'center'}}>
                    <Text style={styles.scoreText}>
                        Math: {scores.sat_math_avg_score}
                    </Text>
                </View>

                <View style={{ alignItems: 'center'}}>
                    <Text style={styles.scoreText}>
                        Writing: {scores.sat_writing_avg_score}
                    </Text>
                </View>

            </View>
        )
    }

    // Display if no SAT scores are available for this school
    const displayNoScores = () => {
        return (
            <View style={styles.scoreContainer}>
                <Text style={styles.scoreText}>NO SAT SCORES AVAILABLE</Text>
            </View>
        )
    }

    return (
        <View>
            {displayInfo()}
            {hasScores ? displaySATScores() : displayNoScores()}
        </View>
    )
}

// Simple screen styling
const styles = StyleSheet.create({
    schoolInfo: {
        margin: 20,
    },
    text1: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    text2:{
        fontSize: 16,
    },
    text3:{
        fontStyle: 'italic'
    },
    scoreContainer: {
        margin: 20,
        alignItems: 'center'
    },
    scoreHeader: {
        margin: 10,
        fontSize: 30,
        fontWeight: 'bold',
    },
    scoreText: {
        fontSize: 25,
    }
});

export default ScoreScreen;