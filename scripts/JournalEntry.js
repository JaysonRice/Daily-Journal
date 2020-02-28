const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
        <div> date:${entry.date}</div>
        <div> concept: ${entry.concept}</div>
        <div> entry: ${entry.entry}</div>
        <div> mood: ${entry.mood}</div>
        </section>
    `
}

export default JournalEntryComponent