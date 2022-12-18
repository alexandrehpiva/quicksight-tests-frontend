import React, { useEffect, useMemo } from 'react'
import DefaultPage from '../../components/DefaultPage'
import { Detail } from '../../components/DefaultPage/Detail'
import { QuickSightDashboard, QuickSightUser } from '../../api/quickSight/types'
import { api } from '../../api'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Form, FormBody } from '../../components/Form/styles'
import SelectAsync from '../../components/Form/SelectAsync'


const Dashboard: React.FC = () => {
  const [userList, setUserList] = React.useState<QuickSightUser[]>([])
  const [dashboardList, setDashboardList] = React.useState<QuickSightDashboard[]>([])
  const [selectedUser, setSelectedUser] = React.useState<QuickSightUser | null>(null)
  const [selectedDashboard, setSelectedDashboard] = React.useState<QuickSightDashboard | null>(null)

  const formSchema = useMemo(
    () =>
      Yup.object().shape({
        user: Yup.string().required('User is required'),
        dashboard: Yup.string().required('Dashboard is required'),
      }),
    []
  )

  const initialValues = useMemo(
    () => ({
      user: '',
      dashboard: '',
    }),
    []
  )

  const onSubmit = async (values: any) => {
    console.log('Submitting form...')
    console.log(values)
  }

  const getDashboardData = async (name?: string) => {
    const data = await api.quickSight.getDashboardList(name)
    setDashboardList(data)
  }

  const getUserData = async (userName?: string) => {
    const data = await api.quickSight.getUserList(userName)
    setUserList(data)
  }

  useEffect(() => {
    console.log('Getting user data...')
    getUserData()
    console.log('Getting dashboard data...')
    getDashboardData()
  }, [])

  useEffect(() => {
    console.log('Selected user:', selectedUser)
  }, [selectedUser])

  useEffect(() => {
    console.log('Selected dashboard:', selectedDashboard)
  }, [selectedDashboard])

  return (
    <DefaultPage>
      <Detail>
        <h1>Dashboard</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={formSchema}
            onSubmit={onSubmit}
            validateOnChange={false}
          >
            {({ setFieldValue }) => (
              <Form>
                <FormBody>
                  <div>
                    <SelectAsync
                      name="user"
                      label="User"
                      loadOptions={async (inputValue: string) => {
                        return userList.filter((user) => user.UserName.includes(inputValue))
                      }}
                      onChange={(option: QuickSightUser | null) => {
                        setSelectedUser(option)
                        setFieldValue('user', option?.UserName)
                      }}
                      optionLabel="UserName"
                      optionValue="UserName"
                      width="230px"
                      fontSizeLabel="12px"
                    />
                  </div>
                  <div>
                    <SelectAsync
                      name="dashboard"
                      label="Dashboard"
                      loadOptions={async (inputValue: string) => {
                        return dashboardList.filter((dashboard) => dashboard.Name.includes(inputValue))
                      }}
                      onChange={(option: QuickSightDashboard | null) => {
                        setSelectedDashboard(option)
                        setFieldValue('dashboard', option?.Name)
                      }}
                      optionLabel="Name"
                      optionValue="Name"
                      width="230px"
                      fontSizeLabel="12px"
                    />
                  </div>
                </FormBody>
              </Form>
            )}
          </Formik>
      </Detail>
    </DefaultPage>
  )
}

export default Dashboard
