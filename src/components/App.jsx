import { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';
import useWindowWidth from "hooks";
import NoTimerListPage from "./NoTimerListPage";

const Home = lazy(() => import('pages/Home'));

const CreateTimer = lazy(() => import('pages/CreatedTimers'));
const CreateSingleTimer = lazy(() => import('pages/CreateSingleTimer'));
const CreateIntervalTimer = lazy(() => import('pages/CreateIntervalTimer'));

const TimersList = lazy(() => import('pages/TimersList'));
const DisposableSingleTimer = lazy(() => import('pages/DisposableSingleTimer'));
const SavedSingleTimer = lazy(() => import('pages/SavedSingleTimer'));
const DisposableIntervalTimer = lazy(() => import('pages/DisposableIntervalTimer'));
const SavedIntervalTimer = lazy(() => import('pages/SavedIntervalTimer'));

export const App = () => {
  const windowWidth = useWindowWidth();

  return (
    <>
      <Suspense fallback={'soon'}>
        <Routes>
          <Route path='/' element={<Home />} />

          {windowWidth < 1023
            ?
          <>
            <Route path='create' element={<CreateTimer />}/>
            <Route path='create/simple' element={<CreateSingleTimer />} />
            <Route path='create/interval' element={<CreateIntervalTimer />} />
          </>
            :
          <Route path='create' element={<CreateTimer />}>
            <Route path='simple' element={<CreateSingleTimer />} />
            <Route path='interval' element={<CreateIntervalTimer />} />
          </Route>
          }

          <Route path='timers' element={<TimersList />} />
          <Route path='timers/single' element={<DisposableSingleTimer />} />
          <Route path='timers/single/:id' element={<SavedSingleTimer />} />
          <Route path='timers/interval' element={<DisposableIntervalTimer />} />
          <Route path='timers/interval/:id' element={<SavedIntervalTimer />} />

          <Route path='login' element={<NoTimerListPage />} />
          
          <Route path='*' element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
};
