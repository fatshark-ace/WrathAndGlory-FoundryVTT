"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MutationSheet = void 0;
const item_js_1 = require("./item.js");
class MutationSheet extends item_js_1.WrathAndGloryItemSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["wrath-and-glory", "sheet", "item"],
            template: "systems/wrath-and-glory/template/sheet/mutation.html",
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
exports.MutationSheet = MutationSheet;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXV0YXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2hlZXQvbXV0YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBQWlEO0FBR2pELE1BQWEsYUFBYyxTQUFRLGdDQUFzQjtJQUNyRCxNQUFNLEtBQUssY0FBYztRQUNyQixPQUFPLFdBQVcsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFO1lBQ3JDLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUM7WUFDN0MsUUFBUSxFQUFFLHNEQUFzRDtZQUNoRSxLQUFLLEVBQUUsR0FBRztZQUNWLE1BQU0sRUFBRSxHQUFHO1lBQ1gsU0FBUyxFQUFFLEtBQUs7WUFDaEIsSUFBSSxFQUFFO2dCQUNGO29CQUNJLFdBQVcsRUFBRSxhQUFhO29CQUMxQixlQUFlLEVBQUUsYUFBYTtvQkFDOUIsT0FBTyxFQUFFLGFBQWE7aUJBQ3pCO2FBQ0o7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsT0FBTztRQUNILE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM3QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsaUJBQWlCO1FBQ2IsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDeEMsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVELGlCQUFpQixDQUFDLElBQVU7UUFDeEIsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Q0FDSjtBQS9CRCxzQ0ErQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1dyYXRoQW5kR2xvcnlJdGVtU2hlZXR9IGZyb20gXCIuL2l0ZW0uanNcIjtcbmltcG9ydCB7SHRtbH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjbGFzcyBNdXRhdGlvblNoZWV0IGV4dGVuZHMgV3JhdGhBbmRHbG9yeUl0ZW1TaGVldCB7XG4gICAgc3RhdGljIGdldCBkZWZhdWx0T3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIG1lcmdlT2JqZWN0KHN1cGVyLmRlZmF1bHRPcHRpb25zLCB7XG4gICAgICAgICAgICBjbGFzc2VzOiBbXCJ3cmF0aC1hbmQtZ2xvcnlcIiwgXCJzaGVldFwiLCBcIml0ZW1cIl0sXG4gICAgICAgICAgICB0ZW1wbGF0ZTogXCJzeXN0ZW1zL3dyYXRoLWFuZC1nbG9yeS90ZW1wbGF0ZS9zaGVldC9tdXRhdGlvbi5odG1sXCIsXG4gICAgICAgICAgICB3aWR0aDogNTAwLFxuICAgICAgICAgICAgaGVpZ2h0OiA0MTIsXG4gICAgICAgICAgICByZXNpemFibGU6IGZhbHNlLFxuICAgICAgICAgICAgdGFiczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmF2U2VsZWN0b3I6IFwiLnNoZWV0LXRhYnNcIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFNlbGVjdG9yOiBcIi5zaGVldC1ib2R5XCIsXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWw6IFwiZGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXREYXRhKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gc3VwZXIuZ2V0RGF0YSgpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBfZ2V0SGVhZGVyQnV0dG9ucygpIHtcbiAgICAgICAgbGV0IGJ1dHRvbnMgPSBzdXBlci5fZ2V0SGVhZGVyQnV0dG9ucygpO1xuICAgICAgICByZXR1cm4gYnV0dG9ucztcbiAgICB9XG5cbiAgICBhY3RpdmF0ZUxpc3RlbmVycyhodG1sOiBIdG1sKSB7XG4gICAgICAgIHN1cGVyLmFjdGl2YXRlTGlzdGVuZXJzKGh0bWwpO1xuICAgIH1cbn1cbiJdfQ==