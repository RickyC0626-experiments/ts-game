// src/utils/lifecycle/lifecycle.h.ts

export interface IAwake
{
    Awake(): void
}

export interface IUpdate
{
    Update(deltaTime: number): void
}