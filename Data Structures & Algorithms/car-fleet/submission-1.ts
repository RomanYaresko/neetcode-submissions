class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        let positionSpeedItems: number[][] = [];
        for (let i = 0; i < position.length; i++) {
            positionSpeedItems.push([position[i], speed[i]]);
        }
        positionSpeedItems.sort((a, b) => b[0] - a[0]);

        let fleetStack: number[] = [];
        for (const positionSpeedItem of positionSpeedItems) {
            const time = (target - positionSpeedItem[0]) / positionSpeedItem[1]

            if (fleetStack.length === 0 || fleetStack[fleetStack.length - 1] < time) {
                fleetStack.push(time);
            }
        }

        return fleetStack.length;
    }
}
