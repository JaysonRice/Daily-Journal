// This is the original data. Can't Touch This.
const journal = [
    {
        date: "2/26/2020",
        concept: "HTML & CSS",
        entry: "We worked on a travel brochure site as a team.",
        mood: "Good"
    },
    {
        date: "07/27/2025",
        concept: "Javascript",
        entry: "We talked about representing fish through html using javascript.",
        mood: "Ok"
    },
    {
        date: "07/28/2025",
        concept: "Javascript",
        entry: "We worked on changing information on Martin's Aquarium to load dynamically.",
        mood: "Ok"
    },
]

export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}