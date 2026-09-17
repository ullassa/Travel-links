import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ServicePage } from './pages/service-page/service-page';

export const routes: Routes = [
	{ path: '', component: Home, title: 'Travel Links | Your Travel. Our Responsibility.' },
	{ path: 'cabs', component: ServicePage, data: { title: 'Cabs', eyebrow: 'Move with ease', description: 'Comfortable city rides, airport transfers and outstation cabs with professional drivers and clear, upfront quotations.' } },
	{ path: 'tempo-traveller', component: ServicePage, data: { title: 'Tempo Traveller', eyebrow: 'Travel together', description: 'Spacious, comfortable tempo travellers for family holidays, pilgrimages, events and long-distance group journeys.' } },
	{ path: 'buses', component: ServicePage, data: { title: 'Buses', eyebrow: 'Groups made simple', description: 'Reliable bus transport for schools, celebrations, tours and corporate groups, with vehicles matched to your itinerary.' } },
	{ path: 'tours', component: ServicePage, data: { title: 'Tours', eyebrow: 'Go further', description: 'Thoughtfully planned journeys across South India, made easier with trusted transport and local know-how.' } },
	{ path: 'corporate', component: ServicePage, data: { title: 'Corporate Travel', eyebrow: 'Work, connected', description: 'Dependable employee transport, airport transfers and event mobility that keeps your team moving on time.' } },
	{ path: 'about', component: ServicePage, data: { title: 'About Travel Links', eyebrow: 'The people behind the journey', description: 'We are a customer-first travel partner focused on dependable vehicles, experienced drivers and calm coordination.' } },
	{ path: 'contact', component: ServicePage, data: { title: 'Contact Us', eyebrow: 'Let us plan the road ahead', description: 'Tell us where you are going and how many people are travelling. Our team will help you choose the right vehicle.' } },
	{ path: '**', redirectTo: '' },
];
