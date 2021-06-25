import {Html} from "../types/wag-models";

export class WrathAndGloryItemSheet extends ItemSheet {
  activateListeners(html: Html) {
    super.activateListeners(html);
    html.find("input").focusin((ev: Event) => this._onFocusIn(ev));
  }

  _getHeaderButtons() {
    let buttons = super._getHeaderButtons();
    buttons = [
      {
        label: game.i18n.localize("BUTTON.POST_ITEM"),
        class: "item-post",
        icon: "fas fa-comment",
        onclick: (ev: Event) => this.item.sendToChat(),
      }
    ].concat(buttons);
    return buttons;
  }

  getData() {
    const data = super.getData();
    data.data = data.data.data // project system data so that handlebars has the same name and value paths
    return data;
}


  _onFocusIn(event: Event) {
    $(event.currentTarget).select();
  }
}