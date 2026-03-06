export function getNextCycle(currentCycle: number): number {
    return currentCycle === 0 ? 1 : currentCycle + 1;

}