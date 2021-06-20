"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GearSheet = void 0;
const item_js_1 = require("./item.js");
class GearSheet extends item_js_1.WrathAndGloryItemSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["wrath-and-glory", "sheet", "item"],
            template: "systems/wrath-and-glory/template/sheet/gear.html",
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
exports.GearSheet = GearSheet;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2Vhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zaGVldC9nZWFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUFpRDtBQUdqRCxNQUFhLFNBQVUsU0FBUSxnQ0FBc0I7SUFDakQsTUFBTSxLQUFLLGNBQWM7UUFDckIsT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRTtZQUNyQyxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDO1lBQzdDLFFBQVEsRUFBRSxrREFBa0Q7WUFDNUQsS0FBSyxFQUFFLEdBQUc7WUFDVixNQUFNLEVBQUUsR0FBRztZQUNYLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLElBQUksRUFBRTtnQkFDRjtvQkFDSSxXQUFXLEVBQUUsYUFBYTtvQkFDMUIsZUFBZSxFQUFFLGFBQWE7b0JBQzlCLE9BQU8sRUFBRSxhQUFhO2lCQUN6QjthQUNKO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELE9BQU87UUFDSCxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDN0IsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELGlCQUFpQjtRQUNiLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3hDLE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxJQUFVO1FBQ3hCLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0NBQ0o7QUEvQkQsOEJBK0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtXcmF0aEFuZEdsb3J5SXRlbVNoZWV0fSBmcm9tIFwiLi9pdGVtLmpzXCI7XG5pbXBvcnQge0h0bWx9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgY2xhc3MgR2VhclNoZWV0IGV4dGVuZHMgV3JhdGhBbmRHbG9yeUl0ZW1TaGVldCB7XG4gICAgc3RhdGljIGdldCBkZWZhdWx0T3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIG1lcmdlT2JqZWN0KHN1cGVyLmRlZmF1bHRPcHRpb25zLCB7XG4gICAgICAgICAgICBjbGFzc2VzOiBbXCJ3cmF0aC1hbmQtZ2xvcnlcIiwgXCJzaGVldFwiLCBcIml0ZW1cIl0sXG4gICAgICAgICAgICB0ZW1wbGF0ZTogXCJzeXN0ZW1zL3dyYXRoLWFuZC1nbG9yeS90ZW1wbGF0ZS9zaGVldC9nZWFyLmh0bWxcIixcbiAgICAgICAgICAgIHdpZHRoOiA1MDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDQxMixcbiAgICAgICAgICAgIHJlc2l6YWJsZTogZmFsc2UsXG4gICAgICAgICAgICB0YWJzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYXZTZWxlY3RvcjogXCIuc2hlZXQtdGFic1wiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50U2VsZWN0b3I6IFwiLnNoZWV0LWJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbDogXCJkZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldERhdGEoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBzdXBlci5nZXREYXRhKCk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIF9nZXRIZWFkZXJCdXR0b25zKCkge1xuICAgICAgICBsZXQgYnV0dG9ucyA9IHN1cGVyLl9nZXRIZWFkZXJCdXR0b25zKCk7XG4gICAgICAgIHJldHVybiBidXR0b25zO1xuICAgIH1cblxuICAgIGFjdGl2YXRlTGlzdGVuZXJzKGh0bWw6IEh0bWwpIHtcbiAgICAgICAgc3VwZXIuYWN0aXZhdGVMaXN0ZW5lcnMoaHRtbCk7XG4gICAgfVxufVxuIl19