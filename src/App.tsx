// mport { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// mport ResponsiveNavbar from './components/ResponsiveNavbar';
// import { Hero } from './components/Hero';
// import { FeatureCarousel } from './components/FeatureCarousel';
// import { HowItWork } from './sections/howitwork';
// import { Subscriptions } from './sections/subscriptions';
import  { SubscriptionsPage } from './pages/SubscriptionsPage';
import { AboutPage } from './pages/AboutPage';
import { Home } from './pages/Home';
// import { Footer } from './components/Footer';
import ArnaqueGrandParent from './pages/ArnaqueGrandParent';
import ProtectionParents from './pages/ProtectionParents';
import { Blog } from './pages/Blog';
import { HowItWorkPage } from './pages/Howitwork';
import { ForSeniors } from './pages/ForSeniors';
import { ForCaregivers } from './pages/ForCaregivers';
import { ForOrgs } from './pages/ForOrgs';
// import { About } from './sections/about'
import { Support } from './pages/Support'
import { Media } from './pages/Media';
import { Presskit } from './pages/Presskit';
import { FAQ } from './pages/FAQ';
import BlogPost from './pages/BlogPost';
import { Contact } from './pages/Contact';
import { TermsAndConditions } from './pages/TandC';
import { PrivacyPolicy } from './pages/PrivacyPolicy';


function App() {
                                                                            return (
                                                                                <Routes>
                                                                                    <Route path="/" element={<Home />} />
                                                                                  
                                                                                      <Route path="/a-propos" element={<AboutPage />} />
                                                                                      <Route path="/comment-ca-marche" element={<HowItWorkPage />} />
                                                                                      <Route path="/pour-les-aines" element={<ForSeniors />} />
                                                                                      <Route path="/pour-les-proches" element={<ForCaregivers />} />
                                                                                      <Route path="/pour-les-organisations" element={<ForOrgs />} />
                                                                                        <Route path="/media" element={<Media />} />
                                                                                        <Route path="/media/press-kit" element={<Presskit /> }/>
                                                                                          <Route path="/abonnements" element={<SubscriptionsPage/>} />
                                                                                            <Route path="/protection-parents" element={<ProtectionParents />} />
                                                                                              <Route path="/arnaque-grand-parent" element={<ArnaqueGrandParent />} />

                                                                                                
                                                                                                  <Route path="/support" element={<Support/>} />
                                                                                                    <Route path="/support/contact" element={<Contact />} />
                                                                                                      <Route path="/support/faq" element={<FAQ />} />

                                                                                                        
                                                                                                          <Route path="/blog" element={<Blog />} />
                                                                                                            <Route path="/post/:slug" element={<BlogPost />} />


                                                                                                            <Route path="/politique-de-confidentialite" element={<PrivacyPolicy />} />
                                                                                                            <Route path="/terms-generales-d-utilisation" element={<TermsAndConditions />} />                                     </Routes> 
                                                                            )}                                                                                              
 export default App;
                                                                                                              