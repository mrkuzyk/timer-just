
import { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';


const CreateTimer = lazy(() => import('pages/CreatedTimer'));
const CreateSingleTimer = lazy(() => import('../pages/CreateSingleTimer'));
const CreateIntervalTimer = lazy(() => import('pages/CreateIntervalTimer'));
const Home = lazy(() => import('pages/Home'));
const TimersList = lazy(() => import('pages/TimersList'));
const OneTimer = lazy(() => import('pages/OneTimer'));
const OneOffTimer = lazy(() => import('pages/OneOffTimer'));

const Exp = lazy(() => import('pages/Exp/Exp'));

export const App = () => {

  return (
    <>
      <Suspense fallback={'soon'}>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='create' element={<CreateTimer />} />
          <Route path='/create/simple' element={<CreateSingleTimer />} />
          <Route path='/create/interval' element={<CreateIntervalTimer />} />

          <Route path='timers' element={<TimersList />} />
          <Route path='timers/:id' element={<OneTimer />} />
          <Route path='one-time/:id' element={<OneOffTimer />} />
          <Route path='exp/:id' element={<Exp />} />
          
          <Route path='*' element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
};
