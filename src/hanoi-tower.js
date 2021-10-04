import { NotImplementedError } from '../extensions/index.js';

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
export default function calculateHanoi(disks, turnsSpeed) {
  const turnsSpeedSec = turnsSpeed / 3600
  const turns = Math.pow(2, disks) - 1
  const seconds = Math.floor(turns / turnsSpeedSec)
  return { turns, seconds }
}
