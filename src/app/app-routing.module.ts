import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { AboutComponent } from './components/pages/about/about.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { TeamComponent } from './components/pages/team/team.component';
import { FeaturesComponent } from './components/pages/features/features/features.component';
import { FeaturesOneComponent } from './components/pages/features/features-one/features-one.component';
import { FeaturesTwoComponent } from './components/pages/features/features-two/features-two.component';
import { AuthComponent } from './components/pages/auth/auth/auth.component';
import { SignupComponent } from './components/pages/auth/signup/signup.component';
import { SigninComponent } from './components/pages/auth/signin/signin.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { BlogComponent } from './components/pages/blog/blog/blog.component';
import { BlogGridComponent } from './components/pages/blog/blog-grid/blog-grid.component';
import { BlogSidebarComponent } from './components/pages/blog/blog-sidebar/blog-sidebar.component';
import { BlogDetailsComponent } from './components/pages/blog/blog-details/blog-details.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ChatbotDevelopmentServicesComponent} from './components/pages/chatbotDevelopmentService/chatbotDevelopmentServices.component';
import { ChatbotIntegrationsComponent } from './components/pages/chatbotIntegrations/chatbotIntegrations.component';
import { SectoralSolutionsComponent } from './components/pages/sectoralSolutions/sectoralSolutions-component';
import { ChatbotMessagePanelComponent } from './components/pages/chatbotMessagePanel/chatbotMessagePanel.component';

const routes: Routes = [
    // { path: '', component: HomeComponent },
    { path: '', component: HomeTwoComponent },
    { path: 'chatbot-development-services', component: ChatbotDevelopmentServicesComponent },
    { path: 'chatbot-integrations', component: ChatbotIntegrationsComponent },
    { path: 'sectoral-solutions', component: SectoralSolutionsComponent },
    { path: 'chatbot-message-panel', component: ChatbotMessagePanelComponent },
    { path: 'home-three', component: HomeThreeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'pricing', component: PricingComponent },
    { path: 'team', component: TeamComponent },
    {
        path: 'features', component: FeaturesComponent,
        children: [
            {
                path: 'features-1',
                component: FeaturesOneComponent
            },
            {
                path: 'features-2',
                component: FeaturesTwoComponent
            }
        ]
    },
    {
        path: 'auth', component: AuthComponent,
        children: [
            {
                path: 'signup',
                component: SignupComponent
            },
            {
                path: 'signin',
                component: SigninComponent
            }
        ]
    },
    {
        path: 'blog', component: BlogComponent,
        children: [
            {
                path: 'blog-grid',
                component: BlogGridComponent
            },
            {
                path: 'blog-with-right-sidebar',
                component: BlogSidebarComponent
            },
            {
                path: 'blog-details',
                component: BlogDetailsComponent
            }
        ]
    },
    { path: 'faq', component: FaqComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
