"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraumaticInjurySheet = void 0;
const item_js_1 = require("./item.js");
class TraumaticInjurySheet extends item_js_1.WrathAndGloryItemSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["wrath-and-glory", "sheet", "item"],
            template: "systems/wrath-and-glory/template/sheet/traumatic-injury.html",
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
exports.TraumaticInjurySheet = TraumaticInjurySheet;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhdW1hdGljLWluanVyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zaGVldC90cmF1bWF0aWMtaW5qdXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUFtRDtBQUduRCxNQUFhLG9CQUFxQixTQUFRLGdDQUFzQjtJQUM1RCxNQUFNLEtBQUssY0FBYztRQUNyQixPQUFPLFdBQVcsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFO1lBQ3JDLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUM7WUFDN0MsUUFBUSxFQUFFLDhEQUE4RDtZQUN4RSxLQUFLLEVBQUUsR0FBRztZQUNWLE1BQU0sRUFBRSxHQUFHO1lBQ1gsU0FBUyxFQUFFLEtBQUs7WUFDaEIsSUFBSSxFQUFFO2dCQUNGO29CQUNJLFdBQVcsRUFBRSxhQUFhO29CQUMxQixlQUFlLEVBQUUsYUFBYTtvQkFDOUIsT0FBTyxFQUFFLGFBQWE7aUJBQ3pCO2FBQ0o7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsT0FBTztRQUNILE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM3QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsaUJBQWlCO1FBQ2IsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDeEMsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVELGlCQUFpQixDQUFDLElBQVU7UUFDeEIsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Q0FDSjtBQS9CRCxvREErQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBXcmF0aEFuZEdsb3J5SXRlbVNoZWV0IH0gZnJvbSBcIi4vaXRlbS5qc1wiO1xuaW1wb3J0IHtIdG1sfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNsYXNzIFRyYXVtYXRpY0luanVyeVNoZWV0IGV4dGVuZHMgV3JhdGhBbmRHbG9yeUl0ZW1TaGVldCB7XG4gICAgc3RhdGljIGdldCBkZWZhdWx0T3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIG1lcmdlT2JqZWN0KHN1cGVyLmRlZmF1bHRPcHRpb25zLCB7XG4gICAgICAgICAgICBjbGFzc2VzOiBbXCJ3cmF0aC1hbmQtZ2xvcnlcIiwgXCJzaGVldFwiLCBcIml0ZW1cIl0sXG4gICAgICAgICAgICB0ZW1wbGF0ZTogXCJzeXN0ZW1zL3dyYXRoLWFuZC1nbG9yeS90ZW1wbGF0ZS9zaGVldC90cmF1bWF0aWMtaW5qdXJ5Lmh0bWxcIixcbiAgICAgICAgICAgIHdpZHRoOiA1MDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDQxMixcbiAgICAgICAgICAgIHJlc2l6YWJsZTogZmFsc2UsXG4gICAgICAgICAgICB0YWJzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYXZTZWxlY3RvcjogXCIuc2hlZXQtdGFic1wiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50U2VsZWN0b3I6IFwiLnNoZWV0LWJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbDogXCJkZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldERhdGEoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBzdXBlci5nZXREYXRhKCk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIF9nZXRIZWFkZXJCdXR0b25zKCkge1xuICAgICAgICBsZXQgYnV0dG9ucyA9IHN1cGVyLl9nZXRIZWFkZXJCdXR0b25zKCk7XG4gICAgICAgIHJldHVybiBidXR0b25zO1xuICAgIH1cblxuICAgIGFjdGl2YXRlTGlzdGVuZXJzKGh0bWw6IEh0bWwpIHtcbiAgICAgICAgc3VwZXIuYWN0aXZhdGVMaXN0ZW5lcnMoaHRtbCk7XG4gICAgfVxufVxuIl19