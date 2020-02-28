import { useJournalEntries } from "./JournalDataProvider.js";
import JournalEntryComponent from "./JournalEntry.js";

const entryLog = document.querySelector(".journalEntry")

const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    const entries = useJournalEntries()

    let journalHTMLRepresentation = ""
    for (const entry of entries) {
        journalHTMLRepresentation += JournalEntryComponent(entry)
    }
        entryLog.innerHTML = `
        ${journalHTMLRepresentation}
        `
}

export default EntryListComponent
