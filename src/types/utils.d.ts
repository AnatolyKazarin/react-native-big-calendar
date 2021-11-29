import dayjs from 'dayjs'

import { ICalendarEvent, Mode, WeekNum } from './interfaces'
import { Palette } from './theme/ThemeInterface'

export declare const typedMemo: <T>(c: T) => T
export declare const DAY_MINUTES = 1440
export declare function getDatesInMonth(date?: Date | dayjs.Dayjs, locale?: string): dayjs.Dayjs[]
export declare function getDatesInWeek(
  date?: Date | dayjs.Dayjs,
  weekStartsOn?: WeekNum,
  locale?: string,
): dayjs.Dayjs[]
export declare function getDatesInNextThreeDays(
  date?: Date | dayjs.Dayjs,
  locale?: string,
): dayjs.Dayjs[]
export declare function getDatesInNextOneDay(
  date?: Date | dayjs.Dayjs,
  locale?: string,
): dayjs.Dayjs[]
export declare const hours: number[]
export declare function formatHour(hour: number, ampm?: boolean): string
export declare function isToday(date: dayjs.Dayjs): boolean
export declare function isWeekend(date: dayjs.Dayjs | null): boolean
export declare function getRelativeTopInDay(date: dayjs.Dayjs): number
export declare function todayInMinutes(): number
export declare function modeToNum(mode: Mode, current?: dayjs.Dayjs | Date): number
export declare function formatStartEnd(start: Date, end: Date, format: string): string
export declare function isAllDayEvent(start: Date, end: Date): boolean
export declare function getCountOfEventsAtEvent(
  event: ICalendarEvent<any>,
  eventList: ICalendarEvent<any>[],
): number
export declare function getOrderOfEvent(
  event: ICalendarEvent<any>,
  eventList: ICalendarEvent<any>[],
): number
export declare function getStyleForOverlappingEvent(
  eventPosition: number,
  overlapOffset: number,
  palettes: Palette[],
): {}
export declare function getDatesInNextCustomDays(
  date?: Date | dayjs.Dayjs,
  weekStartsOn?: WeekNum,
  weekEndsOn?: WeekNum,
  locale?: string,
): dayjs.Dayjs[]