import EntryListComponent from "./journal/JournalEntryList.js";
import { getEntries } from "./journal/JournalDataProvider.js";
import { JournalFormComponent } from "./journal/JournalForm.js";

JournalFormComponent()
getEntries().then(EntryListComponent)