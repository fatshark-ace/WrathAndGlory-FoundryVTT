import { WrathAndGloryActorSheet } from "./actor.js";
import {Html} from "../types/wag-models";

export class ThreatSheet extends WrathAndGloryActorSheet {

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["wrath-and-glory", "sheet", "actor"],
            template: "systems/wrath-and-glory/template/sheet/threat.html",
            width: 720,
            height: 800,
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


    activateListeners(html: Html) {
        super.activateListeners(html);
        html.find(".item-cost").focusout(async (ev: Event) => { await this._onItemCostFocusOut(ev); });
    }

    _getHeaderButtons() {
        let buttons = super._getHeaderButtons();
        if (this.actor.owner) {
            buttons = [
            ].concat(buttons);
        }
        return buttons;
    }

    async _onItemCostFocusOut(event: Event) {
        event.preventDefault();
        const div = $(event.currentTarget).parents(".item");
        let item  = this.actor.items.get(div.data("itemId"));
        const value = parseInt($(event.currentTarget)[0].value, 10);
        let data = { _id: item.id, "data.cost": value };
        await this.actor.updateEmbeddedDocument("Item", data);

        this._render(true);
    }
}
