import { ViewStyle } from 'react-native'

import {
  DateRangeHandler,
  EventCellStyle,
  EventRenderer,
  HeaderRenderer,
  ICalendarEvent,
  Mode,
  MonthHeaderRenderer,
  WeekNum,
} from '../interfaces'

export interface CalendarContainerProps<T> {
  events: ICalendarEvent<T>[]
  height: number
  overlapOffset?: number
  eventCellStyle?: EventCellStyle<T>
  calendarContainerStyle?: ViewStyle
  headerContainerStyle?: ViewStyle
  bodyContainerStyle?: ViewStyle
  renderEvent?: EventRenderer<T>
  renderHeader?: HeaderRenderer<T>
  renderHeaderForMonthView?: MonthHeaderRenderer
  ampm?: boolean
  date?: Date
  locale?: string
  hideNowIndicator?: boolean
  mode?: Mode
  scrollOffsetMinutes?: number
  showTime?: boolean
  swipeEnabled?: boolean
  weekStartsOn?: WeekNum
  onChangeDate?: DateRangeHandler
  onPressCell?: (date: Date) => void
  onPressDateHeader?: (date: Date) => void
  onPressEvent?: (event: ICalendarEvent<T>) => void
  weekEndsOn?: WeekNum
  maxVisibleEventCount?: number
}
declare function _CalendarContainer<T>({
  events,
  height,
  ampm,
  date,
  eventCellStyle,
  locale,
  hideNowIndicator,
  mode,
  overlapOffset,
  scrollOffsetMinutes,
  showTime,
  headerContainerStyle,
  bodyContainerStyle,
  swipeEnabled,
  weekStartsOn,
  onChangeDate,
  onPressCell,
  onPressDateHeader,
  onPressEvent,
  renderEvent,
  renderHeader: HeaderComponent,
  renderHeaderForMonthView: HeaderComponentForMonthView,
  weekEndsOn,
  maxVisibleEventCount,
}: CalendarContainerProps<T>): JSX.Element
export declare const CalendarContainer: typeof _CalendarContainer
export {}
