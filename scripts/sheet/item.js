"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WrathAndGloryItemSheet = void 0;
class WrathAndGloryItemSheet extends ItemSheet {
    activateListeners(html) {
        super.activateListeners(html);
        html.find("input").focusin((ev) => this._onFocusIn(ev));
    }
    _getHeaderButtons() {
        let buttons = super._getHeaderButtons();
        buttons = [
            {
                label: game.i18n.localize("BUTTON.POST_ITEM"),
                class: "item-post",
                icon: "fas fa-comment",
                onclick: (ev) => this.item.sendToChat(),
            }
        ].concat(buttons);
        return buttons;
    }
    getData() {
        const data = super.getData();
        data.data = data.data.data; // project system data so that handlebars has the same name and value paths
        return data;
    }
    _onFocusIn(event) {
        $(event.currentTarget).select();
    }
}
exports.WrathAndGloryItemSheet = WrathAndGloryItemSheet;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zaGVldC9pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLE1BQWEsc0JBQXVCLFNBQVEsU0FBUztJQUNuRCxpQkFBaUIsQ0FBQyxJQUFVO1FBQzFCLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCxpQkFBaUI7UUFDZixJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN4QyxPQUFPLEdBQUc7WUFDUjtnQkFDRSxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUM7Z0JBQzdDLEtBQUssRUFBRSxXQUFXO2dCQUNsQixJQUFJLEVBQUUsZ0JBQWdCO2dCQUN0QixPQUFPLEVBQUUsQ0FBQyxFQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO2FBQy9DO1NBQ0YsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEIsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELE9BQU87UUFDTCxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQSxDQUFDLDJFQUEyRTtRQUN0RyxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBR0MsVUFBVSxDQUFDLEtBQVk7UUFDckIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0NBQ0Y7QUE3QkQsd0RBNkJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdG1sfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNsYXNzIFdyYXRoQW5kR2xvcnlJdGVtU2hlZXQgZXh0ZW5kcyBJdGVtU2hlZXQge1xuICBhY3RpdmF0ZUxpc3RlbmVycyhodG1sOiBIdG1sKSB7XG4gICAgc3VwZXIuYWN0aXZhdGVMaXN0ZW5lcnMoaHRtbCk7XG4gICAgaHRtbC5maW5kKFwiaW5wdXRcIikuZm9jdXNpbigoZXY6IEV2ZW50KSA9PiB0aGlzLl9vbkZvY3VzSW4oZXYpKTtcbiAgfVxuXG4gIF9nZXRIZWFkZXJCdXR0b25zKCkge1xuICAgIGxldCBidXR0b25zID0gc3VwZXIuX2dldEhlYWRlckJ1dHRvbnMoKTtcbiAgICBidXR0b25zID0gW1xuICAgICAge1xuICAgICAgICBsYWJlbDogZ2FtZS5pMThuLmxvY2FsaXplKFwiQlVUVE9OLlBPU1RfSVRFTVwiKSxcbiAgICAgICAgY2xhc3M6IFwiaXRlbS1wb3N0XCIsXG4gICAgICAgIGljb246IFwiZmFzIGZhLWNvbW1lbnRcIixcbiAgICAgICAgb25jbGljazogKGV2OiBFdmVudCkgPT4gdGhpcy5pdGVtLnNlbmRUb0NoYXQoKSxcbiAgICAgIH1cbiAgICBdLmNvbmNhdChidXR0b25zKTtcbiAgICByZXR1cm4gYnV0dG9ucztcbiAgfVxuXG4gIGdldERhdGEoKSB7XG4gICAgY29uc3QgZGF0YSA9IHN1cGVyLmdldERhdGEoKTtcbiAgICBkYXRhLmRhdGEgPSBkYXRhLmRhdGEuZGF0YSAvLyBwcm9qZWN0IHN5c3RlbSBkYXRhIHNvIHRoYXQgaGFuZGxlYmFycyBoYXMgdGhlIHNhbWUgbmFtZSBhbmQgdmFsdWUgcGF0aHNcbiAgICByZXR1cm4gZGF0YTtcbn1cblxuXG4gIF9vbkZvY3VzSW4oZXZlbnQ6IEV2ZW50KSB7XG4gICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5zZWxlY3QoKTtcbiAgfVxufSJdfQ==