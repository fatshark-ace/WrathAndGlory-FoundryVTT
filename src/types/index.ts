// A lot of these might be replaced with FoundryVTT types when they're updated.
// Leave them as general guard rails for now.

import {WrathAndGloryItem} from "../common/item";

export interface Skill {
    total: number
    bonus: number
    rating: number
    attribute: string
    cost: number
    isLeft: boolean
    isRight: boolean
}

export interface Attribute {
    total: number
    bonus: number
    rating: number
    cost: number
}

export interface Combat {
    resilence: {
        total: number
        armor: number
        bonus: number
    }
    passiveAwareness: {
        total: number
        bonus: number
    }
    defense: {
        total: number
        bonus: number
    }
    resolve: {
        total: number
        bonus: number
    }
    wounds: {
        max: number
        bonus: number
    }
    determination: {
        total: number
        bonus: number
    }
    shock: {
        max: number
        bonus: number
    }
    size: string
}

export interface Data {
    name: string
    type: string
}

export interface RollData {
    name: string
    skillName: string
    rank: number
    difficulty: {
        target: number
        penalty: number
        rank: string
    }
    pool: {
        size: number
        bonus: number
        rank: string
    }
    wrath: {
        base: number
        isWeapon: boolean
        isCommon: boolean
        isPsy: boolean
    }
    dn: number
    weapon: {
        traits: any
        damage: {
            base: number
            bonus: number
            rank: string
        }
        ed: {
            base: number
            bonus: number
            rank: string
            die: DieOptions
        }
        ap: {
            base: number
            bonus: number
            rank: string
            total?: number
        }
        potency: string
    }
    result: {
        isSuccess: boolean
        isWrathCritical: boolean
        isWrathComplication: boolean
        wrath: number
        dice: Array<Die>
        damage: {
            dice: Array<Die>
            total: number
        }
        success: number
        failure: number
        shifting: number
    }
    rolls: {
        hit: Array<Roll>
        damage: Array<Roll>
    }
}

export interface DieOptions extends Record<string, number> {
    one: number
    two: number
    three: number
    four: number
    five: number
    six: number
}

export interface Die {
    name: string,
    value: number,
    score: number,
    isWrath: boolean
    rerollable: boolean
    weight: number
}

export interface ChatData {
    user: string
    rollMode: string
    content: Html
    whisper?: Array<string>
}

export interface TokenData {
    actorId: string | null
    actorLink: string
    actorData: {
        data?: Record<string, any>
    }
}

export interface Scene {
    tokens: Array<Token>
}

export interface Html {
    find: (_: string) => any
}

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

    type Event = any

    const $: any
    const CONST: any
    const CONFIG: any
    const Hooks: any
    const game: any
    const ui: any
    const foundry: any
    const console: any
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

