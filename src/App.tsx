import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import  { SubscriptionsPage } from './pages/SubscriptionsPage';
import { AboutPage } from './pages/AboutPage';
import { Home } from './pages/Home';

import ArnaqueGrandParent from './pages/ArnaqueGrandParent';
import ProtectionParents from './pages/ProtectionParents';
import { Blog } from './pages/Blog';
import { HowItWorkPage } from './pages/Howitwork';
import { ForSeniors } from './pages/ForSeniors';
import { ForCaregivers } from './pages/ForCaregivers';
import { ForOrgs } from './pages/ForOrgs';

import { Support } from './pages/Support'
import { Media } from './pages/Media';
import { Presskit } from './pages/Presskit';
import { FAQ } from './pages/FAQ';
import BlogPost from './pages/BlogPost';
import { Contact } from './pages/Contact';
import { TermsAndConditions } from './pages/TandC';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { NotFound } from './pages/NotFound';


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
  path: "/blog/:slug",
  element: <BlogPost />,
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
  path: "/pour-les-soignants",
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
    <RouterProvider router={router} />
  );
}
                                                                                                              