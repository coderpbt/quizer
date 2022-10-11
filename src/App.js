
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './component/Blog/Blog';
import ErrorElement from './component/ErrorElement/ErrorElement';
import Home from './component/Home/Home';
import Main from './component/Layout/Main';
import { DataLoader } from './component/Loader/DataLoader';
import QuizeSingle from './component/QuizeSingle/QuizeSingle';
import Statistics from './component/Statistics/Statistics';
import Topics from './component/Topics/Topics';



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement : <ErrorElement />,
      children : [
        {
          path : '/',
          loader : DataLoader,
          element : <Home />
        },
        {
          path : '/:id',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element : <QuizeSingle />
        },
        {
          path : '/topics',
          loader : DataLoader,
          element : <Topics />
        },
        {
          path : '/topics/:id',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element : <QuizeSingle />
        },
        {
          path : '/statistics',
          element : <Statistics />
        },
        {
          path : '/blog',
          element : <Blog />
        },
      ]
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
