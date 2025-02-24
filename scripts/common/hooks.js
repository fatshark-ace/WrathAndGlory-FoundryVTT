

import entryContextHooks from "../hooks/entryContext.js"
import ready from "../hooks/ready.js"
import settings from "../hooks/settings.js"
import init from "../hooks/init.js";

export default function() {
    entryContextHooks();
    ready();
    settings();
    init();
}
