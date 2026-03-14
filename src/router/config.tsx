import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const TermsOfService = lazy(() => import('../pages/terms-of-service/page'));
const PrivacyPolicy = lazy(() => import('../pages/privacy-policy/page'));
const CookiePolicy = lazy(() => import('../pages/cookie-policy/page'));
const GDPRCompliance = lazy(() => import('../pages/gdpr-compliance/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/terms-of-service',
    element: <TermsOfService />,
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicy />,
  },
  {
    path: '/cookie-policy',
    element: <CookiePolicy />,
  },
  {
    path: '/gdpr-compliance',
    element: <GDPRCompliance />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;