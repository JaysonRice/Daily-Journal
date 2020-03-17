let journalEntries = []

const eventHub = document.querySelector("container")

// Lets eventHub know that JSON data has been changed by the form
const dispatchStateChangeEvent = () => {
    const entryStateChangeEvent = new CustomEvent ("entryStateChanged")

    eventHub.dispatchEvent(entryStateChangeEvent)
}

export const useEntries = () => journalEntries.slice()

export const getEntries = () => { 
    return fetch('http://localhost:3000/notes')
    .then(response => response.json())
    .then(parsedEntries => {
        journalEntries = parsedEntries
    })
}

export const saveEntry = entry => {
    return fetch('http://localhost:3000/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(getEntries)
    .then(dispatchStateChangeEvent)
}

export const useJournalEntries = () => {
    const sortedByDate = journalEntries.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}