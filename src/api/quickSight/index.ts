import { defaultRequest } from '../request/defaultRequest'
import {
  QuickSightDashboard,
  QuickSightAnalysis,
  QuickSightUser,
} from './types'

export const quickSight = {
  getDashboardList: async () =>
    defaultRequest.get<QuickSightDashboard[]>('/quicksight/dashboards'),
  getAnalysisList: async () =>
    defaultRequest.get<QuickSightAnalysis[]>('/quicksight/analyses'),
  getDashboardEmbeddingUrl: async (dashboardId: string) =>
    defaultRequest.get<string>(
      `/quicksight/dashboards/${dashboardId}/embedding-url`,
    ),
  getUserList: async () =>
    defaultRequest.get<QuickSightUser[]>('/quicksight/users'),
}
