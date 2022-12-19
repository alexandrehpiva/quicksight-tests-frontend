import React, { useMemo } from 'react'
import DefaultPage from '../../components/DefaultPage'
import { Detail } from '../../components/DefaultPage/Detail'
import { QuickSightDashboard, QuickSightUser } from '../../api/quickSight/types'
import { api } from '../../api'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Form, FormBody } from '../../components/Form/styles'
import SelectAsync from '../../components/Form/SelectAsync'
import { SendButton } from './styles'
import { embedDashboard, embedVisual, embedSession, embedQSearchBar } from 'amazon-quicksight-embedding-sdk'

const CONTAINER_ID = 'embeddingContainer'

const Dashboard: React.FC = () => {
  const formSchema = useMemo(
    () =>
      Yup.object().shape({
        user: Yup.object().nullable().required('Informe o Usuário'),
        dashboard: Yup.object().nullable().required('Escolha o Dashboard')
      }),
    []
  )

  const initialValues: { user?: QuickSightUser; dashboard?: QuickSightDashboard } = useMemo(
    () => ({
      user: undefined,
      dashboard: undefined
    }),
    []
  )

  const getUserOptions = async (inputValue: string): Promise<QuickSightUser[]> => {
    const { data } = await api.quickSight.getUserList(inputValue)
    return data
  }

  const getDashboardOptions = async (inputValue: string): Promise<QuickSightDashboard[]> => {
    const { data } = await api.quickSight.getDashboardList(inputValue)
    return data
  }

  const getDashboardEmbedUrl = async (dashboardId: string, userArn: string) => {
    const { data } = await api.quickSight.getDashboardEmbeddingUrl(dashboardId, userArn)
    return data
  }

  const embed = (embedUrl: string) =>
    new Promise<void>((resolve, reject) => {
      console.log('Embed url', embedUrl)
      const dashboardEmbed = embedDashboard({
        url: embedUrl,
        container: `#${CONTAINER_ID}`,
        scrolling: 'yes',
        height: '100%',
        width: '100%',
        errorCallback: (error: any) => {
          console.error({ error })
          reject(error)
        },
        loadCallback: () => {
          console.log('Loaded!')
          resolve()
        },
        undoRedoDisabled: false,
        resetDisabled: false
      })
      console.log('Dashboard', dashboardEmbed)
    })

  const clear = () => {
    const container = document.getElementById(CONTAINER_ID)
    if (container) {
      container.innerHTML = ''
    }
  }

  const onSubmit = async ({ dashboard, user }: typeof initialValues) => {
    console.log('Getting embed url')
    console.log({ dashboard, user })
    console.log({
      dashboardId: dashboard?.DashboardId,
      userArn: user?.Arn
    })
    if (!dashboard || !user) {
      console.error('Dashboard or user not found')
      return
    }
    clear()
    const embedUrl = await getDashboardEmbedUrl(dashboard.DashboardId, user.Arn)
    return await embed(embedUrl)
  }

  return (
    <DefaultPage>
      <Detail>
        <h1>POC - QuickSight Dashboard Embedding</h1>
        <Formik initialValues={initialValues} validationSchema={formSchema} onSubmit={onSubmit} validateOnChange={false}>
          {({ setFieldValue, isSubmitting }) => (
            <Form>
              <FormBody type="flex" flexRow alignItems="flex-start">
                <SelectAsync
                  name="user"
                  label="Usuário"
                  loadOptions={getUserOptions}
                  onChange={(option: QuickSightUser | null) => {
                    setFieldValue('user', option?.UserName)
                  }}
                  optionLabel="UserName"
                  optionValue="UserName"
                  fontSizeLabel="12px"
                />
                <SelectAsync
                  name="dashboard"
                  label="Dashboard"
                  loadOptions={getDashboardOptions}
                  onChange={(option: QuickSightDashboard | null) => {
                    setFieldValue('dashboard', option?.Name)
                  }}
                  optionLabel="Name"
                  optionValue="Name"
                  fontSizeLabel="12px"
                />
                <SendButton type="submit" disabled={isSubmitting} loading={isSubmitting}>
                  {isSubmitting ? 'Carregando...' : 'Carregar'}
                </SendButton>
              </FormBody>
            </Form>
          )}
        </Formik>
        <div id={CONTAINER_ID} style={{ height: '100%', width: '100%' }} />
      </Detail>
    </DefaultPage>
  )
}

export default Dashboard
