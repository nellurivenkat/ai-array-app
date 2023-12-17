import React, { useState } from 'react';
import arrPlayers from './players';
import './App.css';
import DisplayPlayer from './DisplayPlayer';


const ListPlayers = () => {
    const [selectedPlayerId, setSelectedPlayerId] = useState(null);
    const [showPlayersList, setShowPlayersList] = useState(true);
    const [players, setPlayers] = useState(arrPlayers);

    const handleShowDetails = (playerId) => {
        setSelectedPlayerId(playerId);
        setShowPlayersList(false);
    };

    const handleDeleteClick = (playerId) => {
        const updatedPlayers = players.filter((player) => player.id !== playerId);
        setPlayers(updatedPlayers);

        if (selectedPlayerId === playerId) {
            setSelectedPlayerId(null);
            setShowPlayersList(true);
        }
    };

    const handleShowPlayersList = () => {
        setShowPlayersList(true);
        setSelectedPlayerId(null);
    };

    return (
        <section>
            <h1>Top 10 Soccer Players</h1>
            <br></br>
            {showPlayersList ? (
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Trophies</th>
                            <th>Club</th>
                            <th>Nationality</th>
                            <th>Details</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map((player) => (
                            <tr key={player.id}>
                                <td>{player.id}</td>
                                <td>
                                    {player.firstName} {player.lastName} ({player.age})
                                </td>
                                <td>{player.trophies}</td>
                                <td>{player.club}</td>
                                <td>{player.nationality}</td>
                                <td>
                                    <button onClick={() => handleShowDetails(player.id)}>
                                        More...
                                    </button>
                                </td>
                                <td>
                                    <button className="delete" onClick={() => handleDeleteClick(player.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <DisplayPlayer playerId={selectedPlayerId} />
            )}


            {selectedPlayerId && (
                <button onClick={handleShowPlayersList}>Back to Player's List</button>
            )}
        </section>
    );
};

export default ListPlayers;
