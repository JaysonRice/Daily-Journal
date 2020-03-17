let journalEntries = []

export const getEntries = () => { 
    return fetch('http://localhost:3000/notes')
    .then(response => response.json())
    .then(parsedEntries => {
        journalEntries = parsedEntries
    })
}

export const useJournalEntries = () => {
    const sortedByDate = journalEntries.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}