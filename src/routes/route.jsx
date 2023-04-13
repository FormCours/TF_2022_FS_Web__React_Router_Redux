import App from '../App';
import AboutPage from '../pages/about/about.page';
import NotFoundPage from '../pages/errors/not-found.page';
import HomePage from '../pages/home/home.page';

export const route = [
  {
    path: '',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ]
  },
  
]