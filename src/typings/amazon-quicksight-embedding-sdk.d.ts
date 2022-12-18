type EmbeddingOptions = {
  dashboardId?: string
  url: string
  container: HTMLElement | string
  errorCallback?: Function
  loadCallback?: Function
  parametersChangeCallback?: Function
  selectedSheetChangeCallback?: Function
  parameters?: Object
  printEnabled?: boolean
  sheetTabsDisabled?: boolean
  sheetId?: string
  defaultEmbeddingVisualType?: string
  iframeResizeOnSheetChange?: boolean
  width?: string
  height?: string
  loadingHeight?: string
  scrolling?: string
  className?: string
  locale?: string
  footerPaddingEnabled?: boolean
  undoRedoDisabled?: boolean
  resetDisabled?: boolean
  isQEmbedded?: boolean
  qSearchBarOptions?: QSearchBarOptions
}

type QSearchBarOptions = {
  expandCallback: ?Function
  collapseCallback: ?Function
  iconDisabled: ?boolean
  topicNameDisabled: ?boolean
  themeId: ?string
  allowTopicSelection: ?boolean
}

type EmbeddingOptions = {
  url: string
  container: HTMLElement | string
  errorCallback?: Function
  loadCallback?: Function
  parametersChangeCallback?: Function
  selectedSheetChangeCallback?: Function
  parameters?: Object
  printEnabled?: boolean
  sheetTabsDisabled?: boolean
  defaultEmbeddingVisualType?: string
  width?: string
  height?: string
  loadingHeight?: string
  scrolling?: string
  className?: string
  locale?: string
  footerPaddingEnabled?: boolean
}

interface EmbeddableObject {
  url: string
  container?: HTMLElement
  parameters?: Object
  defaultEmbeddingVisualType?: string
  getActiveParametersCallback?: Function
  getSheetsCallback?: Function
  on: Function
  off: Function
  trigger: Function
  iframe: HTMLIFrameElement

  getUrl(): string
  getContainer(): HTMLElement | void
  getParameters(): Object | void
  getActiveParameterValues(callback: Function): void
  getSheets(callback: Function): void
  handleMessageEvent(event: Object, options: EmbeddingOptions): void
  getDefaultEmbeddingVisualType(): string | void
  setParameters(parameters: Object): void
  setDefaultEmbeddingVisualType(defaultEmbeddingVisualType: string): void
  generateDefaultEmbeddingVisualTypeEvent(defaultEmbeddingVisualType: string): Object
}

interface EmbeddableDashboard extends EmbeddableObject {
  navigateToDashboard: Function
  navigateToSheet: Function
  initiatePrint: Function
}

function embedDashboard(options: EmbeddingOptions): EmbeddableDashboard
function embedSession(options: EmbeddingOptions): EmbeddableObject

declare module 'amazon-quicksight-embedding-sdk'
