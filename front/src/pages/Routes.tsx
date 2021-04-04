import React from 'react'
import { Redirect, Switch } from 'react-router'
import { Page } from '../components/Page/Page'
import { AuthLayout } from '../layouts/AuthLayout/AuthLayout'
import { AboutPage } from './AboutPage/AboutPage'
import { AuthPage } from './AuthPage/AuthPage'
import { CatalogPage } from './CatalogPage/CatalogPage'
import { Error404 } from './Error404/Error404'
import {Ref} from "./Ref/Ref";
import {Authors} from "./Ref/Authors/Authors";
import {Genre} from "./Ref/Genre/Genre";
import {Language} from "./Ref/Language/Language";
import {Publisher} from "./Ref/Publisher/Publisher";
import {RegPage} from "./RegPage/RegPage";


interface Props {
}

export const Routes: React.FC<Props> = () => {
  return (
    <Switch>
      <Redirect exact from={'/'} to={'/catalog'} />
      <Page path={'/registration'} layout={AuthLayout} component={RegPage} />
      <Page path={'/auth'} layout={AuthLayout} component={AuthPage} />
      <Page secured path={'/catalog'} component={CatalogPage} />
      <Page exact secured path={'/ref'} component={Ref} />
      <Page secured path={'/ref/authors'} component={Authors} />
      <Page secured path={'/ref/genre'} component={Genre} />
      <Page secured path={'/ref/language'} component={Language} />
      <Page secured path={'/ref/publisher'} component={Publisher} />
      <Page secured path={'/about'} component={AboutPage} />
      <Page path={'*'} layout={AuthLayout} component={Error404} />
    </Switch>
  )
}
