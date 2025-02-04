import { animalService } from "../services/animal.service.js"

// const { useState, useEffect } = React
 const animals = animalService._createAnimals()

export function AnimalTable() {


    return (
        <section className="animal-table"> 
            <h2>Rare Animals</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Count</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    {animals.map((animal, index) => (
                        <tr key={index}>
                            <td>{animal.type}</td>
                            <td>{animal.count}</td>
                            <td><a href={`https://www.google.com/search?q=${encodeURIComponent(animal.type)}`} target="_blank" rel="noopener noreferrer">Search</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </section>
    )
}