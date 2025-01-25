import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import RegisterForm from './components/RegisterForm.jsx';
import EventDetails from './components/EventsDetails.jsx';
import HeroSection from './components/HeroSection.jsx';
import CountdownTimer from './components/CountdownTimer.jsx';
import './index.css';
import EventList from './components/EventList.jsx';
import Team from './components/Team.jsx';
import FundingNinjas from './components/FundingNinjas.jsx';
import Schedule from './components/Schedule.jsx';
import Contributors from './components/Contributers.jsx';
import ErrorPage from './components/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <>
            <CountdownTimer />
            <HeroSection />
            <EventList />
            <FundingNinjas />
            <Team />
          </>
        ),
      },
      {
        path: '/auth',
        element: <RegisterForm />,
      },
      {
        path: 'events',
        element: <EventList />,
      },
      {
        path: 'event-details/:id',
        element: <EventDetails />,
      },
      {
        path: 'teams',
        element: <Team />,
      },
      {
        path: 'funding-ninjas',
        element: <FundingNinjas />,
      },
      {
        path: 'schedule',
        element: <Schedule />,
      },
      {
        path: 'bug-busters',
        element: <Contributors />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);