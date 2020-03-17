import { JournalFormComponent } from "./journal/JournalForm.js";
import EntryListComponent from "./journal/JournalEntryList.js";

import { getEntries } from "./journal/JournalDataProvider.js";

JournalFormComponent()
getEntries().then(EntryListComponent)