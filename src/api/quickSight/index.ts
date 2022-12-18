import { defaultRequest } from '../request/defaultRequest'
import { QuickSightDashboard, QuickSightAnalysis, QuickSightUser } from './types'

export const quickSight = {
  // getDashboardList: async () => defaultRequest.get<QuickSightDashboard[]>('/quicksight/dashboards'),
  getDashboardList: async (name?: string) => {
    const { data: dashboardList } = await defaultRequest.get<QuickSightDashboard[]>('/quicksight/dashboards')
    if (!name) {
      return dashboardList
    }
    return dashboardList.filter((dashboard) => dashboard.Name === name)
  },
  // getAnalysisList: async () => defaultRequest.get<QuickSightAnalysis[]>('/quicksight/analyses'),
  getAnalysisList: async (name?: string) => {
    const { data: analysisList } = await defaultRequest.get<QuickSightAnalysis[]>('/quicksight/analyses')
    if (!name) {
      return analysisList
    }
    return analysisList.filter((analysis) => analysis.Name === name)
  },
  // getUserList: async () => defaultRequest.get<QuickSightUser[]>('/quicksight/users'),
  getUserList: async (userName?: string) => {
    const { data: userList } = await defaultRequest.get<QuickSightUser[]>('/quicksight/users')
    if (!userName) {
      return userList
    }
    return userList.filter((user) => user.UserName === userName)
  },
  getDashboardEmbeddingUrl: async (dashboardId: string) => defaultRequest.get<string>(`/quicksight/dashboards/${dashboardId}/embedding-url`)
}
