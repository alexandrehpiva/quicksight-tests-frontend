import React, { useEffect, useMemo, useRef, useState } from 'react'
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

const Dashboard: React.FC = () => {
  const [embedUrl, setEmbedUrl] = useState<string | null>(null)
  const embeddingContainer = useRef<HTMLDivElement | null>(null)

  const formSchema = useMemo(
    () =>
      Yup.object().shape({
        user: Yup.object().required('User is required'),
        dashboard: Yup.object().required('Dashboard is required')
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

  console.log({ current: embeddingContainer.current })

  const embeddingOptions = useMemo((): EmbeddingOptions | null => {
    if (embedUrl) {
      return {
        url: embedUrl,
        container: embeddingContainer.current || '',
        scrolling: 'no',
        height: '100%',
        width: '100%',
        parameters: {
          country: 'Brazil'
        },
        errorCallback: (error: any) => {
          console.error(error)
        },
        loadCallback: () => {
          console.log('Loaded')
        },
        locale: 'pt-BR',
        printEnabled: true
        // dashboardId,
      }
    }
    return null
  }, [embedUrl])

  const iframeToEmbed: HTMLIFrameElement | null = useMemo(() => {
    if (embeddingOptions) {
      return embedDashboard(embeddingOptions)
    }
    return null
  }, [embeddingOptions])

  const onSubmit = async ({ dashboard, user }: typeof initialValues) => {
    console.log('Getting embed url')
    console.log({ dashboard, user })
    if (!dashboard || !user) {
      console.error('Dashboard or user not found')
      return
    }
    const embedUrl = await getDashboardEmbedUrl(dashboard.DashboardId, user.Arn)
    setEmbedUrl(embedUrl)
    console.log('Embed url', embedUrl)
  }

  return (
    <DefaultPage>
      <Detail>
        <h1>Dashboard</h1>
        <Formik initialValues={initialValues} validationSchema={formSchema} onSubmit={onSubmit} validateOnChange={false}>
          {({ setFieldValue, errors, isSubmitting }) => (
            <Form>
              <FormBody type="flex" flexRow alignItems="flex-end">
                <SelectAsync
                  name="user"
                  label="User"
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
                <SendButton type="submit" disabled={isSubmitting || Object.keys(errors).length > 0} loading={isSubmitting}>
                  Send
                </SendButton>
              </FormBody>
            </Form>
          )}
        </Formik>
        {iframeToEmbed && <div ref={embeddingContainer} />}
      </Detail>
    </DefaultPage>
  )
}

export default Dashboard
