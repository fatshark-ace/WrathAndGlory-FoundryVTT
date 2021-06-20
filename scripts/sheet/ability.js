"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilitySheet = void 0;
const item_js_1 = require("./item.js");
class AbilitySheet extends item_js_1.WrathAndGloryItemSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["wrath-and-glory", "sheet", "item"],
            template: "systems/wrath-and-glory/template/sheet/ability.html",
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
exports.AbilitySheet = AbilitySheet;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJpbGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zaGVldC9hYmlsaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUFtRDtBQUduRCxNQUFhLFlBQWEsU0FBUSxnQ0FBc0I7SUFDcEQsTUFBTSxLQUFLLGNBQWM7UUFDckIsT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRTtZQUNyQyxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDO1lBQzdDLFFBQVEsRUFBRSxxREFBcUQ7WUFDL0QsS0FBSyxFQUFFLEdBQUc7WUFDVixNQUFNLEVBQUUsR0FBRztZQUNYLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLElBQUksRUFBRTtnQkFDRjtvQkFDSSxXQUFXLEVBQUUsYUFBYTtvQkFDMUIsZUFBZSxFQUFFLGFBQWE7b0JBQzlCLE9BQU8sRUFBRSxhQUFhO2lCQUN6QjthQUNKO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELE9BQU87UUFDSCxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDN0IsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELGlCQUFpQjtRQUNiLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3hDLE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxJQUFVO1FBQ3hCLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0NBQ0o7QUEvQkQsb0NBK0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV3JhdGhBbmRHbG9yeUl0ZW1TaGVldCB9IGZyb20gXCIuL2l0ZW0uanNcIjtcbmltcG9ydCB7SHRtbH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjbGFzcyBBYmlsaXR5U2hlZXQgZXh0ZW5kcyBXcmF0aEFuZEdsb3J5SXRlbVNoZWV0IHtcbiAgICBzdGF0aWMgZ2V0IGRlZmF1bHRPcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gbWVyZ2VPYmplY3Qoc3VwZXIuZGVmYXVsdE9wdGlvbnMsIHtcbiAgICAgICAgICAgIGNsYXNzZXM6IFtcIndyYXRoLWFuZC1nbG9yeVwiLCBcInNoZWV0XCIsIFwiaXRlbVwiXSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiBcInN5c3RlbXMvd3JhdGgtYW5kLWdsb3J5L3RlbXBsYXRlL3NoZWV0L2FiaWxpdHkuaHRtbFwiLFxuICAgICAgICAgICAgd2lkdGg6IDUwMCxcbiAgICAgICAgICAgIGhlaWdodDogNDEyLFxuICAgICAgICAgICAgcmVzaXphYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHRhYnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hdlNlbGVjdG9yOiBcIi5zaGVldC10YWJzXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRTZWxlY3RvcjogXCIuc2hlZXQtYm9keVwiLFxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsOiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0RGF0YSgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHN1cGVyLmdldERhdGEoKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgX2dldEhlYWRlckJ1dHRvbnMoKSB7XG4gICAgICAgIGxldCBidXR0b25zID0gc3VwZXIuX2dldEhlYWRlckJ1dHRvbnMoKTtcbiAgICAgICAgcmV0dXJuIGJ1dHRvbnM7XG4gICAgfVxuXG4gICAgYWN0aXZhdGVMaXN0ZW5lcnMoaHRtbDogSHRtbCkge1xuICAgICAgICBzdXBlci5hY3RpdmF0ZUxpc3RlbmVycyhodG1sKTtcbiAgICB9XG59XG4iXX0=