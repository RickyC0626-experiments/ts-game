// src/game/game.ts

import { Entity } from '@/utils'

export class Game extends Entity
{
    public Entities: Entity[] = []

    private _lastTimestamp = 0

    public Awake(): void
    {
        super.Awake()

        // Awake all children
        for(const entity of this.Entities)
        {
            entity.Awake()
        }

        // Make sure Update starts after all entities are awaken
        window.requestAnimationFrame(() =>
        {
            // Set initial timestamp
            this._lastTimestamp = Date.now()

            // Start update loop
            this.Update()
        })
    }

    public Update(): void
    {
        const deltaTime = (Date.now() - this._lastTimestamp) / 1000

        // Update all components
        super.Update(deltaTime)

        // Update all components
        for(const entity of this.Entities)
        {
            entity.Update(deltaTime)
        }

        // Update timestamp
        this._lastTimestamp = Date.now()

        // Invoke on next frame
        window.requestAnimationFrame(() => this.Update())
    }
}