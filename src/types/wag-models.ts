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

export interface ActorData {
    name: string
    data: {
        attributes: {
            strength?: {
                rating: number
                cost: number
            },
            toughness?: {
                rating: number
                cost: number
            },
            agility?: {
                rating: number
                cost: number
            },
            initiative?: {
                rating: number
                cost: number
            },
            willpower?: {
                rating: number
                cost: number
            },
            intellect?: {
                rating: number
                cost: number
            },
            fellowship?: {
                rating: number
                cost: number
            }
        },
        skills: {
            athletics?: {
                rating: number
                cost: number
            },
            awareness?: {
                rating: number
                cost: number
            },
            ballisticSkill?: {
                rating: number
                cost: number
            },
            cunning?: {
                rating: number
                cost: number
            },
            deception?: {
                rating: number
                cost: number
            },
            insight?: {
                rating: number
                cost: number
            },
            intimidation?: {
                rating: number
                cost: number
            },
            investigation?: {
                rating: number
                cost: number
            },
            leadership?: {
                rating: number
                cost: number
            },
            medicae?: {
                rating: number
                cost: number
            },
            persusasion?: {
                rating: number
                cost: number
            },
            pilot?: {
                rating: number
                cost: number
            },
            psychicMastery?: {
                rating: number
                cost: number
            },
            scholar?: {
                rating: number
                cost: number
            },
            stealth?: {
                rating: number
                cost: number
            },
            survival?: {
                rating: number
                cost: number
            },
            tech?: {
                rating: number
                cost: number
            },
            weaponSkill?: {
                rating: number
                cost: number
            }
        },
        bio: {
            species: string
            faction: string
            archetype: string
        }
        advances: {
            tier: number
            rank: number
            species: number
            experience: {
                current: number
            }
        }
        combat: {
            wounds: {
                value: number
            },
            shock: {
                value: number
            },
            resolve: {
                bonus: number,
                total: number
            },
            size: "tiny" | "small" | "average" | "large" | "huge" | "gargantuan",
            speed: number,
            passiveAwareness: {
                bonus: number,
                total: number
            },
            stealth: number
        }
        resources: {
            wrath: number,
            faith?: {
                total: number
            },
            wealth: number,
            influence: number
        },
        corruption?: {
            current: number
        },
        notes: string
    }
    items: Array<WrathAndGloryItem>
    flags?: {
        exportSource?: {
            world: string,
            system: string,
            coreVersion: string,
            systemVersion: string
        }
    }
}