import * as S from '@effect-ts/schema'
import { makeEvent, utilsFor } from '@eirene-onboarding-3/core'

export class TodoAdded extends makeEvent(
  'TodoAdded', // Tag for the event
  S.props({
    id: S.prop(S.string), // Define the properties for the event
    title: S.prop(S.string)
  })
) {}

// Generate the utility functions for the TodoAdded event
export const {
  parseO: parseTodoAddedO,
  parseE: parseTodoAddedE,
  parseT: parseTodoAdded,
  guard: isTodoAdded,
  encode: encodeTodoAdded,
} = utilsFor(TodoAdded)
