import {WrathAndGloryActor} from "./actor";
import {WrathAndGloryItem} from "./item";
import {AgentSheet} from "../sheet/agent";
import {ThreatSheet} from "../sheet/threat";
import {KeywordSheet} from "../sheet/keyword";
import {TalentSheet} from "../sheet/talent";
import {AbilitySheet} from "../sheet/ability";
import {PsychicPowerSheet} from "../sheet/psychic-power";
import {ArmourSheet} from "../sheet/armour";
import {WeaponSheet} from "../sheet/weapon";
import {WeaponUpgradeSheet} from "../sheet/weapon-upgrade";
import {GearSheet} from "../sheet/gear";
import {AscensionSheet} from "../sheet/ascension";
import {TraumaticInjurySheet} from "../sheet/traumatic-injury";
import {MemorableInjurySheet} from "../sheet/memorable-injury";
import {MutationSheet} from "../sheet/mutation";
import {AmmoSheet} from "../sheet/ammo";
import {AugmenticSheet} from "../sheet/augmentic";
import {initializeHandlebars} from "./handlebars";
import {migrateWorld} from "./migration";
import {
    prepareCommonRoll,
    prepareDamageRoll,
    preparePsychicRoll,
    prepareWeaponRoll
} from "./dialog";
import {commonRoll, damageRoll, psychicRoll, weaponRoll} from "./roll";

Hooks.once("init", () => {
    CONFIG.Actor.documentClass = WrathAndGloryActor;
    CONFIG.Item.documentClass = WrathAndGloryItem;
    game.wag = {
        prepareCommonRoll,
        prepareWeaponRoll,
        prepareDamageRoll,
        preparePsychicRoll,
        commonRoll,
        weaponRoll,
        psychicRoll,
        damageRoll
    };
    CONFIG.Combat.initiative = {formula: "(@attributes.initiative.total)d6", decimals: 0};
    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("wrath-and-glory", AgentSheet, {types: ["agent"], makeDefault: true});
    Actors.registerSheet("wrath-and-glory", ThreatSheet, {types: ["threat"], makeDefault: true});
    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("wrath-and-glory", KeywordSheet, {types: ["keyword"], makeDefault: true});
    Items.registerSheet("wrath-and-glory", TalentSheet, {types: ["talent"], makeDefault: true});
    Items.registerSheet("wrath-and-glory", AbilitySheet, {types: ["ability"], makeDefault: true});
    Items.registerSheet("wrath-and-glory", PsychicPowerSheet, {types: ["psychicPower"], makeDefault: true});
    Items.registerSheet("wrath-and-glory", ArmourSheet, {types: ["armour"], makeDefault: true});
    Items.registerSheet("wrath-and-glory", WeaponSheet, {types: ["weapon"], makeDefault: true});
    Items.registerSheet("wrath-and-glory", WeaponUpgradeSheet, {types: ["weaponUpgrade"], makeDefault: true});
    Items.registerSheet("wrath-and-glory", GearSheet, {types: ["gear"], makeDefault: true});
    Items.registerSheet("wrath-and-glory", AscensionSheet, {types: ["ascension"], makeDefault: true});
    Items.registerSheet("wrath-and-glory", TraumaticInjurySheet, {types: ["traumaticInjury"], makeDefault: true});
    Items.registerSheet("wrath-and-glory", MemorableInjurySheet, {types: ["memorableInjury"], makeDefault: true});
    Items.registerSheet("wrath-and-glory", MutationSheet, {types: ["mutation"], makeDefault: true});
    Items.registerSheet("wrath-and-glory", AmmoSheet, {types: ["ammo"], makeDefault: true});
    Items.registerSheet("wrath-and-glory", AmmoSheet, {types: ["ammo"], makeDefault: true});
    Items.registerSheet("wrath-and-glory", AugmenticSheet, {types: ["augmentic"], makeDefault: true});
    initializeHandlebars();
    game.settings.register("wrath-and-glory", "worldSchemaVersion", {
        name: "World Version",
        hint: "Used to automatically upgrade worlds data when the system is upgraded.",
        scope: "world",
        config: true,
        default: 0,
        type: Number,
    });
});

Hooks.once("ready", () => {
    migrateWorld();
});