import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Card, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function API() {
    const [selectedNumber, setSelectedNumber] = useState(1);
    const [pokemonName, setPokemonName] = useState('');
    const [moveCount, setMoveCount] = useState(0);

    useEffect(() => {
        async function fetchPokemonData() {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedNumber}`);
                const data = response.data;
                
                setPokemonName(data.name);
                setMoveCount(data.moves.length);
            } catch (error) {
                console.error('Error fetching Pokémon data:', error);
            }
        }

        fetchPokemonData();
    }, [selectedNumber]);

    return (
        <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
            <Card variant="outlined" style={{ padding: '2rem', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
                <Typography variant="h4" color="primary" gutterBottom>
                    You selected Pokémon number: {selectedNumber}
                </Typography>
                <Typography variant="h5" color="secondary">
                    Pokémon Name: {pokemonName}
                </Typography>
                <Typography variant="h5" color="textSecondary">
                    Number of Moves: {moveCount}
                </Typography>

                <FormControl fullWidth style={{ marginTop: '1.5rem' }}>
                    <InputLabel id="pokemon-select-label">Choose a Pokémon</InputLabel>
                    <Select
                        labelId="pokemon-select-label"
                        id="pokemon-select"
                        value={selectedNumber}
                        label="Choose a Pokémon"
                        onChange={(e) => setSelectedNumber(e.target.value)}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={25}>25</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                    </Select>
                </FormControl>
            </Card>
        </Container>
    );
}

export default API;
