import { saveEntry } from "./JournalDataProvider.js"

const contentTarget = document.querySelector(".form")

// Handle browser-generated click event in component
contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEntry") {

        const journalDate = document.querySelector("#journalDate").value
        const conceptsCovered = document.querySelector("#conceptsCovered").value
        const journalEntry = document.querySelector("#journalEntry").value
        const mood = document.querySelector("#mood").value


        // Make a new object representation of a note
        const newEntry = {
            date: journalDate,
            concept: conceptsCovered,
            entry: journalEntry,
            mood: mood
        }
debugger
        // Change API state and application state
        saveEntry(newEntry)
    }
})

// This component is responsible for rendering the journal form on the Dom.

const useJournalForm = () => {
 return   `
<h1>Daily Journal</h1>
<form class="journalForm" action="">
    <fieldset class="fieldsetForm">
        <label class="formLabel" for="journalDate">Date of entry</label>
        <input class="user__input" type="date" name="journalDate" id="journalDate">
        <label class="formLabel" for="conceptsCovered">Concepts covered</label>
        <input class="user__input" type="text" name="conceptsCovered" id="conceptsCovered">
        <label class="formLabel" for="journalEntry">Journal entry</label>
        <textarea class="user__input" rows="5" cols="30" name="journalEntry" id="journalEntry"></textarea>
        <label class="formLabel" for="mood">Mood for the day</label>
        <select class="user__input" name="mood" id="mood">
            <option class="mood__selection" value="happy">Happy</option>
            <option class="mood__selection" value="sad">Ok</option>
            <option class="mood__selection" value="sad">Sad</option>
            <option class="mood__selection" value="stressed">Stressed</option>
        </select>
        <button class="btn__submit" id="saveEntry">Record Journal Entry</button>
    </fieldset>
    `
}

export const JournalFormComponent = () => {
    contentTarget.innerHTML = useJournalForm()
}