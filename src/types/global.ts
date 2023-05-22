//Toats Type
type ToastType = 'show' | 'warning' | 'error' | 'duration'

interface ITableDataType {
  id: number
  avatar: string
  name: string
  description: string
}

type TablePaginationPositionTop = 'topLeft' | 'topCenter' | 'topRight'

type TablePaginationPositionBottom = 'bottomLeft' | 'bottomCenter' | 'bottomRight'

type RadioOption = {
  label: string
  value: any
}

type SelectOption = {
  label: string
  value: string
}

export type {
  ToastType,
  ITableDataType,
  TablePaginationPositionTop,
  TablePaginationPositionBottom,
  RadioOption,
  SelectOption
}
