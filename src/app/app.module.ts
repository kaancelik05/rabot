import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/layout/preloader/preloader.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { FooterEnComponent } from './components/layout/footerEn/footerEn.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ChattingComponent } from './components/common/chatting/chatting.component';
import { PartnerComponent } from './components/common/partner/partner.component';
import { PricingPlanComponent } from './components/common/pricing-plan/pricing-plan.component';
import { ClientsComponent } from './components/common/clients/clients.component';
import { FreeTrialComponent } from './components/common/free-trial/free-trial.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { AboutComponent } from './components/pages/about/about.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { TeamComponent } from './components/pages/team/team.component';
import { FeaturesComponent } from './components/pages/features/features/features.component';
import { FeaturesOneComponent } from './components/pages/features/features-one/features-one.component';
import { FeaturesTwoComponent } from './components/pages/features/features-two/features-two.component';
import { AuthComponent } from './components/pages/auth/auth/auth.component';
import { SigninComponent } from './components/pages/auth/signin/signin.component';
import { SignupComponent } from './components/pages/auth/signup/signup.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { BlogComponent } from './components/pages/blog/blog/blog.component';
import { BlogGridComponent } from './components/pages/blog/blog-grid/blog-grid.component';
import { BlogSidebarComponent } from './components/pages/blog/blog-sidebar/blog-sidebar.component';
import { BlogDetailsComponent } from './components/pages/blog/blog-details/blog-details.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { ChatbotDevelopmentServicesComponent } from './components/pages/chatbotDevelopmentService/chatbotDevelopmentServices.component';
import { ChatbotIntegrationsComponent } from './components/pages/chatbotIntegrations/chatbotIntegrations.component';
import { SectoralSolutionsComponent } from './components/pages/sectoralSolutions/sectoralSolutions-component';
import { ChatbotMessagePanelComponent } from './components/pages/chatbotMessagePanel/chatbotMessagePanel.component';
import { AnasayfaComponent } from './components/pages/anasayfa/anasayfa.component';
import { AboutEnComponent } from './components/pages/aboutEn/aboutEn.component';
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

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    HeaderComponent,
    FooterComponent,
    FooterEnComponent,
    HomeComponent,
    ChattingComponent,
    PartnerComponent,
    PricingPlanComponent,
    ClientsComponent,
    FreeTrialComponent,
    HomeTwoComponent,
    HomeThreeComponent,
    AboutComponent,
    AboutEnComponent,
    PricingComponent,
    TeamComponent,
    FeaturesComponent,
    FeaturesOneComponent,
    FeaturesTwoComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    FaqComponent,
    ErrorComponent,
    BlogComponent,
    BlogGridComponent,
    BlogGridEnComponent,
    BlogSidebarComponent,
    BlogDetailsComponent,
    ContactComponent,
    ContactEnComponent,
    ChatbotDevelopmentServicesComponent,
    ChatbotDevelopmentServicesEnComponent,
    ChatbotIntegrationsComponent,
    ChatbotIntegrationsEnComponent,
    SectoralSolutionsComponent,
    SectoralSolutionsEnComponent,
    ChatbotMessagePanelComponent,
    ChatbotMessagePanelEnComponent,
    AnasayfaComponent,
    ArtificialBlogComponent,
    ArtificialBlogEnComponent,
    UniBlogComponent,
    UniBlogEnComponent,
    HealtBlogComponent,
    HealtBlogEnComponent,
    FacebookBlogComponent,
    FacebookBlogEnComponent,
    ECommerceBlogComponent,
    ECommerceBlogEnComponent,
    WhatsappBlogComponent,
    WhatsappBlogEnComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    TranslocoRootModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
