// A lot of these might be replaced with FoundryVTT types when they're updated.
// Leave them as general guard rails for now.

import {WrathAndGloryItem} from "../common/item";
import {TokenData} from "./wag-models";

declare global {
    class Roll {
        constructor(formula: string, opts?: {})

        public terms: Array<{
            results: Array<{
                result: number
            }>
        }>

        public total: number

        public evaluate(): Roll
    }

    class Actor {
        public data: any
        public type: any
        public update(actorData: any): void
        public items: Array<WrathAndGloryItem>

        public prepareData(): any
    }

    class Token {
        constructor(_: TokenData)

        actor: Actor
        data: any
    }

    class Dialog {
        constructor(_: any, __: any)

        public render(_: boolean): void
    }

    class Item {
        public data: any
        public type: any
        _id: string
    }

    type FoundryEvent = any

    const $: any
    const CONST: any
    const CONFIG: any
    const Hooks: any
    const game: any
    const ui: any
    const foundry: any
    const Actors: any
    const Items: any
    const ItemSheet: any
    const ActorSheet: any
    const ChatMessage: any
    const Handlebars: {
        registerHelper: (_: string, __: (_: boolean) => string) => void
    }

    function renderTemplate(_: string, __: unknown): any

    function loadTemplates(_: Array<string>): void

    function isObjectEmpty(_: any): boolean

    function mergeObject(_: any, __: any, opts?: { enforceTypes: boolean, inplace: boolean }): any

    function expandObject(_: any): void
}