"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AscensionSheet = void 0;
const item_js_1 = require("./item.js");
class AscensionSheet extends item_js_1.WrathAndGloryItemSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["wrath-and-glory", "sheet", "item"],
            template: "systems/wrath-and-glory/template/sheet/ascension.html",
            width: 500,
            height: 567,
            resizable: false,
            tabs: [
                {
                    navSelector: ".sheet-tabs",
                    contentSelector: ".sheet-body",
                    initial: "description",
                },
            ]
        });
    }
    getData() {
        const data = super.getData();
        return data;
    }
    _getHeaderButtons() {
        let buttons = super._getHeaderButtons();
        return buttons;
    }
    activateListeners(html) {
        super.activateListeners(html);
    }
}
exports.AscensionSheet = AscensionSheet;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNjZW5zaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NoZWV0L2FzY2Vuc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FBbUQ7QUFHbkQsTUFBYSxjQUFlLFNBQVEsZ0NBQXNCO0lBQ3RELE1BQU0sS0FBSyxjQUFjO1FBQ3JCLE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUU7WUFDckMsT0FBTyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQztZQUM3QyxRQUFRLEVBQUUsdURBQXVEO1lBQ2pFLEtBQUssRUFBRSxHQUFHO1lBQ1YsTUFBTSxFQUFFLEdBQUc7WUFDWCxTQUFTLEVBQUUsS0FBSztZQUNoQixJQUFJLEVBQUU7Z0JBQ0Y7b0JBQ0ksV0FBVyxFQUFFLGFBQWE7b0JBQzFCLGVBQWUsRUFBRSxhQUFhO29CQUM5QixPQUFPLEVBQUUsYUFBYTtpQkFDekI7YUFDSjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxPQUFPO1FBQ0gsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzdCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxpQkFBaUI7UUFDYixJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN4QyxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRUQsaUJBQWlCLENBQUMsSUFBVTtRQUN4QixLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztDQUNKO0FBL0JELHdDQStCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdyYXRoQW5kR2xvcnlJdGVtU2hlZXQgfSBmcm9tIFwiLi9pdGVtLmpzXCI7XG5pbXBvcnQge0h0bWx9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgY2xhc3MgQXNjZW5zaW9uU2hlZXQgZXh0ZW5kcyBXcmF0aEFuZEdsb3J5SXRlbVNoZWV0IHtcbiAgICBzdGF0aWMgZ2V0IGRlZmF1bHRPcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gbWVyZ2VPYmplY3Qoc3VwZXIuZGVmYXVsdE9wdGlvbnMsIHtcbiAgICAgICAgICAgIGNsYXNzZXM6IFtcIndyYXRoLWFuZC1nbG9yeVwiLCBcInNoZWV0XCIsIFwiaXRlbVwiXSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiBcInN5c3RlbXMvd3JhdGgtYW5kLWdsb3J5L3RlbXBsYXRlL3NoZWV0L2FzY2Vuc2lvbi5odG1sXCIsXG4gICAgICAgICAgICB3aWR0aDogNTAwLFxuICAgICAgICAgICAgaGVpZ2h0OiA1NjcsXG4gICAgICAgICAgICByZXNpemFibGU6IGZhbHNlLFxuICAgICAgICAgICAgdGFiczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmF2U2VsZWN0b3I6IFwiLnNoZWV0LXRhYnNcIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFNlbGVjdG9yOiBcIi5zaGVldC1ib2R5XCIsXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWw6IFwiZGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXREYXRhKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gc3VwZXIuZ2V0RGF0YSgpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBfZ2V0SGVhZGVyQnV0dG9ucygpIHtcbiAgICAgICAgbGV0IGJ1dHRvbnMgPSBzdXBlci5fZ2V0SGVhZGVyQnV0dG9ucygpO1xuICAgICAgICByZXR1cm4gYnV0dG9ucztcbiAgICB9XG5cbiAgICBhY3RpdmF0ZUxpc3RlbmVycyhodG1sOiBIdG1sKSB7XG4gICAgICAgIHN1cGVyLmFjdGl2YXRlTGlzdGVuZXJzKGh0bWwpO1xuICAgIH1cbn1cbiJdfQ==