import React from 'react';
import { Switch, Route } from 'react-router-dom';
import appInfo from './app-info';
import routes from './app-routes';
import { SideNavOuterToolbar as SideNavBarLayout } from './layouts';
import { Footer } from './Components';
import AppUser from './Components/AppUser';

export default function Content() {
  return (
    <SideNavBarLayout title={appInfo.title}>
      <AppUser />
      {/* <Switch>
        {routes.map(({ path, component }) => (
          <Route
            exact
            key={path}
            path={path}
            component={component}
          />
        ))}
      </Switch> */}
      {/* <Footer>
        Copyright © 2011-{new Date().getFullYear()} {appInfo.title} Inc.
        <br />
        All trademarks or registered trademarks are property of their
        respective owners.
      </Footer> */}
    </SideNavBarLayout>
  );
}
