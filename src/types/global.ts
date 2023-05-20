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

export type { ToastType, ITableDataType, TablePaginationPositionTop, TablePaginationPositionBottom }
