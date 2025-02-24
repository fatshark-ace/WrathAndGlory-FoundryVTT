import { WrathAndGloryActor } from "./scripts/actor/actor.js";
import { WrathAndGloryItem } from "./scripts/item/item.js";
import { AgentSheet } from "./scripts/actor/sheet/agent.js";
import { ThreatSheet } from "./scripts/actor/sheet/threat.js";
import { initializeHandlebars } from "./scripts/common/handlebars.js";
import { prepareCommonRoll, prepareWeaponRoll, prepareDamageRoll, preparePsychicRoll } from "./scripts/common/dialog.js";
import { commonRoll, weaponRoll, damageRoll, psychicRoll } from "./scripts/common/roll.js";
import hooks from "./scripts/common/hooks.js"
import RuinGloryCounter from "./scripts/apps/counter.js"
import ItemTraits from "./scripts/apps/item-traits.js"
import WNG from "./scripts/common/config.js"
import { WrathAndGloryItemSheet } from "./scripts/item/sheet/item-sheet.js";
import WNGUtility from "./scripts/common/utility.js"

Hooks.once("init", () => {
  CONFIG.Actor.documentClass = WrathAndGloryActor;
  CONFIG.Item.documentClass = WrathAndGloryItem;
  game.wng = {
    prepareCommonRoll,
    prepareWeaponRoll,
    prepareDamageRoll,
    preparePsychicRoll,
    commonRoll,
    weaponRoll,
    psychicRoll,
    damageRoll,
    ItemTraits,
    RuinGloryCounter,
    utility : WNGUtility
  };
  game.wng.config = WNG
  CONFIG.Combat.initiative = { formula: "(@attributes.initiative.total)d6", decimals: 0 };
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("wrath-and-glory", AgentSheet, { types: ["agent"], makeDefault: true });
  Actors.registerSheet("wrath-and-glory", ThreatSheet, { types: ["threat"], makeDefault: true });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("wrath-and-glory", WrathAndGloryItemSheet, {makeDefault : true});
  initializeHandlebars();
});


hooks()