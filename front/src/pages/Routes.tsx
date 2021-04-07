import React from 'react'
import { Redirect, Switch } from 'react-router-dom'
import { Page } from '../components/Page/Page'
import { AuthLayout } from '../layouts/AuthLayout/AuthLayout'
import { AuthPage } from './AuthPage/AuthPage'
import { CatalogPage } from './CatalogPage/CatalogPage'
import { Error404 } from './Error404/Error404'
import { RegistrationPage } from './RegistrationPage/RegistrationPage'

interface Props {
}

export const Routes: React.FC<Props> = () => {
  return (
    <Switch>
      <Redirect exact from={'/'} to={'/catalog'} />
      <Page exact onlyPublic path={'/auth'} layout={AuthLayout} component={AuthPage} />
      <Page exact onlyPublic path={'/registration'} layout={AuthLayout} component={RegistrationPage} />
      <Page exact secured path={'/catalog'} component={CatalogPage} />
      <Page path={'*'} layout={AuthLayout} component={Error404} />
    </Switch>
  )
}
