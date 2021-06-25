import {Attribute, Combat, Data, Skill} from "../types/wag-models";
import {WrathAndGloryItem} from "./item";

export class WrathAndGloryActor extends Actor {

    async _preCreate(data: Data, options: void, user: void) {
        let initData: any = {
            "token.bar1": {"attribute": "combat.wounds"},
            "token.bar2": {"attribute": "combat.shock"},
            "token.displayName": CONST.TOKEN_DISPLAY_MODES.OWNER_HOVER,
            "token.displayBars": CONST.TOKEN_DISPLAY_MODES.OWNER_HOVER,
            "token.disposition": CONST.TOKEN_DISPOSITIONS.NEUTRAL,
            "token.name": data.name
        }
        if (data.type === "agent") {
            initData["token.vision"] = true;
            initData["token.actorLink"] = true;
        }
        this.data.update(initData)
    }

    prepareData() {
        super.prepareData();
        if (this.type === "agent") {
            this._initializeAgent();
        } else if (this.type === "threat") {
            this._initializeThreat();
        }
    }

    _initializeAgent() {
        this._initializeBonus();
        this._computeItems();
        this._computeAttributes();
        this._computeSkills();
        this._computeCombat();
        this._computeExperience();
    }

    _initializeThreat() {
        this._initializeBonus();
        this._computeItems();
        this._computeAttributes();
        this._computeSkills();
    }

    _initializeBonus() {
        if (this.advances) {
            this.advances.experience.spent = 0;
            this.advances.experience.total = 0;
        }
        for (let attribute of Object.values(this.attributes)) {
            attribute.bonus = 0;
        }
        for (let skill of Object.values(this.skills)) {
            skill.bonus = 0;
        }
    }

    _computeItems() {
        this.combat.resilence.armor = 0;
        for (let item of this.items) {

            if (item.isArmour) {
                this._computeArmour(item);
            }
            if (item.bonus) {
                this._computeBonus(item);
            }
            if (this.advances && item.cost) {
                this.advances.experience.spent = this.advances.experience.spent + item.cost;
            }
        }
    }

    _computeArmour(item: WrathAndGloryItem) {
        if (this.combat.resilence.armor < item.rating) {
            this.combat.resilence.armor = item.rating;
        }
    }

    _computeAttributes() {
        for (let attribute of Object.values(this.attributes) as Array<Attribute>) {
            attribute.total = attribute.rating + attribute.bonus;
            if (this.advances) {
                this.advances.experience.spent = this.advances.experience.spent + attribute.cost;
            }
        }
    }

    _computeBonus(item: WrathAndGloryItem) {
        let bonus = item.bonus
        for (let [key, value] of Object.entries(this.attributes)) {
            value.bonus = value.bonus + bonus.attributes[key];
        }
        for (let [key, value] of Object.entries(this.skills)) {
            value.bonus = value.bonus + bonus.skills[key];
        }
        for (let [key, value] of Object.entries(this.combat)) {
            if (value.hasOwnProperty("bonus")) {
                value.bonus = value.bonus + bonus.combat[key];
            }
        }
    }

    _computeSkills() {
        let middle = Object.values(this.skills).length / 2;
        let i = 0;
        for (const skill of Object.values(this.skills)) {
            skill.total = this.attributes[skill.attribute].total + skill.rating + skill.bonus;
            if (this.advances) {
                this.advances.experience.spent = this.advances.experience.spent + skill.cost;
            }
            skill.isLeft = i < middle;
            skill.isRight = i >= middle;
            i++;
        }
    }

    _computeCombat() {
        this.combat.passiveAwareness.total = this._setDefault(Math.ceil(this.skills.awareness.total / 2) + this.combat.passiveAwareness.bonus, 1);
        this.combat.defense.total = this._setDefault(this.attributes.initiative.total - 1 + this.combat.defense.bonus, 1);
        this.combat.resolve.total = this._setDefault(this.attributes.willpower.total - 1 + this.combat.resolve.bonus, 1);
        this.corruption.conviction = this._setDefault(this.attributes.willpower.total, 1);
        this.combat.resilence.total = this._setDefault(this.attributes.toughness.rating + 1 + this.combat.resilence.bonus + this.combat.resilence.armor, 1);
        this.combat.wounds.max = this._setDefault((this.advances.tier * 2) + this.attributes.toughness.rating + this.combat.wounds.bonus, 1);
        this.combat.determination.total = this._setDefault(this.attributes.toughness.rating + this.combat.determination.bonus, 1);
        this.combat.shock.max = this._setDefault(this.attributes.willpower.rating + this.advances.tier + this.combat.shock.bonus, 1);
    }

    _setDefault(value: number, fallback: number) {
        return (value < fallback ? fallback : value);
    }

    _computeExperience() {
        this.advances.experience.spent = this.advances.experience.spent + this.advances.species;
        this.advances.experience.total = this.advances.experience.current + this.advances.experience.spent;
    }

    get Size() {
        switch (this.combat.size) {
            case "tiny":
                return game.i18n.localize("SIZE.TINY");
            case "small":
                return game.i18n.localize("SIZE.SMALL");
            case "average":
                return game.i18n.localize("SIZE.AVERAGE");
            case "large":
                return game.i18n.localize("SIZE.LARGE");
            case "huge":
                return game.i18n.localize("SIZE.HUGE");
            case "gargantuan":
                return game.i18n.localize("SIZE.GARGANTUAN");
            default:
                return game.i18n.localize("SIZE.AVERAGE");
        }
    }

    get attributes(): Record<string, Attribute> {
        return this.data.data.attributes
    }

    get skills(): Record<string, Skill> {
        return this.data.data.skills
    }

    get combat(): Combat {
        return this.data.data.combat
    }

    get bio() {
        return this.data.data.bio
    }

    get advances() {
        return this.data.data.advances
    }

    get resources() {
        return this.data.data.resources
    }

    get corruption() {
        return this.data.data.corruption
    }

    get notes() {
        return this.data.data.notes
    }
}