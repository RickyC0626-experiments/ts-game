// src/game/game.ts

import { Entity } from '@/utils'

export class Game extends Entity
{
    private _lastTimestamp = 0

    public Update(): void
    {
        const deltaTime = (Date.now() - this._lastTimestamp) / 1000

        // Update all components
        super.Update(deltaTime)

        // Update timestamp
        this._lastTimestamp = Date.now()

        // Invoke on next frame
        window.requestAnimationFrame(() => this.Update())
    }
}