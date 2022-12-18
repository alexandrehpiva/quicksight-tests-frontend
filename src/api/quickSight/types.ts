export type QuickSightDashboard = {
  Arn: string
  DashboardId: string
  Name: string
  CreatedTime: string
  LastUpdatedTime: string
  PublishedVersionNumber: number
  LastPublishedTime: string
}

export type QuickSightAnalysis = {
  Arn: string
  AnalysisId: string
  Name: string
  Status: string
  CreatedTime: string
  LastUpdatedTime: string
}

export type QuickSightUser = {
  Arn: string
  UserName: string
  Email: string
  Role: string
  IdentityType: string
  Active: boolean
  PrincipalId: string
}
