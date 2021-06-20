"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeHandlebars = void 0;
const initializeHandlebars = () => {
    registerHandlebarsHelpers();
    preloadHandlebarsTemplates();
};
exports.initializeHandlebars = initializeHandlebars;
function preloadHandlebarsTemplates() {
    const templatePaths = [
        "systems/wrath-and-glory/template/sheet/agent.html",
        "systems/wrath-and-glory/template/sheet/threat.html",
        "systems/wrath-and-glory/template/sheet/tab/advances.html",
        "systems/wrath-and-glory/template/sheet/tab/bonus.html",
        "systems/wrath-and-glory/template/sheet/tab/combat.html",
        "systems/wrath-and-glory/template/sheet/tab/combat-threat.html",
        "systems/wrath-and-glory/template/sheet/tab/gear.html",
        "systems/wrath-and-glory/template/sheet/tab/gear-threat.html",
        "systems/wrath-and-glory/template/sheet/tab/notes.html",
        "systems/wrath-and-glory/template/sheet/tab/settings.html",
        "systems/wrath-and-glory/template/sheet/tab/stats.html",
        "systems/wrath-and-glory/template/sheet/tab/talents.html",
        "systems/wrath-and-glory/template/sheet/keyword.html",
        "systems/wrath-and-glory/template/sheet/talent.html",
        "systems/wrath-and-glory/template/sheet/ability.html",
        "systems/wrath-and-glory/template/sheet/psychic-power.html",
        "systems/wrath-and-glory/template/sheet/armour.html",
        "systems/wrath-and-glory/template/sheet/weapon.html",
        "systems/wrath-and-glory/template/sheet/weapon-upgrade.html",
        "systems/wrath-and-glory/template/sheet/gear.html",
        "systems/wrath-and-glory/template/sheet/ascension.html",
        "systems/wrath-and-glory/template/sheet/traumatic-injury.html",
        "systems/wrath-and-glory/template/sheet/memorable-injury.html",
        "systems/wrath-and-glory/template/sheet/mutation.html",
        "systems/wrath-and-glory/template/sheet/ammo.html",
        "systems/wrath-and-glory/template/sheet/augmentic.html",
        "systems/wrath-and-glory/template/chat/item.html",
        "systems/wrath-and-glory/template/chat/roll.html",
        "systems/wrath-and-glory/template/chat/damage.html",
        "systems/wrath-and-glory/template/dialog/common-roll.html",
        "systems/wrath-and-glory/template/dialog/weapon-roll.html",
        "systems/wrath-and-glory/template/dialog/psychic-roll.html"
    ];
    return loadTemplates(templatePaths);
}
function registerHandlebarsHelpers() {
    Handlebars.registerHelper("multiTarget", function (isMultiTarget) {
        if (isMultiTarget) {
            return game.i18n.localize("DIALOG.YES");
        }
        else {
            return game.i18n.localize("DIALOG.NO");
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlYmFycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vaGFuZGxlYmFycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBTyxNQUFNLG9CQUFvQixHQUFHLEdBQUcsRUFBRTtJQUN2Qyx5QkFBeUIsRUFBRSxDQUFDO0lBQzVCLDBCQUEwQixFQUFFLENBQUM7QUFDL0IsQ0FBQyxDQUFDO0FBSFcsUUFBQSxvQkFBb0Isd0JBRy9CO0FBRUYsU0FBUywwQkFBMEI7SUFDakMsTUFBTSxhQUFhLEdBQUc7UUFDcEIsbURBQW1EO1FBQ25ELG9EQUFvRDtRQUNwRCwwREFBMEQ7UUFDMUQsdURBQXVEO1FBQ3ZELHdEQUF3RDtRQUN4RCwrREFBK0Q7UUFDL0Qsc0RBQXNEO1FBQ3RELDZEQUE2RDtRQUM3RCx1REFBdUQ7UUFDdkQsMERBQTBEO1FBQzFELHVEQUF1RDtRQUN2RCx5REFBeUQ7UUFDekQscURBQXFEO1FBQ3JELG9EQUFvRDtRQUNwRCxxREFBcUQ7UUFDckQsMkRBQTJEO1FBQzNELG9EQUFvRDtRQUNwRCxvREFBb0Q7UUFDcEQsNERBQTREO1FBQzVELGtEQUFrRDtRQUNsRCx1REFBdUQ7UUFDdkQsOERBQThEO1FBQzlELDhEQUE4RDtRQUM5RCxzREFBc0Q7UUFDdEQsa0RBQWtEO1FBQ2xELHVEQUF1RDtRQUN2RCxpREFBaUQ7UUFDakQsaURBQWlEO1FBQ2pELG1EQUFtRDtRQUNuRCwwREFBMEQ7UUFDMUQsMERBQTBEO1FBQzFELDJEQUEyRDtLQUM1RCxDQUFDO0lBQ0YsT0FBTyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDdEMsQ0FBQztBQUVELFNBQVMseUJBQXlCO0lBRWhDLFVBQVUsQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLFVBQVUsYUFBYTtRQUM5RCxJQUFJLGFBQWEsRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDM0M7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUE7U0FDdkM7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUVMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbGl6ZUhhbmRsZWJhcnMgPSAoKSA9PiB7XG4gIHJlZ2lzdGVySGFuZGxlYmFyc0hlbHBlcnMoKTtcbiAgcHJlbG9hZEhhbmRsZWJhcnNUZW1wbGF0ZXMoKTtcbn07XG5cbmZ1bmN0aW9uIHByZWxvYWRIYW5kbGViYXJzVGVtcGxhdGVzKCkge1xuICBjb25zdCB0ZW1wbGF0ZVBhdGhzID0gW1xuICAgIFwic3lzdGVtcy93cmF0aC1hbmQtZ2xvcnkvdGVtcGxhdGUvc2hlZXQvYWdlbnQuaHRtbFwiLFxuICAgIFwic3lzdGVtcy93cmF0aC1hbmQtZ2xvcnkvdGVtcGxhdGUvc2hlZXQvdGhyZWF0Lmh0bWxcIixcbiAgICBcInN5c3RlbXMvd3JhdGgtYW5kLWdsb3J5L3RlbXBsYXRlL3NoZWV0L3RhYi9hZHZhbmNlcy5odG1sXCIsXG4gICAgXCJzeXN0ZW1zL3dyYXRoLWFuZC1nbG9yeS90ZW1wbGF0ZS9zaGVldC90YWIvYm9udXMuaHRtbFwiLFxuICAgIFwic3lzdGVtcy93cmF0aC1hbmQtZ2xvcnkvdGVtcGxhdGUvc2hlZXQvdGFiL2NvbWJhdC5odG1sXCIsXG4gICAgXCJzeXN0ZW1zL3dyYXRoLWFuZC1nbG9yeS90ZW1wbGF0ZS9zaGVldC90YWIvY29tYmF0LXRocmVhdC5odG1sXCIsXG4gICAgXCJzeXN0ZW1zL3dyYXRoLWFuZC1nbG9yeS90ZW1wbGF0ZS9zaGVldC90YWIvZ2Vhci5odG1sXCIsXG4gICAgXCJzeXN0ZW1zL3dyYXRoLWFuZC1nbG9yeS90ZW1wbGF0ZS9zaGVldC90YWIvZ2Vhci10aHJlYXQuaHRtbFwiLFxuICAgIFwic3lzdGVtcy93cmF0aC1hbmQtZ2xvcnkvdGVtcGxhdGUvc2hlZXQvdGFiL25vdGVzLmh0bWxcIixcbiAgICBcInN5c3RlbXMvd3JhdGgtYW5kLWdsb3J5L3RlbXBsYXRlL3NoZWV0L3RhYi9zZXR0aW5ncy5odG1sXCIsXG4gICAgXCJzeXN0ZW1zL3dyYXRoLWFuZC1nbG9yeS90ZW1wbGF0ZS9zaGVldC90YWIvc3RhdHMuaHRtbFwiLFxuICAgIFwic3lzdGVtcy93cmF0aC1hbmQtZ2xvcnkvdGVtcGxhdGUvc2hlZXQvdGFiL3RhbGVudHMuaHRtbFwiLFxuICAgIFwic3lzdGVtcy93cmF0aC1hbmQtZ2xvcnkvdGVtcGxhdGUvc2hlZXQva2V5d29yZC5odG1sXCIsXG4gICAgXCJzeXN0ZW1zL3dyYXRoLWFuZC1nbG9yeS90ZW1wbGF0ZS9zaGVldC90YWxlbnQuaHRtbFwiLFxuICAgIFwic3lzdGVtcy93cmF0aC1hbmQtZ2xvcnkvdGVtcGxhdGUvc2hlZXQvYWJpbGl0eS5odG1sXCIsXG4gICAgXCJzeXN0ZW1zL3dyYXRoLWFuZC1nbG9yeS90ZW1wbGF0ZS9zaGVldC9wc3ljaGljLXBvd2VyLmh0bWxcIixcbiAgICBcInN5c3RlbXMvd3JhdGgtYW5kLWdsb3J5L3RlbXBsYXRlL3NoZWV0L2FybW91ci5odG1sXCIsXG4gICAgXCJzeXN0ZW1zL3dyYXRoLWFuZC1nbG9yeS90ZW1wbGF0ZS9zaGVldC93ZWFwb24uaHRtbFwiLFxuICAgIFwic3lzdGVtcy93cmF0aC1hbmQtZ2xvcnkvdGVtcGxhdGUvc2hlZXQvd2VhcG9uLXVwZ3JhZGUuaHRtbFwiLFxuICAgIFwic3lzdGVtcy93cmF0aC1hbmQtZ2xvcnkvdGVtcGxhdGUvc2hlZXQvZ2Vhci5odG1sXCIsXG4gICAgXCJzeXN0ZW1zL3dyYXRoLWFuZC1nbG9yeS90ZW1wbGF0ZS9zaGVldC9hc2NlbnNpb24uaHRtbFwiLFxuICAgIFwic3lzdGVtcy93cmF0aC1hbmQtZ2xvcnkvdGVtcGxhdGUvc2hlZXQvdHJhdW1hdGljLWluanVyeS5odG1sXCIsXG4gICAgXCJzeXN0ZW1zL3dyYXRoLWFuZC1nbG9yeS90ZW1wbGF0ZS9zaGVldC9tZW1vcmFibGUtaW5qdXJ5Lmh0bWxcIixcbiAgICBcInN5c3RlbXMvd3JhdGgtYW5kLWdsb3J5L3RlbXBsYXRlL3NoZWV0L211dGF0aW9uLmh0bWxcIixcbiAgICBcInN5c3RlbXMvd3JhdGgtYW5kLWdsb3J5L3RlbXBsYXRlL3NoZWV0L2FtbW8uaHRtbFwiLFxuICAgIFwic3lzdGVtcy93cmF0aC1hbmQtZ2xvcnkvdGVtcGxhdGUvc2hlZXQvYXVnbWVudGljLmh0bWxcIixcbiAgICBcInN5c3RlbXMvd3JhdGgtYW5kLWdsb3J5L3RlbXBsYXRlL2NoYXQvaXRlbS5odG1sXCIsXG4gICAgXCJzeXN0ZW1zL3dyYXRoLWFuZC1nbG9yeS90ZW1wbGF0ZS9jaGF0L3JvbGwuaHRtbFwiLFxuICAgIFwic3lzdGVtcy93cmF0aC1hbmQtZ2xvcnkvdGVtcGxhdGUvY2hhdC9kYW1hZ2UuaHRtbFwiLFxuICAgIFwic3lzdGVtcy93cmF0aC1hbmQtZ2xvcnkvdGVtcGxhdGUvZGlhbG9nL2NvbW1vbi1yb2xsLmh0bWxcIixcbiAgICBcInN5c3RlbXMvd3JhdGgtYW5kLWdsb3J5L3RlbXBsYXRlL2RpYWxvZy93ZWFwb24tcm9sbC5odG1sXCIsXG4gICAgXCJzeXN0ZW1zL3dyYXRoLWFuZC1nbG9yeS90ZW1wbGF0ZS9kaWFsb2cvcHN5Y2hpYy1yb2xsLmh0bWxcIlxuICBdO1xuICByZXR1cm4gbG9hZFRlbXBsYXRlcyh0ZW1wbGF0ZVBhdGhzKTtcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJIYW5kbGViYXJzSGVscGVycygpIHtcblxuICBIYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyKFwibXVsdGlUYXJnZXRcIiwgZnVuY3Rpb24gKGlzTXVsdGlUYXJnZXQpIHtcbiAgICBpZiAoaXNNdWx0aVRhcmdldCkge1xuICAgICAgICByZXR1cm4gZ2FtZS5pMThuLmxvY2FsaXplKFwiRElBTE9HLllFU1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdhbWUuaTE4bi5sb2NhbGl6ZShcIkRJQUxPRy5OT1wiKVxuICAgIH1cbiAgfSk7XG5cbn0iXX0=