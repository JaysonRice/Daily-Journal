import { useJournalEntries } from "./JournalDataProvider";
import JournalEntryComponent from "./JournalEntry";

const entryLog = document.querySelector(".journalEntry")

const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    const entries = useJournalEntries()

    for (const entry of entries) {
        JournalEntryComponent(entry)

        entryLog.innerHTML +=  
    }
}

export default EntryListComponent


JournalEntryComponent