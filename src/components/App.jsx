
import { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';


const CreatedTimer = lazy(() => import('pages/CreatedTimer'));
const Home = lazy(() => import('pages/Home'));
const TimersList = lazy(() => import('pages/TimersList'));
const OneTimer = lazy(() => import('pages/OneTimer'));
const OneOffTimer = lazy(() => import('pages/OneOffTimer'));
const Experiment = lazy(() => import('pages/Experiment'));
const Exp = lazy(() => import('pages/Exp/Exp'));

export const App = () => {

  return (
    <>
      <Suspense fallback={'soon'}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='create' element={<CreatedTimer />} />
          <Route path='timers' element={<TimersList />} />
          <Route path='timers/:id' element={<OneTimer />} />
          <Route path='one-time/:id' element={<OneOffTimer />} />
          <Route path='experiment' element={<Experiment />} />
          <Route path='exp/:id' element={<Exp/>} />
          {/* <Route path='movies/:id' element={<OneMovieDetails />}>
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={ <Reviews/>} />
          </Route> */}
          <Route path='*' element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
};
