import { defaultRequest } from '../request/defaultRequest'
import { QuickSightDashboard, QuickSightAnalysis, QuickSightUser } from './types'

export const quickSight = {
  // getDashboardList: async () => defaultRequest.get<QuickSightDashboard[]>('/quicksight/dashboards'),
  getDashboardList: async (name?: string) => {
    const result = await defaultRequest.get<QuickSightDashboard[]>('/quicksight/dashboards')
    if (!name) {
      return result
    }
    return {
      ...result,
      data: result.data.filter((dashboard) => dashboard.Name.toLowerCase().includes(name.toLowerCase()))
    }
  },
  // getAnalysisList: async () => defaultRequest.get<QuickSightAnalysis[]>('/quicksight/analyses'),
  getAnalysisList: async (name?: string) => {
    const result = await defaultRequest.get<QuickSightAnalysis[]>('/quicksight/analyses')
    if (!name) {
      return result
    }
    return {
      ...result,
      data: result.data.filter((analysis) => analysis.Name.toLowerCase().includes(name.toLowerCase()))
    }
  },
  // getUserList: async () => defaultRequest.get<QuickSightUser[]>('/quicksight/users'),
  getUserList: async (userName?: string) => {
    const result = await defaultRequest.get<QuickSightUser[]>('/quicksight/users')
    if (!userName) {
      return result
    }
    return {
      ...result,
      data: result.data.filter((user) => user.UserName.toLowerCase().includes(userName.toLowerCase()))
    }
  },
  getDashboardEmbeddingUrl: async (dashboardId: string) => defaultRequest.get<string>(`/quicksight/dashboards/${dashboardId}/embedding-url`)
}
