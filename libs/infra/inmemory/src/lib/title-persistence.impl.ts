import * as A from '@effect-ts/core/Collections/Immutable/Array'
import * as T from '@effect-ts/core/Effect'
import * as Ref from '@effect-ts/core/Effect/Ref'
import * as L from '@effect-ts/core/Effect/Layer'
import { pipe } from '@effect-ts/core/Function'

import { TitlePersistence } from '@eirene-onboarding-3/model'

export const InmemoryTitlePersistence = (initialTitles: A.Array<string>) =>
  pipe(
    Ref.makeRef(initialTitles), // Create a reference for initial titles
    T.map(
      (ref): TitlePersistence => ({
        // Save the title by appending it to the array of titles
        save: (title) => pipe(ref, Ref.update(A.append(title))),
        
        // List only the last 5 titles
        list: pipe(
          ref, 
          Ref.get, 
          T.map((titles) => A.takeRight_(titles, 5)) // Get only the last 5 elements
        ),
      })
    ),
    L.fromEffect(TitlePersistence)
  )
