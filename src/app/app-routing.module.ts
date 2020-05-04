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
import { AnasayfaComponent } from './components/pages/anasayfa/anasayfa.component';
import { AboutEnComponent } from './components/pages/aboutEn/aboutEn.component';
// tslint:disable-next-line: max-line-length
import { ChatbotDevelopmentServicesEnComponent } from './components/pages/chatbotDevelopmentServiceEn/chatbotDevelopmentServicesEn.component';
import { ChatbotIntegrationsEnComponent } from './components/pages/chatbotIntegrationsEn/chatbotIntegrationsEn.component';
import { SectoralSolutionsEnComponent } from './components/pages/sectoralSolutionsEn/sectoralSolutionsEn-component';
import { ChatbotMessagePanelEnComponent } from './components/pages/chatbotMessagePanelEn/chatbotMessagePanelEn.component';
import { ArtificialBlogComponent } from './components/pages/blog/artificialBlog/artificial-blog.component';
import { ArtificialBlogEnComponent } from './components/pages/blog/artificialBlogEn/artificial-blogEn.component';
import { UniBlogComponent } from './components/pages/blog/üni-blog/uni-blog.component';
import { UniBlogEnComponent } from './components/pages/blog/üni-blogEn/uni-blogEn.component';
import { BlogGridEnComponent } from './components/pages/blog/blog-gridEn/blog-gridEn.component';
import { HealtBlogEnComponent } from './components/pages/blog/healt-blogEn/healt-blogEn.component';
import { HealtBlogComponent } from './components/pages/blog/healt-blog/healt-blog.component';
import { FacebookBlogComponent } from './components/pages/blog/facebook-blog/facebook-blog.component';
import { FacebookBlogEnComponent } from './components/pages/blog/facebook-blogEn/facebook-blogEn.component';
import { ECommerceBlogComponent } from './components/pages/blog/ecommerce-blog/ecommerce-blog.component';
import { ECommerceBlogEnComponent } from './components/pages/blog/ecommerce-blogEn/ecommerce-blogEn.component';
import { WhatsappBlogComponent } from './components/pages/blog/whatsapp-blog/whatsapp-blog.component';
import { WhatsappBlogEnComponent } from './components/pages/blog/whatsapp-blogEn/whatsapp-blogEn.component';
import { ContactEnComponent } from './components/pages/contactEn/contactEn.component';

const routes: Routes = [
    { path: '', redirectTo: '/anasayfa' , pathMatch: 'full' },
    { path: 'home', component: HomeTwoComponent },
    { path: 'anasayfa', component: AnasayfaComponent },
    { path: 'chatbot-gelistirme-servisleri', component: ChatbotDevelopmentServicesComponent },
    { path: 'chatbot-development-services', component: ChatbotDevelopmentServicesEnComponent },
    { path: 'chatbot-entegrasyonları', component: ChatbotIntegrationsComponent },
    { path: 'chatbot-integrations', component: ChatbotIntegrationsEnComponent },
    { path: 'sektorel-chatbot-cozumleri', component: SectoralSolutionsComponent },
    { path: 'sectoral-chatbot-solutions', component: SectoralSolutionsEnComponent },
    { path: 'chatbot-mesajlasma-ve-yonetim-paneli', component: ChatbotMessagePanelComponent },
    { path: 'chatbot-messaging-and-management-panel', component: ChatbotMessagePanelEnComponent },
    // { path: 'home-three', component: HomeThreeComponent },
    { path: 'biz-kimiz', component: AboutComponent },
    { path: 'who-we-are', component: AboutEnComponent},
    { path: 'pricing', component: PricingComponent },
    // { path: 'team', component: TeamComponent },
    { path: 'blog-haberler', component: BlogGridComponent },
    { path: 'blog-news', component: BlogGridEnComponent },
    { path: 'blog-details', component: BlogDetailsComponent },
    { path: 'yapay-zeka-destekli-chatbot', component: ArtificialBlogComponent },
    { path: 'artificial-intelligent-chatbot', component: ArtificialBlogEnComponent },
    { path: 'universitelerde-chatbot', component: UniBlogComponent },
    { path: 'chatbot-at-universities', component: UniBlogEnComponent },
    { path: 'saglik-sektorunde-chatbot', component: HealtBlogComponent },
    { path: 'chatbot-in-the-healthcare-industry', component: HealtBlogEnComponent },
    { path: 'tr/facebook-messenger-chatbot', component: FacebookBlogComponent },
    { path: 'en/facebook-messenger-chatbot', component: FacebookBlogEnComponent },
    { path: 'e-ticaret-sitesi-icin-chatbotlar', component: ECommerceBlogComponent },
    { path: 'chatbots-for-e-commerce-website', component: ECommerceBlogEnComponent },
    { path: 'tr/whatsapp-messenger-chatbot', component: WhatsappBlogComponent },
    { path: 'en/whatsapp-messenger-chatbot', component: WhatsappBlogEnComponent },
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
    { path: 'iletisim', component: ContactComponent },
    { path: 'contact', component: ContactEnComponent },
    { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
