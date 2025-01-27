import { ViewStyle } from 'react-native'

import { CalendarTouchableOpacityProps, EventCellStyle, ICalendarEvent } from '../interfaces'

interface UseCalendarTouchableOpacityPropsProps<T> {
  event: ICalendarEvent<T>
  eventCellStyle?: EventCellStyle<T>
  onPressEvent?: (e: ICalendarEvent<T>) => void
  injectedStyles?: ViewStyle[]
}
export declare function useCalendarTouchableOpacityProps<T>({
  event,
  eventCellStyle,
  injectedStyles,
  onPressEvent,
}: UseCalendarTouchableOpacityPropsProps<T>): CalendarTouchableOpacityProps
export {}
