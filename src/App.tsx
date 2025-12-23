import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
const SubscriptionsPage = lazy(() => import('./pages/SubscriptionsPage'));
const  AboutPage = lazy(() => import("./pages/AboutPage"));
const Home  = lazy(() => import("./pages/Home"));

const ArnaqueGrandParent = lazy(() => import('./pages/ArnaqueGrandParent'));
const  ProtectionParents = lazy(() => import('./pages/ProtectionParents'));
const  Blog = lazy(() => import('./pages/Blog'));
const HowItWorkPage = lazy(() => import('./pages/Howitwork'));
const ForSeniors = lazy(() => import('./pages/ForSeniors'));
const ForCaregivers = lazy(() => import('./pages/ForCaregivers'));
const ForOrgs = lazy(() => import('./pages/ForOrgs'));

const Support = lazy(() => import('./pages/Support'));
const Media = lazy(() => import('./pages/Media'));
const Presskit = lazy(() => import('./pages/Presskit'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Guides = lazy(() => import('./pages/Guides'));
const GuidePost = lazy(() => import('./pages/GuidePost'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Contact = lazy(() => import('./pages/Contact'));
const TermsAndConditions = lazy(() => import('./pages/TandC'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const NotFound = lazy(() => import('./pages/NotFound'));


const router = createBrowserRouter([
 {
   path: "/",
   element: <Home />,
   errorElement: <NotFound />,
 },
 {
  path: "/a-propos",
  element: <AboutPage />,
 },
 {
  path: "/abonnements",
  element: <SubscriptionsPage />,
 },
 {
  path: "/blog",
  element: <Blog />,
 },
 {
  path: "/post/:slug",
  element: <BlogPost />,
 },
 {
  path: "/guides",
  element: <Guides />,
 },
 {
  path: "/guide/:slug",
  element: <GuidePost />,
 },
 {
  path: "/comment-ca-marche",
  element: <HowItWorkPage />,
 },
 {
  path: "/pour-les-aines",
  element: <ForSeniors />,
 },
 {
  path: "/pour-les-proches",
  element: <ForCaregivers />,
 },
 {
  path: "/pour-les-organisations",
  element: <ForOrgs />,
 },
 {
  path: "/protection-parents", 
  element: <ProtectionParents />,
 },
 {
  path: "/arnaque-grand-parent",
  element: <ArnaqueGrandParent />,
 },
 {
  path: "/support",
  element: <Support />,
 },
 {
  path: "/support/contact",
  element: <Contact />,
 },
 {
  path: "/support/faq",
  element: <FAQ />,
 },
 {
  path: "/media",
  element: <Media />,
 },
 {
  path: "/media/press-kit",
  element: <Presskit />,
 },
 {
  path: "/conditions-generales-d'utilisation",
  element: <TermsAndConditions />,
 },
 {
  path: "/politique-de-confidentialite",
  element: <PrivacyPolicy />,
 },
]);


export default function App() {
  return (
    <Suspense fallback={null}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
                                                                                                              