// Entry Type for user entries
type Entry = {
    event: string
    symbol: string
    description: string
    emotion: string
    notes: string
    time: number
    tags: string[]
    starred: boolean
  }

  declare module 'react-datetime-picker/dist/entry.nostyle';