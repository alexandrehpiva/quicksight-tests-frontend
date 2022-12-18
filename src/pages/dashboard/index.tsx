import React, { useEffect, useMemo } from 'react'
import DefaultPage from '../../components/DefaultPage'
import { Detail } from '../../components/DefaultPage/Detail'
import { QuickSightDashboard, QuickSightUser } from '../../api/quickSight/types'
import { api } from '../../api'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Form, FormBody, FormFooter } from '../../components/Form/styles'
import SelectAsync from '../../components/Form/SelectAsync'
import { FiltersContainer, SendButton } from './styles'

const Dashboard: React.FC = () => {
  const formSchema = useMemo(
    () =>
      Yup.object().shape({
        user: Yup.object().required('User is required'),
        dashboard: Yup.object().required('Dashboard is required')
      }),
    []
  )

  const initialValues = useMemo(
    () => ({
      user: '',
      dashboard: ''
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

  const onSubmit = async (values: any) => {
    console.log('Submitting form...')
    console.log(values)
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
      </Detail>
    </DefaultPage>
  )
}

export default Dashboard
