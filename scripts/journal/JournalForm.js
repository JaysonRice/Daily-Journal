const contentTarget = document.querySelector(".form")
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
        <input class="btn__submit" type="submit" name="submit" id="submit" value="Record Journal Entry">
    </fieldset>
    `
}

export const JournalFormComponent = () => {
    contentTarget.innerHTML = useJournalForm()
}