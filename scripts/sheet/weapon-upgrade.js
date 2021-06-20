"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeaponUpgradeSheet = void 0;
const item_js_1 = require("./item.js");
class WeaponUpgradeSheet extends item_js_1.WrathAndGloryItemSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["wrath-and-glory", "sheet", "item"],
            template: "systems/wrath-and-glory/template/sheet/weapon-upgrade.html",
            width: 500,
            height: 412,
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
exports.WeaponUpgradeSheet = WeaponUpgradeSheet;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhcG9uLXVwZ3JhZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2hlZXQvd2VhcG9uLXVwZ3JhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBQW1EO0FBR25ELE1BQWEsa0JBQW1CLFNBQVEsZ0NBQXNCO0lBQzFELE1BQU0sS0FBSyxjQUFjO1FBQ3JCLE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUU7WUFDckMsT0FBTyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQztZQUM3QyxRQUFRLEVBQUUsNERBQTREO1lBQ3RFLEtBQUssRUFBRSxHQUFHO1lBQ1YsTUFBTSxFQUFFLEdBQUc7WUFDWCxTQUFTLEVBQUUsS0FBSztZQUNoQixJQUFJLEVBQUU7Z0JBQ0Y7b0JBQ0ksV0FBVyxFQUFFLGFBQWE7b0JBQzFCLGVBQWUsRUFBRSxhQUFhO29CQUM5QixPQUFPLEVBQUUsYUFBYTtpQkFDekI7YUFDSjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxPQUFPO1FBQ0gsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzdCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxpQkFBaUI7UUFDYixJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN4QyxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRUQsaUJBQWlCLENBQUMsSUFBVTtRQUN4QixLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztDQUNKO0FBL0JELGdEQStCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdyYXRoQW5kR2xvcnlJdGVtU2hlZXQgfSBmcm9tIFwiLi9pdGVtLmpzXCI7XG5pbXBvcnQge0h0bWx9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgY2xhc3MgV2VhcG9uVXBncmFkZVNoZWV0IGV4dGVuZHMgV3JhdGhBbmRHbG9yeUl0ZW1TaGVldCB7XG4gICAgc3RhdGljIGdldCBkZWZhdWx0T3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIG1lcmdlT2JqZWN0KHN1cGVyLmRlZmF1bHRPcHRpb25zLCB7XG4gICAgICAgICAgICBjbGFzc2VzOiBbXCJ3cmF0aC1hbmQtZ2xvcnlcIiwgXCJzaGVldFwiLCBcIml0ZW1cIl0sXG4gICAgICAgICAgICB0ZW1wbGF0ZTogXCJzeXN0ZW1zL3dyYXRoLWFuZC1nbG9yeS90ZW1wbGF0ZS9zaGVldC93ZWFwb24tdXBncmFkZS5odG1sXCIsXG4gICAgICAgICAgICB3aWR0aDogNTAwLFxuICAgICAgICAgICAgaGVpZ2h0OiA0MTIsXG4gICAgICAgICAgICByZXNpemFibGU6IGZhbHNlLFxuICAgICAgICAgICAgdGFiczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmF2U2VsZWN0b3I6IFwiLnNoZWV0LXRhYnNcIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFNlbGVjdG9yOiBcIi5zaGVldC1ib2R5XCIsXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWw6IFwiZGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXREYXRhKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gc3VwZXIuZ2V0RGF0YSgpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBfZ2V0SGVhZGVyQnV0dG9ucygpIHtcbiAgICAgICAgbGV0IGJ1dHRvbnMgPSBzdXBlci5fZ2V0SGVhZGVyQnV0dG9ucygpO1xuICAgICAgICByZXR1cm4gYnV0dG9ucztcbiAgICB9XG5cbiAgICBhY3RpdmF0ZUxpc3RlbmVycyhodG1sOiBIdG1sKSB7XG4gICAgICAgIHN1cGVyLmFjdGl2YXRlTGlzdGVuZXJzKGh0bWwpO1xuICAgIH1cbn1cbiJdfQ==