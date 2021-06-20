"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartySheet = void 0;
const actor_js_1 = require("./actor.js");
class PartySheet extends actor_js_1.WrathAndGloryActorSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["wrath-and-glory", "sheet", "actor"],
            template: "systems/wrath-and-glory/template/sheet/party.html",
            width: 700,
            height: 1000,
            resizable: false,
            tabs: [
                {
                    navSelector: ".sheet-tabs",
                    contentSelector: ".sheet-body",
                    initial: "main",
                },
            ]
        });
    }
    getData() {
        const data = super.getData();
        return data;
    }
    activateListeners(html) {
        super.activateListeners(html);
    }
    _getHeaderButtons() {
        let buttons = super._getHeaderButtons();
        if (this.actor.isOwner) {
            buttons = [].concat(buttons);
        }
        return buttons;
    }
}
exports.PartySheet = PartySheet;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFydHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2hlZXQvcGFydHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBQXFEO0FBR3JELE1BQWEsVUFBVyxTQUFRLGtDQUF1QjtJQUVuRCxNQUFNLEtBQUssY0FBYztRQUNyQixPQUFPLFdBQVcsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFO1lBQ3JDLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUM7WUFDOUMsUUFBUSxFQUFFLG1EQUFtRDtZQUM3RCxLQUFLLEVBQUUsR0FBRztZQUNWLE1BQU0sRUFBRSxJQUFJO1lBQ1osU0FBUyxFQUFFLEtBQUs7WUFDaEIsSUFBSSxFQUFFO2dCQUNGO29CQUNJLFdBQVcsRUFBRSxhQUFhO29CQUMxQixlQUFlLEVBQUUsYUFBYTtvQkFDOUIsT0FBTyxFQUFFLE1BQU07aUJBQ2xCO2FBQ0o7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsT0FBTztRQUNILE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM3QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBR0QsaUJBQWlCLENBQUMsSUFBVTtRQUN4QixLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELGlCQUFpQjtRQUNiLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3hDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDcEIsT0FBTyxHQUFHLEVBQ1QsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDckI7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0NBQ0o7QUFyQ0QsZ0NBcUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV3JhdGhBbmRHbG9yeUFjdG9yU2hlZXQgfSBmcm9tIFwiLi9hY3Rvci5qc1wiO1xuaW1wb3J0IHtIdG1sfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNsYXNzIFBhcnR5U2hlZXQgZXh0ZW5kcyBXcmF0aEFuZEdsb3J5QWN0b3JTaGVldCB7XG5cbiAgICBzdGF0aWMgZ2V0IGRlZmF1bHRPcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gbWVyZ2VPYmplY3Qoc3VwZXIuZGVmYXVsdE9wdGlvbnMsIHtcbiAgICAgICAgICAgIGNsYXNzZXM6IFtcIndyYXRoLWFuZC1nbG9yeVwiLCBcInNoZWV0XCIsIFwiYWN0b3JcIl0sXG4gICAgICAgICAgICB0ZW1wbGF0ZTogXCJzeXN0ZW1zL3dyYXRoLWFuZC1nbG9yeS90ZW1wbGF0ZS9zaGVldC9wYXJ0eS5odG1sXCIsXG4gICAgICAgICAgICB3aWR0aDogNzAwLFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAwLFxuICAgICAgICAgICAgcmVzaXphYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHRhYnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hdlNlbGVjdG9yOiBcIi5zaGVldC10YWJzXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRTZWxlY3RvcjogXCIuc2hlZXQtYm9keVwiLFxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsOiBcIm1haW5cIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXREYXRhKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gc3VwZXIuZ2V0RGF0YSgpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cblxuICAgIGFjdGl2YXRlTGlzdGVuZXJzKGh0bWw6IEh0bWwpIHtcbiAgICAgICAgc3VwZXIuYWN0aXZhdGVMaXN0ZW5lcnMoaHRtbCk7XG4gICAgfVxuXG4gICAgX2dldEhlYWRlckJ1dHRvbnMoKSB7XG4gICAgICAgIGxldCBidXR0b25zID0gc3VwZXIuX2dldEhlYWRlckJ1dHRvbnMoKTtcbiAgICAgICAgaWYgKHRoaXMuYWN0b3IuaXNPd25lcikge1xuICAgICAgICAgICAgYnV0dG9ucyA9IFtcbiAgICAgICAgICAgIF0uY29uY2F0KGJ1dHRvbnMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBidXR0b25zO1xuICAgIH1cbn1cbiJdfQ==